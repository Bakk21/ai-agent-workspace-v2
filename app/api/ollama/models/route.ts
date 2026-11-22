import { OLLAMA_URL, type OllamaModel } from "@/lib/ollama"

export const dynamic = "force-dynamic"

// Returns ONLY models that are actually installed in Ollama.
export async function GET() {
  try {
    const res = await fetch(`${OLLAMA_URL}/api/tags`, { signal: AbortSignal.timeout(4000), cache: "no-store" })
    if (!res.ok) throw new Error(`Ollama responded ${res.status}`)
    const data = await res.json()
    const models: OllamaModel[] = (data.models ?? []).map((m: any) => ({
      name: m.name,
      size: m.size,
      modifiedAt: m.modified_at,
      family: m.details?.family,
      parameterSize: m.details?.parameter_size,
      quantization: m.details?.quantization_level,
      capabilities: m.capabilities ?? [],
    }))
    return Response.json({ online: true, models })
  } catch (e: any) {
    return Response.json({ online: false, models: [], error: e?.message ?? "Ollama unreachable" })
  }
}
