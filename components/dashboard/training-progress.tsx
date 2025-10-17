"use client"

import { Progress } from "@/components/ui/progress"

const trainingJobs = [
  {
    id: "TRN-001",
    agent: "Data Processor",
    progress: 68,
    estimatedTimeLeft: "2h 15m",
    startedAt: "Today, 09:15 AM",
  },
  {
    id: "TRN-002",
    agent: "Text Summarizer",
    progress: 89,
    estimatedTimeLeft: "45m",
    startedAt: "Today, 11:30 AM",
  },
  {
    id: "TRN-003",
    agent: "Image Classifier",
    progress: 42,
    estimatedTimeLeft: "3h 30m",
    startedAt: "Today, 01:10 PM",
  },
]

export function TrainingProgress() {
  return (
    <div className="space-y-4">
      {trainingJobs.map((job) => (
        <div key={job.id} className="space-y-2">
          <div className="flex justify-between">
            <div>
              <p className="text-sm font-medium">{job.agent}</p>
              <p className="text-xs text-muted-foreground">Started: {job.startedAt}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium">{job.progress}%</p>
              <p className="text-xs text-muted-foreground">~{job.estimatedTimeLeft} left</p>
            </div>
          </div>
          <Progress value={job.progress} className="h-2" />
        </div>
      ))}
    </div>
  )
}

