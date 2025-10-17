import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrainingSessionsList } from "@/components/training/training-sessions-list"
import { ModelsList } from "@/components/training/models-list"
import { TrainingForm } from "@/components/training/training-form"
import { MetricsPanel } from "@/components/training/metrics-panel"

export default function TrainingHubPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Training Hub</h1>
      </div>
      <Tabs defaultValue="active" className="space-y-4">
        <TabsList>
          <TabsTrigger value="active">Active Sessions</TabsTrigger>
          <TabsTrigger value="new">New Training</TabsTrigger>
          <TabsTrigger value="models">Models</TabsTrigger>
          <TabsTrigger value="metrics">Metrics</TabsTrigger>
        </TabsList>
        <TabsContent value="active" className="space-y-4">
          <TrainingSessionsList />
        </TabsContent>
        <TabsContent value="new" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Create New Training Session</CardTitle>
              <CardDescription>Configure parameters for a new agent training session</CardDescription>
            </CardHeader>
            <CardContent>
              <TrainingForm />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="models" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Available Models</CardTitle>
              <CardDescription>Models available for agent training</CardDescription>
            </CardHeader>
            <CardContent>
              <ModelsList />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="metrics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Training Metrics</CardTitle>
              <CardDescription>Performance metrics for training sessions</CardDescription>
            </CardHeader>
            <CardContent>
              <MetricsPanel />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

