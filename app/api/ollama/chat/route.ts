import { OLLAMA_URL, type ChatMessage } from "@/lib/ollama"

export const dynamic = "force-dynamic"

// POST { model, messages, system? } -> streams the assistant reply as plain text.
export async function POST(req: Request) {
  const { model, messages, system } = (await req.json()) as {
    model?: string
    messages?: ChatMessage[]
    system?: string
  }
  if (!model || !messages?.length) {
    return Response.json({ error: "model and messages are required" }, { status: 400 })
  }

  const body = {
    model,
    stream: true,
    think: false,
    messages: system ? [{ role: "system", content: system }, ...messages] : messages,
  }

  let upstream: Response
  try {
    upstream = await fetch(`${OLLAMA_URL}/api/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: req.signal,
    })
  } catch {
    return Response.json({ error: "Cannot reach Ollama. Is it running?" }, { status: 502 })
  }
  if (!upstream.ok || !upstream.body) {
    const text = await upstream.text().catch(() => "")
    return Response.json({ error: text || `Ollama error ${upstream.status}` }, { status: 502 })
  }

  const decoder = new TextDecoder()
  const encoder = new TextEncoder()
  let buffer = ""
  const stream = upstream.body.pipeThrough(
    new TransformStream<Uint8Array, Uint8Array>({
      transform(chunk, controller) {
        buffer += decoder.decode(chunk, { stream: true })
        const lines = buffer.split("\n")
        buffer = lines.pop() ?? ""
        for (const line of lines) {
          if (!line.trim()) continue
          try {
            const j = JSON.parse(line)
            if (j.error) controller.enqueue(encoder.encode(`\n[Ollama error: ${j.error}]`))
            else if (j.message?.content) controller.enqueue(encoder.encode(j.message.content))
          } catch {}
        }
      },
    }),
  )
  return new Response(stream, { headers: { "Content-Type": "text/plain; charset=utf-8" } })
}
