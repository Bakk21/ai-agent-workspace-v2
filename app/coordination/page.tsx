import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CoordinationDiagram } from "@/components/coordination/coordination-diagram"
import { AgentInteractions } from "@/components/coordination/agent-interactions"
import { CommunicationLogs } from "@/components/coordination/communication-logs"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CoordinationPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Multi-Agent Coordination</h1>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="interactions">Agent Interactions</TabsTrigger>
          <TabsTrigger value="logs">Communication Logs</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Agent Coordination Map</CardTitle>
              <CardDescription>Visual representation of agent relationships and interactions</CardDescription>
            </CardHeader>
            <CardContent>
              <CoordinationDiagram />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="interactions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Agent Interactions</CardTitle>
              <CardDescription>Statistics and details on agent-to-agent interactions</CardDescription>
            </CardHeader>
            <CardContent>
              <AgentInteractions />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="logs" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Communication Logs</CardTitle>
              <CardDescription>Detailed logs of inter-agent communications</CardDescription>
            </CardHeader>
            <CardContent>
              <CommunicationLogs />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

