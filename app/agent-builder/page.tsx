import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AgentBuilderPanel } from "@/components/agent-builder/agent-builder-panel"

export default function AgentBuilderPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Agent Builder</h1>
      </div>
      <div className="grid gap-4 md:grid-cols-1">
        <Card>
          <CardHeader>
            <CardTitle>Visual Agent Builder</CardTitle>
            <CardDescription>Drag and drop components to build your agent's architecture</CardDescription>
          </CardHeader>
          <CardContent>
            <AgentBuilderPanel />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

