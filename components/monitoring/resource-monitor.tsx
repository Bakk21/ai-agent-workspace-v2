"use client"

import { Progress } from "@/components/ui/progress"
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Legend } from "recharts"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Sample resource data
const resourceData = [
  { time: "00:00", CPU: 45, Memory: 60, Storage: 22, Network: 15 },
  { time: "02:00", CPU: 50, Memory: 62, Storage: 22, Network: 18 },
  { time: "04:00", CPU: 40, Memory: 58, Storage: 23, Network: 12 },
  { time: "06:00", CPU: 35, Memory: 55, Storage: 23, Network: 10 },
  { time: "08:00", CPU: 60, Memory: 70, Storage: 24, Network: 35 },
  { time: "10:00", CPU: 75, Memory: 75, Storage: 24, Network: 45 },
  { time: "12:00", CPU: 70, Memory: 72, Storage: 25, Network: 40 },
  { time: "14:00", CPU: 65, Memory: 68, Storage: 25, Network: 35 },
  { time: "16:00", CPU: 70, Memory: 70, Storage: 26, Network: 38 },
  { time: "18:00", CPU: 75, Memory: 72, Storage: 26, Network: 42 },
  { time: "20:00", CPU: 60, Memory: 65, Storage: 27, Network: 30 },
  { time: "22:00", CPU: 50, Memory: 62, Storage: 27, Network: 20 },
]

// Current resource usage
const currentUsage = {
  CPU: 65,
  Memory: 72,
  Storage: 27,
  Network: 38,
}

export function ResourceMonitor({ detailed = false }: { detailed?: boolean }) {
  if (!detailed) {
    return (
      <div className="space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between text-sm font-medium">
            <span>CPU</span>
            <span>{currentUsage.CPU}%</span>
          </div>
          <Progress value={currentUsage.CPU} className="h-2" />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm font-medium">
            <span>Memory</span>
            <span>{currentUsage.Memory}%</span>
          </div>
          <Progress value={currentUsage.Memory} className="h-2" />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm font-medium">
            <span>Storage</span>
            <span>{currentUsage.Storage}%</span>
          </div>
          <Progress value={currentUsage.Storage} className="h-2" />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm font-medium">
            <span>Network</span>
            <span>{currentUsage.Network}%</span>
          </div>
          <Progress value={currentUsage.Network} className="h-2" />
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <Tabs defaultValue="all">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="cpu">CPU</TabsTrigger>
          <TabsTrigger value="memory">Memory</TabsTrigger>
          <TabsTrigger value="storage">Storage</TabsTrigger>
          <TabsTrigger value="network">Network</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="pt-4">
          <ChartContainer
            config={{
              CPU: {
                label: "CPU",
                color: "hsl(var(--chart-1))",
              },
              Memory: {
                label: "Memory",
                color: "hsl(var(--chart-2))",
              },
              Storage: {
                label: "Storage",
                color: "hsl(var(--chart-3))",
              },
              Network: {
                label: "Network",
                color: "hsl(var(--chart-4))",
              },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={resourceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="time"
                  tick={{ fill: "hsl(var(--foreground))" }}
                  tickLine={{ stroke: "hsl(var(--border))" }}
                  axisLine={{ stroke: "hsl(var(--border))" }}
                />
                <YAxis
                  label={{
                    value: "Usage (%)",
                    angle: -90,
                    position: "insideLeft",
                    style: { fill: "hsl(var(--foreground))" },
                  }}
                  domain={[0, 100]}
                  tick={{ fill: "hsl(var(--foreground))" }}
                  tickLine={{ stroke: "hsl(var(--border))" }}
                  axisLine={{ stroke: "hsl(var(--border))" }}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="CPU"
                  stroke="var(--color-CPU)"
                  fill="var(--color-CPU)"
                  fillOpacity={0.2}
                  activeDot={{ r: 6 }}
                />
                <Area
                  type="monotone"
                  dataKey="Memory"
                  stroke="var(--color-Memory)"
                  fill="var(--color-Memory)"
                  fillOpacity={0.2}
                  activeDot={{ r: 6 }}
                />
                <Area
                  type="monotone"
                  dataKey="Storage"
                  stroke="var(--color-Storage)"
                  fill="var(--color-Storage)"
                  fillOpacity={0.2}
                  activeDot={{ r: 6 }}
                />
                <Area
                  type="monotone"
                  dataKey="Network"
                  stroke="var(--color-Network)"
                  fill="var(--color-Network)"
                  fillOpacity={0.2}
                  activeDot={{ r: 6 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>
        </TabsContent>
        {/* Individual tabs for each resource type would go here */}
      </Tabs>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm font-medium">
            <span>CPU</span>
            <span>{currentUsage.CPU}%</span>
          </div>
          <Progress value={currentUsage.CPU} className="h-2" />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm font-medium">
            <span>Memory</span>
            <span>{currentUsage.Memory}%</span>
          </div>
          <Progress value={currentUsage.Memory} className="h-2" />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm font-medium">
            <span>Storage</span>
            <span>{currentUsage.Storage}%</span>
          </div>
          <Progress value={currentUsage.Storage} className="h-2" />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm font-medium">
            <span>Network</span>
            <span>{currentUsage.Network}%</span>
          </div>
          <Progress value={currentUsage.Network} className="h-2" />
        </div>
      </div>
    </div>
  )
}

