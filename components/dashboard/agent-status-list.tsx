"use client"

import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const agents = [
  {
    name: "Research Assistant",
    status: "Active",
    tasks: 28,
    performance: 92,
    resourceUsage: 65,
  },
  {
    name: "Document Analyzer",
    status: "Active",
    tasks: 14,
    performance: 87,
    resourceUsage: 42,
  },
  {
    name: "Data Processor",
    status: "Training",
    tasks: 0,
    performance: 0,
    resourceUsage: 88,
  },
  {
    name: "Customer Support",
    status: "Active",
    tasks: 115,
    performance: 95,
    resourceUsage: 73,
  },
  {
    name: "Code Generator",
    status: "Inactive",
    tasks: 0,
    performance: 78,
    resourceUsage: 0,
  },
]

export function AgentStatusList() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Agent</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="hidden sm:table-cell">Active Tasks</TableHead>
          <TableHead className="hidden md:table-cell">Performance</TableHead>
          <TableHead className="hidden md:table-cell">Resource Usage</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {agents.map((agent) => (
          <TableRow key={agent.name}>
            <TableCell className="font-medium">{agent.name}</TableCell>
            <TableCell>
              <Badge
                variant={agent.status === "Active" ? "default" : agent.status === "Training" ? "outline" : "secondary"}
              >
                {agent.status}
              </Badge>
            </TableCell>
            <TableCell className="hidden sm:table-cell">{agent.tasks}</TableCell>
            <TableCell className="hidden md:table-cell">
              <div className="flex items-center gap-2">
                <Progress value={agent.performance} className="h-2 w-[80px]" />
                <span className="text-xs">{agent.performance}%</span>
              </div>
            </TableCell>
            <TableCell className="hidden md:table-cell">
              <div className="flex items-center gap-2">
                <Progress value={agent.resourceUsage} className="h-2 w-[80px]" />
                <span className="text-xs">{agent.resourceUsage}%</span>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

