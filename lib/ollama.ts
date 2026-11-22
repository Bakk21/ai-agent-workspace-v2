// Server-side helpers for talking to a local Ollama instance.
export const OLLAMA_URL = process.env.OLLAMA_HOST ?? "http://localhost:11434"

export interface OllamaModel {
  name: string
  size: number
  modifiedAt: string
  family?: string
  parameterSize?: string
  quantization?: string
  capabilities: string[]
}

export type ChatMessage = { role: "system" | "user" | "assistant"; content: string }
