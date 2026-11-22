"use client"
import { useCallback, useEffect, useState } from "react"
import type { OllamaModel } from "@/lib/ollama"

// TODO: share one fetch between components (each picker currently re-fetches) - use a context or SWR
export function useOllamaModels() {
  const [models, setModels] = useState<OllamaModel[]>([])
  const [online, setOnline] = useState<boolean | null>(null) // null = loading
  const [error, setError] = useState<string | undefined>()

  const refresh = useCallback(async () => {
    setOnline(null)
    try {
      const res = await fetch("/api/ollama/models", { cache: "no-store" })
      const data = await res.json()
      setModels(data.models ?? [])
      setOnline(!!data.online)
      setError(data.error)
    } catch (e: any) {
      setModels([])
      setOnline(false)
      setError(e?.message)
    }
  }, [])

  useEffect(() => {
    refresh()
  }, [refresh])

  return { models, online, error, refresh }
}
