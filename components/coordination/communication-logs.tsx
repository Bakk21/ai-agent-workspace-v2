"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRightLeft, Clock, Filter, Search } from "lucide-react"

// Sample communication logs
const communicationLogs = [
  {
    id: "COMM-1001",
    source: "Manager Agent",
    target: "Research Agent",
    message: "Research the latest developments in AI safety",
    timestamp: "2023-09-15 14:32:15",
    status: "completed",
    response: "Found 5 recent publications on AI safety frameworks.",
    responseTime: 1.2,
  },
  {
    id: "COMM-1002",
    source: "Research Agent",
    target: "Fact Checker",
    message: "Verify the accuracy of these AI safety publication dates",
    timestamp: "2023-09-15 14:35:22",
    status: "completed",
    response: "All publication dates verified as accurate.",
    responseTime: 0.8,
  },
  {
    id: "COMM-1003",
    source: "Manager Agent",
    target: "Writer Agent",
    message: "Write a summary of the AI safety research findings",
    timestamp: "2023-09-15 14:38:05",
    status: "in-progress",
    response: null,
    responseTime: null,
  },
  {
    id: "COMM-1004",
    source: "Fact Checker",
    target: "Writer Agent",
    message: "Correction needed on the third reference date",
    timestamp: "2023-09-15 14:40:51",
    status: "completed",
    response: "Reference date corrected in the draft.",
    responseTime: 0.5,
  },
  {
    id: "COMM-1005",
    source: "Writer Agent",
    target: "Editor Agent",
    message: "Review the AI safety research summary draft",
    timestamp: "2023-09-15 14:45:33",
    status: "completed",
    response: "Summary edited for clarity and coherence.",
    responseTime: 2.1,
  },
  {
    id: "COMM-1006",
    source: "Editor Agent",
    target: "Manager Agent",
    message: "Final AI safety research summary ready for review",
    timestamp: "2023-09-15 14:50:12",
    status: "completed",
    response: "Summary approved and forwarded to user.",
    responseTime: 1.3,
  },
  {
    id: "COMM-1007",
    source: "Manager Agent",
    target: "Research Agent",
    message: "Gather comparative data on AI safety approaches",
    timestamp: "2023-09-15 14:55:45",
    status: "failed",
    response: "Error: Unable to access comparative database.",
    responseTime: 4.2,
  },
  {
    id: "COMM-1008",
    source: "Manager Agent",
    target: "Research Agent",
    message: "Retry: Gather comparative data using alternative sources",
    timestamp: "2023-09-15 15:00:18",
    status: "completed",
    response: "Alternative comparative data compiled from open sources.",
    responseTime: 3.5,
  },
  {
    id: "COMM-1009",
    source: "Research Agent",
    target: "Manager Agent",
    message: "Additional context needed for comparative analysis",
    timestamp: "2023-09-15 15:05:02",
    status: "completed",
    response: "Analysis should focus on implementation frameworks.",
    responseTime: 0.7,
  },
  {
    id: "COMM-1010",
    source: "Manager Agent",
    target: "Writer Agent",
    message: "Include comparative framework analysis in summary",
    timestamp: "2023-09-15 15:10:40",
    status: "in-progress",
    response: null,
    responseTime: null,
  },
]

export function CommunicationLogs() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row justify-between gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search communications..." className="pl-8" />
        </div>
        <Button variant="outline" size="icon" className="h-9 w-9">
          <Filter className="h-4 w-4" />
          <span className="sr-only">Filter</span>
        </Button>
      </div>

      <div className="space-y-4">
        {communicationLogs.map((log) => (
          <div key={log.id} className="rounded-md border">
            <div className="flex items-center justify-between bg-muted/40 p-3 border-b">
              <div className="flex items-center gap-2">
                <div className="font-medium truncate">{log.id}</div>
                <Badge
                  variant={
                    log.status === "completed" ? "default" : log.status === "in-progress" ? "outline" : "destructive"
                  }
                  className={
                    log.status === "completed"
                      ? "bg-green-500 hover:bg-green-600"
                      : log.status === "in-progress"
                        ? "border-blue-500 text-blue-500"
                        : ""
                  }
                >
                  {log.status}
                </Badge>
              </div>
              <div className="text-xs text-muted-foreground">{log.timestamp}</div>
            </div>
            <div className="p-3 space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <div className="font-medium">{log.source}</div>
                <ArrowRightLeft className="h-3 w-3 text-muted-foreground" />
                <div className="font-medium">{log.target}</div>
                {log.responseTime && (
                  <div className="ml-auto flex items-center text-xs text-muted-foreground">
                    <Clock className="mr-1 h-3 w-3" />
                    {log.responseTime}s
                  </div>
                )}
              </div>
              <div className="space-y-1">
                <div className="text-sm">
                  <span className="text-xs text-muted-foreground mr-2">Request:</span>
                  {log.message}
                </div>
                {log.response && (
                  <div className="text-sm pl-4 border-l-2 border-muted">
                    <span className="text-xs text-muted-foreground mr-2">Response:</span>
                    {log.response}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

