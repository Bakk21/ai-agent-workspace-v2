"use client"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Search,
  MoreHorizontal,
  Play,
  Pause,
  RefreshCcw,
  AlertCircle,
  Clock,
  CheckCircle2,
  XCircle,
} from "lucide-react"

const activeTasks = [
  {
    id: "TASK-1234",
    agent: "Research Assistant",
    description: "Search for relevant papers on AI safety",
    priority: "High",
    status: "In Progress",
    createdAt: "2023-09-15 09:30 AM",
    progress: 45,
  },
  {
    id: "TASK-1235",
    agent: "Document Analyzer",
    description: "Extract key points from quarterly report",
    priority: "Medium",
    status: "Queued",
    createdAt: "2023-09-15 10:15 AM",
    progress: 0,
  },
  {
    id: "TASK-1236",
    agent: "Data Processor",
    description: "Clean and normalize customer survey data",
    priority: "Low",
    status: "Paused",
    createdAt: "2023-09-14 02:45 PM",
    progress: 72,
  },
  {
    id: "TASK-1237",
    agent: "Text Summarizer",
    description: "Create summary of marketing strategy document",
    priority: "High",
    status: "In Progress",
    createdAt: "2023-09-14 11:20 AM",
    progress: 89,
  },
  {
    id: "TASK-1238",
    agent: "Research Assistant",
    description: "Find competing products and compare features",
    priority: "Medium",
    status: "Error",
    createdAt: "2023-09-13 03:50 PM",
    progress: 28,
  },
]

const completedTasks = [
  {
    id: "TASK-1230",
    agent: "Research Assistant",
    description: "Gather information on market trends",
    priority: "Medium",
    status: "Completed",
    createdAt: "2023-09-12 10:30 AM",
    completedAt: "2023-09-12 11:45 AM",
  },
  {
    id: "TASK-1231",
    agent: "Document Analyzer",
    description: "Analyze customer feedback",
    priority: "High",
    status: "Completed",
    createdAt: "2023-09-11 09:15 AM",
    completedAt: "2023-09-11 10:30 AM",
  },
  {
    id: "TASK-1232",
    agent: "Data Processor",
    description: "Generate monthly report statistics",
    priority: "Low",
    status: "Completed",
    createdAt: "2023-09-10 02:20 PM",
    completedAt: "2023-09-10 02:45 PM",
  },
  {
    id: "TASK-1233",
    agent: "Customer Support",
    description: "Draft responses for common inquiries",
    priority: "High",
    status: "Completed",
    createdAt: "2023-09-09 11:00 AM",
    completedAt: "2023-09-09 12:15 PM",
  },
]

export function TasksList({ status }: { status: "active" | "completed" }) {
  const tasks = status === "active" ? activeTasks : completedTasks

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "In Progress":
        return <Clock className="mr-1 h-3 w-3" />
      case "Queued":
        return <Clock className="mr-1 h-3 w-3" />
      case "Paused":
        return <Pause className="mr-1 h-3 w-3" />
      case "Completed":
        return <CheckCircle2 className="mr-1 h-3 w-3" />
      case "Error":
        return <XCircle className="mr-1 h-3 w-3" />
      default:
        return null
    }
  }

  const getStatusBadge = (status: string) => {
    let variant = "default"
    let className = ""

    switch (status) {
      case "In Progress":
        variant = "outline"
        className = "border-blue-500 text-blue-500"
        break
      case "Queued":
        variant = "outline"
        className = "border-amber-500 text-amber-500"
        break
      case "Paused":
        variant = "secondary"
        break
      case "Completed":
        variant = "default"
        className = "bg-green-500 hover:bg-green-600"
        break
      case "Error":
        variant = "destructive"
        break
      default:
        break
    }

    return (
      <Badge variant={variant as any} className={className}>
        {getStatusIcon(status)}
        {status}
      </Badge>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="relative w-full md:w-80">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search tasks..." className="w-full pl-8" />
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Task ID</TableHead>
              <TableHead>Agent</TableHead>
              <TableHead className="hidden md:table-cell">Description</TableHead>
              <TableHead>Priority</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="hidden sm:table-cell">{status === "active" ? "Created" : "Completed"}</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tasks.map((task) => (
              <TableRow key={task.id}>
                <TableCell className="font-medium">{task.id}</TableCell>
                <TableCell>{task.agent}</TableCell>
                <TableCell className="hidden md:table-cell max-w-xs truncate">{task.description}</TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={
                      task.priority === "High"
                        ? "border-red-500 text-red-500"
                        : task.priority === "Medium"
                          ? "border-amber-500 text-amber-500"
                          : "border-green-500 text-green-500"
                    }
                  >
                    {task.priority}
                  </Badge>
                </TableCell>
                <TableCell>{getStatusBadge(task.status)}</TableCell>
                <TableCell className="hidden sm:table-cell">
                  {status === "active" ? task.createdAt : task.completedAt}
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      {task.status === "In Progress" && (
                        <DropdownMenuItem>
                          <Pause className="mr-2 h-4 w-4" /> Pause
                        </DropdownMenuItem>
                      )}
                      {task.status === "Paused" && (
                        <DropdownMenuItem>
                          <Play className="mr-2 h-4 w-4" /> Resume
                        </DropdownMenuItem>
                      )}
                      {task.status === "Error" && (
                        <DropdownMenuItem>
                          <RefreshCcw className="mr-2 h-4 w-4" /> Retry
                        </DropdownMenuItem>
                      )}
                      <DropdownMenuItem>
                        <AlertCircle className="mr-2 h-4 w-4" /> View Details
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

