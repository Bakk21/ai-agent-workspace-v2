import { Badge } from "@/components/ui/badge"
import { Check, AlertCircle, Play, Pause, FileText } from "lucide-react"

// Sample activity logs
const activityLogs = [
  {
    id: "LOG-1001",
    agent: "Research Assistant",
    action: "task_completed",
    details: "Completed research on AI safety papers",
    timestamp: "2023-09-15 14:32:15",
  },
  {
    id: "LOG-1002",
    agent: "Document Analyzer",
    action: "task_started",
    details: "Started analysis of quarterly report",
    timestamp: "2023-09-15 14:30:22",
  },
  {
    id: "LOG-1003",
    agent: "Data Processor",
    action: "system_warning",
    details: "High memory usage detected during data processing",
    timestamp: "2023-09-15 14:28:05",
  },
  {
    id: "LOG-1004",
    agent: "Text Summarizer",
    action: "task_paused",
    details: "Paused summarization of marketing document",
    timestamp: "2023-09-15 14:25:51",
  },
  {
    id: "LOG-1005",
    agent: "Research Assistant",
    action: "task_completed",
    details: "Completed comparison of competitive products",
    timestamp: "2023-09-15 14:20:33",
  },
  {
    id: "LOG-1006",
    agent: "Customer Support",
    action: "task_started",
    details: "Started generating responses for customer queries",
    timestamp: "2023-09-15 14:15:12",
  },
  {
    id: "LOG-1007",
    agent: "Document Analyzer",
    action: "system_warning",
    details: "Document too large, splitting into chunks",
    timestamp: "2023-09-15 14:10:45",
  },
  {
    id: "LOG-1008",
    agent: "Research Assistant",
    action: "task_started",
    details: "Started gathering information on market trends",
    timestamp: "2023-09-15 14:05:18",
  },
  {
    id: "LOG-1009",
    agent: "Data Processor",
    action: "task_completed",
    details: "Completed cleaning of customer survey data",
    timestamp: "2023-09-15 14:00:02",
  },
  {
    id: "LOG-1010",
    agent: "Customer Support",
    action: "system_warning",
    details: "Rate limit approaching for API access",
    timestamp: "2023-09-15 13:55:40",
  },
  // Additional logs...
]

export function AgentActivityLog({ limit = 10 }: { limit?: number }) {
  const limitedLogs = activityLogs.slice(0, limit)

  const getActionIcon = (action: string) => {
    switch (action) {
      case "task_completed":
        return <Check className="h-4 w-4 text-green-500" />
      case "task_started":
        return <Play className="h-4 w-4 text-blue-500" />
      case "task_paused":
        return <Pause className="h-4 w-4 text-amber-500" />
      case "system_warning":
        return <AlertCircle className="h-4 w-4 text-amber-500" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  const getActionBadge = (action: string) => {
    let variant = "default"
    let className = ""
    let label = ""

    switch (action) {
      case "task_completed":
        variant = "default"
        className = "bg-green-500 hover:bg-green-600"
        label = "Completed"
        break
      case "task_started":
        variant = "outline"
        className = "border-blue-500 text-blue-500"
        label = "Started"
        break
      case "task_paused":
        variant = "outline"
        className = "border-amber-500 text-amber-500"
        label = "Paused"
        break
      case "system_warning":
        variant = "outline"
        className = "border-amber-500 text-amber-500"
        label = "Warning"
        break
      default:
        label = action.replace("_", " ")
        break
    }

    return (
      <Badge variant={variant as any} className={className}>
        {getActionIcon(action)}
        <span className="ml-1">{label}</span>
      </Badge>
    )
  }

  return (
    <div className="space-y-4">
      {limitedLogs.map((log) => (
        <div key={log.id} className="flex flex-col space-y-1 rounded-md border p-3">
          <div className="flex items-center justify-between">
            <div className="font-medium">{log.agent}</div>
            <div className="text-xs text-muted-foreground">{log.timestamp}</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm">{log.details}</div>
            {getActionBadge(log.action)}
          </div>
        </div>
      ))}
    </div>
  )
}

