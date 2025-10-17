"use client"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Download, Upload, Calendar, HardDrive } from "lucide-react"

// Sample backup history
const backupHistory = [
  {
    id: "backup-001",
    date: "2023-09-15 14:30:00",
    size: "24.5 MB",
    type: "Automatic",
    status: "Completed",
  },
  {
    id: "backup-002",
    date: "2023-09-14 10:15:00",
    size: "23.8 MB",
    type: "Manual",
    status: "Completed",
  },
  {
    id: "backup-003",
    date: "2023-09-13 09:00:00",
    size: "23.2 MB",
    type: "Automatic",
    status: "Completed",
  },
]

export function BackupSettings() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label>Automatic Backups</Label>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="auto-backup" className="cursor-pointer">
                Enable automatic backups
              </Label>
              <Switch id="auto-backup" defaultChecked />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="backup-frequency">Backup Frequency</Label>
            <Select defaultValue="daily">
              <SelectTrigger id="backup-frequency">
                <SelectValue placeholder="Select frequency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hourly">Hourly</SelectItem>
                <SelectItem value="daily">Daily</SelectItem>
                <SelectItem value="weekly">Weekly</SelectItem>
                <SelectItem value="monthly">Monthly</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="retention">Retention Period</Label>
            <Select defaultValue="30">
              <SelectTrigger id="retention">
                <SelectValue placeholder="Select period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7">7 days</SelectItem>
                <SelectItem value="30">30 days</SelectItem>
                <SelectItem value="90">90 days</SelectItem>
                <SelectItem value="365">1 year</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Backup Contents</Label>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Switch id="backup-agents" defaultChecked />
              <Label htmlFor="backup-agents">Agent configurations</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="backup-models" defaultChecked />
              <Label htmlFor="backup-models">Trained models</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="backup-data" defaultChecked />
              <Label htmlFor="backup-data">Training data</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="backup-logs" />
              <Label htmlFor="backup-logs">System logs</Label>
            </div>
          </div>
        </div>

        <Separator />

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label>Manual Backup</Label>
            <div className="space-x-2">
              <Button size="sm">
                <Download className="mr-2 h-4 w-4" />
                Create Backup
              </Button>
            </div>
          </div>
        </div>

        <Separator />

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label>Restore from Backup</Label>
            <div className="space-x-2">
              <Button size="sm" variant="outline">
                <Upload className="mr-2 h-4 w-4" />
                Upload Backup
              </Button>
            </div>
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          <Label>Backup History</Label>
          <div className="space-y-4">
            {backupHistory.map((backup) => (
              <div key={backup.id} className="flex items-center justify-between rounded-md border p-3">
                <div className="flex items-center gap-3">
                  <HardDrive className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="font-medium">{backup.type} Backup</div>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="mr-1 h-3 w-3" />
                      {backup.date}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-sm text-right">
                    <div>{backup.size}</div>
                    <div className="text-xs text-muted-foreground">{backup.status}</div>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Download className="h-4 w-4" />
                    <span className="sr-only">Download</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Storage Usage</span>
            <span>72.5 MB / 1 GB</span>
          </div>
          <Progress value={7.25} className="h-2" />
          <p className="text-xs text-muted-foreground">You are using 7.25% of your backup storage quota.</p>
        </div>
      </div>
    </div>
  )
}

