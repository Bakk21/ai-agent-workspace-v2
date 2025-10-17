"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"

export function TaskForm() {
  return (
    <form className="space-y-6">
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="task-name">Task Name</Label>
            <Input id="task-name" placeholder="e.g., Research Market Trends" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="agent">Assign to Agent</Label>
            <Select>
              <SelectTrigger id="agent">
                <SelectValue placeholder="Select agent" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="research">Research Assistant</SelectItem>
                <SelectItem value="document">Document Analyzer</SelectItem>
                <SelectItem value="data">Data Processor</SelectItem>
                <SelectItem value="text">Text Summarizer</SelectItem>
                <SelectItem value="support">Customer Support</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Task Description</Label>
          <Textarea id="description" placeholder="Describe the task in detail..." rows={3} />
        </div>

        <div className="space-y-2">
          <Label>Priority</Label>
          <RadioGroup defaultValue="medium" className="flex space-x-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="high" id="high" />
              <Label htmlFor="high" className="text-red-500">
                High
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="medium" id="medium" />
              <Label htmlFor="medium" className="text-amber-500">
                Medium
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="low" id="low" />
              <Label htmlFor="low" className="text-green-500">
                Low
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="due-date">Due Date (Optional)</Label>
            <Input id="due-date" type="datetime-local" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="tags">Tags (Optional)</Label>
            <Input id="tags" placeholder="e.g., research, report, urgent" />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Options</Label>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="notify" />
              <Label htmlFor="notify">Notify on completion</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="retry" defaultChecked />
              <Label htmlFor="retry">Auto-retry on failure</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="queue" defaultChecked />
              <Label htmlFor="queue">Add to queue if agent is busy</Label>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        <Button className="flex-1" type="submit">
          Create Task
        </Button>
        <Button variant="outline" className="flex-1">
          Save as Draft
        </Button>
      </div>
    </form>
  )
}

