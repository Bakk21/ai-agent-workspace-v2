"use client"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { OllamaModelSelect } from "@/components/ollama/model-select"
import { useOllamaModels } from "@/hooks/use-ollama-models"
import { Badge } from "@/components/ui/badge"
import type { ChatMessage } from "@/lib/ollama"
import { Send, Square, Trash } from "lucide-react"

export function AgentTestChat() {
  const { online } = useOllamaModels()
  const [model, setModel] = useState("")
  // TODO: add temperature/num_ctx controls and a thinking-mode toggle (route currently forces think:false)
  const [system, setSystem] = useState("You are a helpful research assistant. Answer concisely.")
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [input, setInput] = useState("")
  const [busy, setBusy] = useState(false)
  const abortRef = useRef<AbortController | null>(null)

  async function send() {
    const text = input.trim()
    if (!text || !model || busy) return
    const history: ChatMessage[] = [...messages, { role: "user", content: text }]
    setMessages([...history, { role: "assistant", content: "" }])
    setInput("")
    setBusy(true)
    const ctrl = new AbortController()
    abortRef.current = ctrl
    const setReply = (c: string) => setMessages((prev) => [...prev.slice(0, -1), { role: "assistant", content: c }])
    try {
      const res = await fetch("/api/ollama/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ model, system, messages: history }),
        signal: ctrl.signal,
      })
      if (!res.ok || !res.body) {
        const err = await res.json().catch(() => ({}))
        setReply(`[Error: ${err.error ?? res.status}]`)
        return
      }
      const reader = res.body.getReader()
      const dec = new TextDecoder()
      let acc = ""
      for (;;) {
        const { done, value } = await reader.read()
        if (done) break
        acc += dec.decode(value, { stream: true })
        setReply(acc)
      }
    } catch (e: any) {
      if (e?.name !== "AbortError") setReply(`[Error: ${e?.message}]`)
    } finally {
      setBusy(false)
      abortRef.current = null
    }
  }

  return (
    <div className="flex h-[500px] gap-4">
      <div className="w-64 space-y-3">
        <div className="space-y-2">
          <Label>Model</Label>
          <OllamaModelSelect value={model} onValueChange={setModel} />
          <Badge variant={online ? "default" : "outline"}>{online === null ? "Checking Ollama…" : online ? "Ollama online" : "Ollama offline"}</Badge>
        </div>
        <div className="space-y-2">
          <Label>System prompt</Label>
          <Textarea rows={8} value={system} onChange={(e) => setSystem(e.target.value)} />
        </div>
        <Button variant="outline" size="sm" onClick={() => setMessages([])} disabled={busy}>
          <Trash className="mr-2 h-4 w-4" /> Clear chat
        </Button>
      </div>
      <div className="flex flex-1 flex-col rounded-md border">
        <div className="flex-1 space-y-3 overflow-auto p-4">
          {messages.length === 0 && <p className="text-sm text-muted-foreground">Send a message to test your agent on a local model.</p>}
          {messages.map((m, i) => (
            <div key={i} className={m.role === "user" ? "text-right" : ""}>
              <div className={`inline-block max-w-[85%] whitespace-pre-wrap rounded-md px-3 py-2 text-sm ${m.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"}`}>
                {m.content || (busy && i === messages.length - 1 ? "…" : "")}
              </div>
            </div>
          ))}
        </div>
        <form
          className="flex gap-2 border-t p-3"
          onSubmit={(e) => {
            e.preventDefault()
            send()
          }}
        >
          <Textarea
            rows={2}
            value={input}
            placeholder="Type a message…"
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault()
                send()
              }
            }}
          />
          {busy ? (
            <Button type="button" variant="destructive" onClick={() => abortRef.current?.abort()}>
              <Square className="h-4 w-4" />
            </Button>
          ) : (
            <Button type="submit" disabled={!model || !input.trim()}>
              <Send className="h-4 w-4" />
            </Button>
          )}
        </form>
      </div>
    </div>
  )
}
