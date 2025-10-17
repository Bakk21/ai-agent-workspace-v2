import { Check, Clock, XCircle, AlertCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const tasks = [
  {
    id: "TASK-8782",
    agent: "Research Assistant",
    description: "Analyze market trends in AI",
    status: "completed",
    time: "2 minutes ago",
  },
  {
    id: "TASK-7891",
    agent: "Document Analyzer",
    description: "Extract key points from quarterly report",
    status: "completed",
    time: "12 minutes ago",
  },
  {
    id: "TASK-6591",
    agent: "Research Assistant",
    description: "Find similar research papers",
    status: "in-progress",
    time: "45 minutes ago",
  },
  {
    id: "TASK-5421",
    agent: "Customer Support",
    description: "Generate response to ticket #45892",
    status: "failed",
    time: "1 hour ago",
  },
  {
    id: "TASK-4321",
    agent: "Customer Support",
    description: "Analyze sentiment in customer feedback",
    status: "warning",
    time: "3 hours ago",
  },
]

export function RecentTasks() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Task ID</TableHead>
          <TableHead>Agent</TableHead>
          <TableHead className="hidden md:table-cell">Description</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="hidden sm:table-cell">Time</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tasks.map((task) => (
          <TableRow key={task.id}>
            <TableCell className="font-medium">{task.id}</TableCell>
            <TableCell>{task.agent}</TableCell>
            <TableCell className="hidden md:table-cell">{task.description}</TableCell>
            <TableCell>
              <div className="flex w-[80px] items-center">
                {task.status === "completed" && (
                  <Badge className="bg-green-500 hover:bg-green-600">
                    <Check className="mr-1 h-3 w-3" />
                    Done
                  </Badge>
                )}
                {task.status === "in-progress" && (
                  <Badge variant="outline" className="border-blue-500 text-blue-500">
                    <Clock className="mr-1 h-3 w-3" />
                    Active
                  </Badge>
                )}
                {task.status === "failed" && (
                  <Badge variant="destructive">
                    <XCircle className="mr-1 h-3 w-3" />
                    Failed
                  </Badge>
                )}
                {task.status === "warning" && (
                  <Badge variant="outline" className="border-yellow-500 text-yellow-500">
                    <AlertCircle className="mr-1 h-3 w-3" />
                    Warning
                  </Badge>
                )}
              </div>
            </TableCell>
            <TableCell className="hidden sm:table-cell">{task.time}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

