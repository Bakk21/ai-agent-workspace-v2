import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertCircle, XCircle, AlertTriangle, RefreshCcw } from "lucide-react"

// Sample error logs
const errorLogs = [
  {
    id: "ERR-1001",
    agent: "Research Assistant",
    type: "api_error",
    message: "Failed to connect to external search API",
    timestamp: "2023-09-15 14:28:15",
    status: "unresolved",
  },
  {
    id: "ERR-1002",
    agent: "Document Analyzer",
    type: "timeout",
    message: "Operation timed out after 30 seconds",
    timestamp: "2023-09-15 14:15:22",
    status: "investigating",
  },
  {
    id: "ERR-1003",
    agent: "Data Processor",
    type: "memory_warning",
    message: "High memory usage detected (85%)",
    timestamp: "2023-09-15 14:10:05",
    status: "resolved",
  },
  {
    id: "ERR-1004",
    agent: "Text Summarizer",
    type: "token_limit",
    message: "Exceeded maximum token limit for model",
    timestamp: "2023-09-15 13:55:51",
    status: "resolved",
  },
  {
    id: "ERR-1005",
    agent: "Research Assistant",
    type: "api_error",
    message: "API rate limit exceeded for search service",
    timestamp: "2023-09-15 13:40:33",
    status: "unresolved",
  },
  {
    id: "ERR-1006",
    agent: "Customer Support",
    type: "validation_error",
    message: "Invalid response format detected",
    timestamp: "2023-09-15 13:25:12",
    status: "resolved",
  },
  {
    id: "ERR-1007",
    agent: "Document Analyzer",
    type: "permission_error",
    message: "Insufficient permissions to access document",
    timestamp: "2023-09-15 13:10:45",
    status: "investigating",
  },
  {
    id: "ERR-1008",
    agent: "Research Assistant",
    type: "connection_error",
    message: "Network connection interrupted during operation",
    timestamp: "2023-09-15 12:55:18",
    status: "resolved",
  },
  {
    id: "ERR-1009",
    agent: "Data Processor",
    type: "data_integrity",
    message: "Corrupted data detected in input source",
    timestamp: "2023-09-15 12:40:02",
    status: "unresolved",
  },
  {
    id: "ERR-1010",
    agent: "Customer Support",
    type: "version_mismatch",
    message: "Model version incompatible with current operation",
    timestamp: "2023-09-15 12:25:40",
    status: "resolved",
  },
  // Additional logs...
]

export function ErrorsList({ limit = 10 }: { limit?: number }) {
  const limitedErrors = errorLogs.slice(0, limit)

  const getErrorIcon = (type: string) => {
    if (type.includes("error")) {
      return <XCircle className="h-4 w-4 text-red-500" />
    } else if (type.includes("warning")) {
      return <AlertTriangle className="h-4 w-4 text-amber-500" />
    } else {
      return <AlertCircle className="h-4 w-4 text-amber-500" />
    }
  }

  const getStatusBadge = (status: string) => {
    let variant = "default"
    let className = ""

    switch (status) {
      case "resolved":
        variant = "default"
        className = "bg-green-500 hover:bg-green-600"
        break
      case "investigating":
        variant = "outline"
        className = "border-blue-500 text-blue-500"
        break
      case "unresolved":
        variant = "destructive"
        break
      default:
        break
    }

    return (
      <Badge variant={variant as any} className={className}>
        {status}
      </Badge>
    )
  }

  return (
    <div className="space-y-4">
      {limitedErrors.map((error) => (
        <div key={error.id} className="flex flex-col space-y-2 rounded-md border p-3">
          <div className="flex items-center justify-between">
            <div className="font-medium">{error.agent}</div>
            <div className="text-xs text-muted-foreground">{error.timestamp}</div>
          </div>
          <div className="flex items-center gap-2">
            {getErrorIcon(error.type)}
            <div className="text-sm font-medium">{error.type.replace("_", " ")}</div>
          </div>
          <div className="text-sm">{error.message}</div>
          <div className="flex items-center justify-between pt-1">
            {getStatusBadge(error.status)}
            {error.status !== "resolved" && (
              <Button size="sm" variant="outline">
                <RefreshCcw className="mr-2 h-3 w-3" />
                Retry
              </Button>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

