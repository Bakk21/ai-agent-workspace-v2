"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

export function AgentPropertiesPanel({ selectedNode }) {
  if (!selectedNode) {
    return (
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm">Properties</CardTitle>
          <CardDescription className="text-xs">Select a node to view properties</CardDescription>
        </CardHeader>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm">Properties</CardTitle>
        <CardDescription className="text-xs">Configure {selectedNode.data.label}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" defaultValue={selectedNode.data.label} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea id="description" defaultValue={selectedNode.data.description} rows={3} />
        </div>
        <div className="space-y-2">
          <Label>Type</Label>
          <div className="text-sm bg-muted p-2 rounded-md">{selectedNode.data.type}</div>
        </div>
        {selectedNode.data.type === "memory" && (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="capacity">Memory Capacity</Label>
              <Input id="capacity" type="number" defaultValue={1000} />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="persistence" defaultChecked />
              <Label htmlFor="persistence">Enable Persistence</Label>
            </div>
          </div>
        )}
        {selectedNode.data.type === "tool" && (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="apiKey">API Key</Label>
              <Input id="apiKey" placeholder="Enter API key" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="timeout">Timeout (ms)</Label>
              <Input id="timeout" type="number" defaultValue={5000} />
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

