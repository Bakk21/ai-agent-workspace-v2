"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"

export function GeneralSettings() {
  return (
    <form className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="workspace-name">Workspace Name</Label>
          <Input id="workspace-name" defaultValue="AI Agent Development Workspace" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Workspace Description</Label>
          <Input
            id="description"
            defaultValue="Comprehensive environment for AI agent development, training, and monitoring"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="theme">Theme</Label>
            <Select defaultValue="system">
              <SelectTrigger id="theme">
                <SelectValue placeholder="Select theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System Default</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="language">Language</Label>
            <Select defaultValue="en">
              <SelectTrigger id="language">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Spanish</SelectItem>
                <SelectItem value="fr">French</SelectItem>
                <SelectItem value="de">German</SelectItem>
                <SelectItem value="ja">Japanese</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Separator />

        <div className="space-y-2">
          <Label>Default Agent Settings</Label>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="auto-save" className="cursor-pointer">
                Auto-save agent configurations
              </Label>
              <Switch id="auto-save" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="auto-backup" className="cursor-pointer">
                Auto-backup on significant changes
              </Label>
              <Switch id="auto-backup" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="telemetry" className="cursor-pointer">
                Send anonymous usage data
              </Label>
              <Switch id="telemetry" />
            </div>
          </div>
        </div>

        <Separator />

        <div className="space-y-2">
          <Label>Resource Allocation Strategy</Label>
          <RadioGroup defaultValue="balanced">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="performance" id="performance" />
              <Label htmlFor="performance">Performance (higher resource usage)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="balanced" id="balanced" />
              <Label htmlFor="balanced">Balanced (recommended)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="efficiency" id="efficiency" />
              <Label htmlFor="efficiency">Efficiency (lower resource usage)</Label>
            </div>
          </RadioGroup>
        </div>
      </div>

      <div className="flex gap-2">
        <Button className="flex-1">Save Changes</Button>
        <Button variant="outline" className="flex-1">
          Reset to Defaults
        </Button>
      </div>
    </form>
  )
}

