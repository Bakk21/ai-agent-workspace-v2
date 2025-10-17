"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Sample data for agent interactions
const interactionData = [
  {
    source: "Manager Agent",
    target: "Research Agent",
    count: 42,
    avgResponseTime: 0.8,
    successRate: 95,
  },
  {
    source: "Manager Agent",
    target: "Writer Agent",
    count: 38,
    avgResponseTime: 1.2,
    successRate: 92,
  },
  {
    source: "Research Agent",
    target: "Fact Checker",
    count: 31,
    avgResponseTime: 1.5,
    successRate: 97,
  },
  {
    source: "Writer Agent",
    target: "Editor Agent",
    count: 35,
    avgResponseTime: 0.9,
    successRate: 94,
  },
  {
    source: "Fact Checker",
    target: "Writer Agent",
    count: 28,
    avgResponseTime: 1.1,
    successRate: 90,
  },
  {
    source: "Editor Agent",
    target: "Manager Agent",
    count: 25,
    avgResponseTime: 0.7,
    successRate: 98,
  },
]

// Chart data for interaction counts
const chartData = [
  { name: "Manager → Research", value: 42 },
  { name: "Manager → Writer", value: 38 },
  { name: "Research → Fact Checker", value: 31 },
  { name: "Writer → Editor", value: 35 },
  { name: "Fact Checker → Writer", value: 28 },
  { name: "Editor → Manager", value: 25 },
]

export function AgentInteractions() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Interaction Frequency</CardTitle>
          <CardDescription>Number of interactions between agent pairs</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              value: {
                label: "Interactions",
                color: "hsl(var(--chart-1))",
              },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="name"
                  tick={{ fill: "hsl(var(--foreground))" }}
                  tickLine={{ stroke: "hsl(var(--border))" }}
                  axisLine={{ stroke: "hsl(var(--border))" }}
                />
                <YAxis
                  tick={{ fill: "hsl(var(--foreground))" }}
                  tickLine={{ stroke: "hsl(var(--border))" }}
                  axisLine={{ stroke: "hsl(var(--border))" }}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="value" fill="var(--color-value)" />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Interaction Details</CardTitle>
          <CardDescription>Metrics for agent-to-agent interactions</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Source Agent</TableHead>
                <TableHead>Target Agent</TableHead>
                <TableHead className="hidden md:table-cell">Interaction Count</TableHead>
                <TableHead className="hidden sm:table-cell">Avg. Response Time</TableHead>
                <TableHead>Success Rate</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {interactionData.map((interaction, index) => (
                <TableRow key={index}>
                  <TableCell>{interaction.source}</TableCell>
                  <TableCell>{interaction.target}</TableCell>
                  <TableCell className="hidden md:table-cell">{interaction.count}</TableCell>
                  <TableCell className="hidden sm:table-cell">{interaction.avgResponseTime}s</TableCell>
                  <TableCell>{interaction.successRate}%</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

