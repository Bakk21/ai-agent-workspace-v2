"use client"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function NotificationSettings() {
  return (
    <form className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label>Email Notifications</Label>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="email-training" className="cursor-pointer">
                Training completion
              </Label>
              <Switch id="email-training" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="email-errors" className="cursor-pointer">
                Critical errors
              </Label>
              <Switch id="email-errors" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="email-tasks" className="cursor-pointer">
                Task completion
              </Label>
              <Switch id="email-tasks" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="email-resources" className="cursor-pointer">
                Resource usage alerts
              </Label>
              <Switch id="email-resources" defaultChecked />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email-address">Email Address</Label>
          <Input id="email-address" type="email" placeholder="your@email.com" />
        </div>

        <Separator />

        <div className="space-y-2">
          <Label>In-App Notifications</Label>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="app-training" className="cursor-pointer">
                Training status updates
              </Label>
              <Switch id="app-training" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="app-errors" className="cursor-pointer">
                System errors
              </Label>
              <Switch id="app-errors" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="app-tasks" className="cursor-pointer">
                Task status changes
              </Label>
              <Switch id="app-tasks" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="app-agents" className="cursor-pointer">
                Agent status changes
              </Label>
              <Switch id="app-agents" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="app-resources" className="cursor-pointer">
                Resource usage warnings
              </Label>
              <Switch id="app-resources" defaultChecked />
            </div>
          </div>
        </div>

        <Separator />

        <div className="space-y-2">
          <Label>Notification Preferences</Label>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="frequency">Notification Frequency</Label>
              <Select defaultValue="realtime">
                <SelectTrigger id="frequency">
                  <SelectValue placeholder="Select frequency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="realtime">Real-time</SelectItem>
                  <SelectItem value="hourly">Hourly Digest</SelectItem>
                  <SelectItem value="daily">Daily Digest</SelectItem>
                  <SelectItem value="weekly">Weekly Digest</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="priority">Minimum Priority</Label>
              <Select defaultValue="all">
                <SelectTrigger id="priority">
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Notifications</SelectItem>
                  <SelectItem value="important">Important Only</SelectItem>
                  <SelectItem value="critical">Critical Only</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        <Button className="flex-1">Save Preferences</Button>
        <Button variant="outline" className="flex-1">
          Reset to Defaults
        </Button>
      </div>
    </form>
  )
}

