"use client"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Play, Pause, StopCircle, Info, BarChart } from "lucide-react"

const trainingJobs = [
  {
    id: "TRN-001",
    agent: "Data Processor",
    model: "Classifier v1",
    progress: 68,
    status: "running",
    metrics: {
      accuracy: 0.82,
      loss: 0.38,
    },
    startedAt: "Today, 09:15 AM",
    estimatedTimeLeft: "2h 15m",
  },
  {
    id: "TRN-002",
    agent: "Text Summarizer",
    model: "NLP Model v2",
    progress: 89,
    status: "running",
    metrics: {
      accuracy: 0.91,
      loss: 0.14,
    },
    startedAt: "Today, 11:30 AM",
    estimatedTimeLeft: "45m",
  },
  {
    id: "TRN-003",
    agent: "Image Classifier",
    model: "Vision Model v3",
    progress: 42,
    status: "paused",
    metrics: {
      accuracy: 0.67,
      loss: 0.52,
    },
    startedAt: "Today, 01:10 PM",
    estimatedTimeLeft: "3h 30m",
  },
]

export function TrainingSessionsList() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {trainingJobs.map((job) => (
        <Card key={job.id} className="overflow-hidden">
          <CardHeader className="pb-2">
            <div className="flex justify-between">
              <div>
                <CardTitle>{job.agent}</CardTitle>
                <CardDescription>Model: {job.model}</CardDescription>
              </div>
              <div className="flex items-center">
                <span
                  className={`inline-block h-2 w-2 rounded-full ${
                    job.status === "running" ? "bg-green-500" : job.status === "paused" ? "bg-amber-500" : "bg-red-500"
                  }`}
                />
                <span className="ml-2 text-xs capitalize">{job.status}</span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="mb-4">
              <div className="flex justify-between text-xs mb-1">
                <span>Progress</span>
                <span>{job.progress}%</span>
              </div>
              <Progress value={job.progress} className="h-2" />
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <p className="text-muted-foreground">Started</p>
                <p>{job.startedAt}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Est. Time Left</p>
                <p>{job.estimatedTimeLeft}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Accuracy</p>
                <p>{job.metrics.accuracy.toFixed(2)}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Loss</p>
                <p>{job.metrics.loss.toFixed(2)}</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between border-t bg-muted/50 p-2">
            <div className="flex gap-1">
              {job.status === "running" ? (
                <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                  <Pause className="h-4 w-4" />
                  <span className="sr-only">Pause</span>
                </Button>
              ) : (
                <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                  <Play className="h-4 w-4" />
                  <span className="sr-only">Resume</span>
                </Button>
              )}
              <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                <StopCircle className="h-4 w-4" />
                <span className="sr-only">Stop</span>
              </Button>
            </div>
            <div className="flex gap-1">
              <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                <Info className="h-4 w-4" />
                <span className="sr-only">Details</span>
              </Button>
              <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                <BarChart className="h-4 w-4" />
                <span className="sr-only">Metrics</span>
              </Button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

