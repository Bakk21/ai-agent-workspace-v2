"use client"

import { useState } from "react"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid, Legend } from "recharts"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample training metrics data
const accuracyData = [
  { epoch: 1, train: 0.45, validation: 0.42 },
  { epoch: 2, train: 0.58, validation: 0.53 },
  { epoch: 3, train: 0.67, validation: 0.61 },
  { epoch: 4, train: 0.75, validation: 0.68 },
  { epoch: 5, train: 0.79, validation: 0.72 },
  { epoch: 6, train: 0.83, validation: 0.75 },
  { epoch: 7, train: 0.86, validation: 0.78 },
  { epoch: 8, train: 0.89, validation: 0.81 },
  { epoch: 9, train: 0.91, validation: 0.82 },
  { epoch: 10, train: 0.92, validation: 0.84 },
]

const lossData = [
  { epoch: 1, train: 1.82, validation: 1.95 },
  { epoch: 2, train: 1.45, validation: 1.58 },
  { epoch: 3, train: 1.12, validation: 1.24 },
  { epoch: 4, train: 0.85, validation: 0.98 },
  { epoch: 5, train: 0.67, validation: 0.78 },
  { epoch: 6, train: 0.54, validation: 0.64 },
  { epoch: 7, train: 0.42, validation: 0.51 },
  { epoch: 8, train: 0.36, validation: 0.43 },
  { epoch: 9, train: 0.31, validation: 0.38 },
  { epoch: 10, train: 0.28, validation: 0.34 },
]

export function MetricsPanel() {
  const [selectedModel, setSelectedModel] = useState("model-002")

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Training Metrics</h3>
        <Select value={selectedModel} onValueChange={setSelectedModel}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select model" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="model-001">Classifier v1</SelectItem>
            <SelectItem value="model-002">NLP Model v2</SelectItem>
            <SelectItem value="model-003">Vision Model v3</SelectItem>
            <SelectItem value="model-004">Assistant Base</SelectItem>
            <SelectItem value="model-005">Research Agent</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Tabs defaultValue="accuracy">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="accuracy">Accuracy</TabsTrigger>
          <TabsTrigger value="loss">Loss</TabsTrigger>
        </TabsList>
        <TabsContent value="accuracy" className="pt-4">
          <Card className="p-4">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={accuracyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="epoch" label={{ value: "Epoch", position: "insideBottomRight", offset: -5 }} />
                <YAxis label={{ value: "Accuracy", angle: -90, position: "insideLeft" }} domain={[0, 1]} />
                <Tooltip
                  formatter={(value) => [`${(value * 100).toFixed(2)}%`, "Accuracy"]}
                  contentStyle={{
                    backgroundColor: "hsl(var(--popover))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "0.5rem",
                    color: "hsl(var(--popover-foreground))",
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="train"
                  name="Training"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                  activeDot={{ r: 8 }}
                />
                <Line
                  type="monotone"
                  dataKey="validation"
                  name="Validation"
                  stroke="hsl(var(--destructive))"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </TabsContent>
        <TabsContent value="loss" className="pt-4">
          <Card className="p-4">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={lossData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="epoch" label={{ value: "Epoch", position: "insideBottomRight", offset: -5 }} />
                <YAxis label={{ value: "Loss", angle: -90, position: "insideLeft" }} />
                <Tooltip
                  formatter={(value) => [`${value.toFixed(4)}`, "Loss"]}
                  contentStyle={{
                    backgroundColor: "hsl(var(--popover))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "0.5rem",
                    color: "hsl(var(--popover-foreground))",
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="train"
                  name="Training"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                  activeDot={{ r: 8 }}
                />
                <Line
                  type="monotone"
                  dataKey="validation"
                  name="Validation"
                  stroke="hsl(var(--destructive))"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

