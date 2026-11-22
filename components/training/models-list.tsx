"use client"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { RefreshCcw } from "lucide-react"
import { useOllamaModels } from "@/hooks/use-ollama-models"

const gb = (b: number) => `${(b / 1024 ** 3).toFixed(1)} GB`

// Real models installed in the local Ollama.
export function ModelsList() {
  const { models, online, error, refresh } = useOllamaModels()
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <Badge variant={online ? "default" : "outline"}>
          {online === null ? "Checking Ollama…" : online ? `Ollama online · ${models.length} model(s)` : "Ollama offline"}
        </Badge>
        <Button variant="outline" size="sm" onClick={refresh}>
          <RefreshCcw className="mr-2 h-4 w-4" /> Refresh
        </Button>
      </div>
      {online === false && <p className="text-sm text-muted-foreground">Cannot reach Ollama{error ? `: ${error}` : ""}. Start it with <code>ollama serve</code>.</p>}
      {online && models.length === 0 && <p className="text-sm text-muted-foreground">No models installed. Run e.g. <code>ollama pull qwen3.5:9b</code>.</p>}
      {models.length > 0 && (
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead className="hidden md:table-cell">Params</TableHead>
                <TableHead className="hidden md:table-cell">Quant</TableHead>
                <TableHead className="hidden md:table-cell">Size</TableHead>
                <TableHead className="hidden sm:table-cell">Modified</TableHead>
                <TableHead>Capabilities</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {models.map((m) => (
                <TableRow key={m.name}>
                  <TableCell className="font-medium">{m.name}</TableCell>
                  <TableCell className="hidden md:table-cell">{m.parameterSize ?? "—"}</TableCell>
                  <TableCell className="hidden md:table-cell">{m.quantization ?? "—"}</TableCell>
                  <TableCell className="hidden md:table-cell">{gb(m.size)}</TableCell>
                  <TableCell className="hidden sm:table-cell">{new Date(m.modifiedAt).toLocaleDateString()}</TableCell>
                  <TableCell className="space-x-1">
                    {m.capabilities.map((c) => (
                      <Badge key={c} variant="secondary">
                        {c}
                      </Badge>
                    ))}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  )
}
