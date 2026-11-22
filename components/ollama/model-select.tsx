"use client"
import { useEffect } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useOllamaModels } from "@/hooks/use-ollama-models"

interface Props {
  value: string
  onValueChange: (v: string) => void
  id?: string
}

// Dropdown that lists ONLY models installed in the local Ollama.
export function OllamaModelSelect({ value, onValueChange, id }: Props) {
  const { models, online } = useOllamaModels()

  // Auto-pick the first installed model if nothing valid is selected.
  useEffect(() => {
    if (models.length && !models.some((m) => m.name === value)) onValueChange(models[0].name)
  }, [models, value, onValueChange])

  const placeholder =
    online === null ? "Loading models…" : online === false ? "Ollama offline" : models.length === 0 ? "No models installed" : "Select a model"

  return (
    <Select value={models.some((m) => m.name === value) ? value : undefined} onValueChange={onValueChange} disabled={!models.length}>
      <SelectTrigger id={id}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {models.map((m) => (
          <SelectItem key={m.name} value={m.name}>
            {m.name}
            {m.parameterSize ? ` · ${m.parameterSize}` : ""}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
