"use client"

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  {
    date: "Jan 1",
    "Task Completions": 145,
    "Agent Interactions": 45,
  },
  {
    date: "Jan 2",
    "Task Completions": 132,
    "Agent Interactions": 62,
  },
  {
    date: "Jan 3",
    "Task Completions": 158,
    "Agent Interactions": 78,
  },
  {
    date: "Jan 4",
    "Task Completions": 170,
    "Agent Interactions": 92,
  },
  {
    date: "Jan 5",
    "Task Completions": 142,
    "Agent Interactions": 65,
  },
  {
    date: "Jan 6",
    "Task Completions": 163,
    "Agent Interactions": 58,
  },
  {
    date: "Jan 7",
    "Task Completions": 185,
    "Agent Interactions": 98,
  },
]

export function ActivityOverviewChart() {
  return (
    <ChartContainer
      config={{
        "Task Completions": {
          label: "Task Completions",
          color: "hsl(var(--chart-1))",
        },
        "Agent Interactions": {
          label: "Agent Interactions",
          color: "hsl(var(--chart-2))",
        },
      }}
      className="h-[300px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis
            dataKey="date"
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
          <Line
            type="monotone"
            dataKey="Task Completions"
            stroke="var(--color-Task Completions)"
            strokeWidth={2}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="Agent Interactions"
            stroke="var(--color-Agent Interactions)"
            strokeWidth={2}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

