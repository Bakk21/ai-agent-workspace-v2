import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TasksList } from "@/components/tasks/tasks-list"
import { TaskForm } from "@/components/tasks/task-form"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TasksPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Tasks Manager</h1>
      </div>

      <Tabs defaultValue="active" className="space-y-4">
        <TabsList>
          <TabsTrigger value="active">Active Tasks</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="new">New Task</TabsTrigger>
        </TabsList>
        <TabsContent value="active" className="space-y-4">
          <TasksList status="active" />
        </TabsContent>
        <TabsContent value="completed" className="space-y-4">
          <TasksList status="completed" />
        </TabsContent>
        <TabsContent value="new" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Create New Task</CardTitle>
              <CardDescription>Define a new task for an agent to complete</CardDescription>
            </CardHeader>
            <CardContent>
              <TaskForm />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

