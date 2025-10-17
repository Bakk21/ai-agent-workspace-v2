"use client"

import { memo } from "react"
import { Handle, Position } from "reactflow"
import { cn } from "@/lib/utils"

export const ComponentNode = memo(({ data, selected }) => {
  const typeColors = {
    core: "bg-blue-100 border-blue-500 dark:bg-blue-950 dark:border-blue-400",
    memory: "bg-green-100 border-green-500 dark:bg-green-950 dark:border-green-400",
    tool: "bg-amber-100 border-amber-500 dark:bg-amber-950 dark:border-amber-400",
    processor: "bg-purple-100 border-purple-500 dark:bg-purple-950 dark:border-purple-400",
    output: "bg-red-100 border-red-500 dark:bg-red-950 dark:border-red-400",
  }

  return (
    <div
      className={cn(
        "rounded-md border-2 p-3 shadow-md",
        typeColors[data.type] || "bg-background border-border",
        selected && "ring-2 ring-primary",
      )}
    >
      <div className="text-center font-bold">{data.label}</div>
      <div className="text-xs text-muted-foreground text-center">{data.type}</div>
      <div className="text-xs mt-2">{data.description}</div>

      {data.inputs &&
        data.inputs.map((input, i) => (
          <Handle
            key={`input-${i}`}
            type="target"
            position={Position.Top}
            id={input}
            style={{ left: `${(i + 1) * (100 / (data.inputs.length + 1))}%` }}
            className="w-3 h-3 bg-primary"
          />
        ))}

      {data.outputs &&
        data.outputs.map((output, i) => (
          <Handle
            key={`output-${i}`}
            type="source"
            position={Position.Bottom}
            id={output}
            style={{ left: `${(i + 1) * (100 / (data.outputs.length + 1))}%` }}
            className="w-3 h-3 bg-primary"
          />
        ))}
    </div>
  )
})

ComponentNode.displayName = "ComponentNode"

