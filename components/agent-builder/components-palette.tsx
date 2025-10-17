"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Database, PenToolIcon as Tool, Cpu, ArrowUpDown } from "lucide-react"

const componentTypes = [
  {
    type: "core",
    name: "Agent Core",
    description: "Main processing unit",
    icon: Brain,
  },
  {
    type: "memory",
    name: "Memory",
    description: "Stores agent context",
    icon: Database,
  },
  {
    type: "tool",
    name: "Tool",
    description: "External task execution",
    icon: Tool,
  },
  {
    type: "processor",
    name: "Processor",
    description: "Data transformation",
    icon: Cpu,
  },
  {
    type: "output",
    name: "Output",
    description: "Response generation",
    icon: ArrowUpDown,
  },
]

export function ComponentsPalette() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm">Components</CardTitle>
        <CardDescription className="text-xs">Drag to canvas</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        {componentTypes.map((component) => (
          <div
            key={component.type}
            className="flex items-center gap-2 rounded-md border bg-card p-2 cursor-move"
            draggable
            onDragStart={(e) => {
              e.dataTransfer.setData("application/reactflow", JSON.stringify(component))
              e.dataTransfer.effectAllowed = "move"
            }}
          >
            <component.icon className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-xs font-medium leading-none">{component.name}</p>
              <p className="text-xs text-muted-foreground">{component.description}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

