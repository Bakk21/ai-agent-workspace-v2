"use client"

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Legend } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample performance data
const responseTimeData = [
  { time: "00:00", "Research Assistant": 1.2, "Document Analyzer": 0.8, "Data Processor": 1.5 },
  { time: "02:00", "Research Assistant": 1.3, "Document Analyzer": 0.9, "Data Processor": 1.4 },
  { time: "04:00", "Research Assistant": 1.1, "Document Analyzer": 0.7, "Data Processor": 1.6 },
  { time: "06:00", "Research Assistant": 1.4, "Document Analyzer": 1.0, "Data Processor": 1.3 },
  { time: "08:00", "Research Assistant": 1.7, "Document Analyzer": 1.2, "Data Processor": 1.8 },
  { time: "10:00", "Research Assistant": 1.5, "Document Analyzer": 1.1, "Data Processor": 1.7 },
  { time: "12:00", "Research Assistant": 1.3, "Document Analyzer": 0.9, "Data Processor": 1.5 },
  { time: "14:00", "Research Assistant": 1.2, "Document Analyzer": 0.8, "Data Processor": 1.4 },
  { time: "16:00", "Research Assistant": 1.4, "Document Analyzer": 1.0, "Data Processor": 1.6 },
  { time: "18:00", "Research Assistant": 1.6, "Document Analyzer": 1.1, "Data Processor": 1.8 },
  { time: "20:00", "Research Assistant": 1.5, "Document Analyzer": 1.0, "Data Processor": 1.7 },
  { time: "22:00", "Research Assistant": 1.3, "Document Analyzer": 0.9, "Data Processor": 1.5 },
]

const accuracyData = [
  { time: "00:00", "Research Assistant": 92, "Document Analyzer": 95, "Data Processor": 88 },
  { time: "02:00", "Research Assistant": 91, "Document Analyzer": 94, "Data Processor": 89 },
  { time: "04:00", "Research Assistant": 93, "Document Analyzer": 96, "Data Processor": 87 },
  { time: "06:00", "Research Assistant": 90, "Document Analyzer": 93, "Data Processor": 90 },
  { time: "08:00", "Research Assistant": 88, "Document Analyzer": 91, "Data Processor": 85 },
  { time: "10:00", "Research Assistant": 89, "Document Analyzer": 92, "Data Processor": 86 },
  { time: "12:00", "Research Assistant": 91, "Document Analyzer": 94, "Data Processor": 88 },
  { time: "14:00", "Research Assistant": 92, "Document Analyzer": 95, "Data Processor": 89 },
  { time: "16:00", "Research Assistant": 90, "Document Analyzer": 93, "Data Processor": 87 },
  { time: "18:00", "Research Assistant": 89, "Document Analyzer": 92, "Data Processor": 86 },
  { time: "20:00", "Research Assistant": 90, "Document Analyzer": 93, "Data Processor": 88 },
  { time: "22:00", "Research Assistant": 91, "Document Analyzer": 94, "Data Processor": 89 },
]

export function PerformanceMetrics({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className="space-y-4">
      {detailed && (
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium">Performance Metrics</h3>
          <Select defaultValue="24h">
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Time period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1h">Last hour</SelectItem>
              <SelectItem value="6h">Last 6 hours</SelectItem>
              <SelectItem value="24h">Last 24 hours</SelectItem>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}

      <Tabs defaultValue="response-time">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="response-time">Response Time</TabsTrigger>
          <TabsTrigger value="accuracy">Accuracy</TabsTrigger>
        </TabsList>
        <TabsContent value="response-time" className="pt-4">
          <ChartContainer
            config={{
              "Research Assistant": {
                label: "Research Assistant",
                color: "hsl(var(--chart-1))",
              },
              "Document Analyzer": {
                label: "Document Analyzer",
                color: "hsl(var(--chart-2))",
              },
              "Data Processor": {
                label: "Data Processor",
                color: "hsl(var(--chart-3))",
              },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={responseTimeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="time"
                  tick={{ fill: "hsl(var(--foreground))" }}
                  tickLine={{ stroke: "hsl(var(--border))" }}
                  axisLine={{ stroke: "hsl(var(--border))" }}
                />
                <YAxis
                  label={{
                    value: "Response Time (s)",
                    angle: -90,
                    position: "insideLeft",
                    style: { fill: "hsl(var(--foreground))" },
                  }}
                  tick={{ fill: "hsl(var(--foreground))" }}
                  tickLine={{ stroke: "hsl(var(--border))" }}
                  axisLine={{ stroke: "hsl(var(--border))" }}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="Research Assistant"
                  stroke="var(--color-Research Assistant)"
                  strokeWidth={2}
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="Document Analyzer"
                  stroke="var(--color-Document Analyzer)"
                  strokeWidth={2}
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="Data Processor"
                  stroke="var(--color-Data Processor)"
                  strokeWidth={2}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </TabsContent>
        <TabsContent value="accuracy" className="pt-4">
          <ChartContainer
            config={{
              "Research Assistant": {
                label: "Research Assistant",
                color: "hsl(var(--chart-1))",
              },
              "Document Analyzer": {
                label: "Document Analyzer",
                color: "hsl(var(--chart-2))",
              },
              "Data Processor": {
                label: "Data Processor",
                color: "hsl(var(--chart-3))",
              },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={accuracyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="time"
                  tick={{ fill: "hsl(var(--foreground))" }}
                  tickLine={{ stroke: "hsl(var(--border))" }}
                  axisLine={{ stroke: "hsl(var(--border))" }}
                />
                <YAxis
                  label={{
                    value: "Accuracy (%)",
                    angle: -90,
                    position: "insideLeft",
                    style: { fill: "hsl(var(--foreground))" },
                  }}
                  domain={[80, 100]}
                  tick={{ fill: "hsl(var(--foreground))" }}
                  tickLine={{ stroke: "hsl(var(--border))" }}
                  axisLine={{ stroke: "hsl(var(--border))" }}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="Research Assistant"
                  stroke="var(--color-Research Assistant)"
                  strokeWidth={2}
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="Document Analyzer"
                  stroke="var(--color-Document Analyzer)"
                  strokeWidth={2}
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="Data Processor"
                  stroke="var(--color-Data Processor)"
                  strokeWidth={2}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </TabsContent>
      </Tabs>
    </div>
  )
}

