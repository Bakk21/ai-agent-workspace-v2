"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Eye, EyeOff, Plus, Trash } from "lucide-react"

// Sample API keys
const apiKeys = [
  {
    id: "key-1",
    name: "OpenAI API Key",
    key: "sk-••••••••••••••••••••••••••••••",
    status: "active",
    lastUsed: "2023-09-15 14:32:15",
  },
  {
    id: "key-2",
    name: "Hugging Face API Key",
    key: "hf_••••••••••••••••••••••••••••••",
    status: "active",
    lastUsed: "2023-09-14 10:15:22",
  },
  {
    id: "key-3",
    name: "Pinecone API Key",
    key: "pc-••••••••••••••••••••••••••••••",
    status: "inactive",
    lastUsed: "2023-09-10 09:45:05",
  },
  {
    id: "key-4",
    name: "Anthropic API Key",
    key: "sk-ant-••••••••••••••••••••••••••",
    status: "active",
    lastUsed: "2023-09-12 16:20:33",
  },
]

export function ApiSettings() {
  const [showNewKeyForm, setShowNewKeyForm] = useState(false)
  const [visibleKeys, setVisibleKeys] = useState<Record<string, boolean>>({})

  const toggleKeyVisibility = (keyId: string) => {
    setVisibleKeys((prev) => ({
      ...prev,
      [keyId]: !prev[keyId],
    }))
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">API Keys</h3>
        <Button size="sm" onClick={() => setShowNewKeyForm(!showNewKeyForm)}>
          <Plus className="mr-2 h-4 w-4" />
          Add New Key
        </Button>
      </div>

      {showNewKeyForm && (
        <div className="space-y-4 rounded-md border p-4">
          <h4 className="font-medium">Add New API Key</h4>
          <div className="space-y-2">
            <Label htmlFor="key-name">Key Name</Label>
            <Input id="key-name" placeholder="e.g., OpenAI API Key" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="key-value">API Key</Label>
            <Input id="key-value" type="password" placeholder="Enter your API key" />
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="key-active" defaultChecked />
            <Label htmlFor="key-active">Active</Label>
          </div>
          <div className="flex gap-2">
            <Button size="sm">Save Key</Button>
            <Button size="sm" variant="outline" onClick={() => setShowNewKeyForm(false)}>
              Cancel
            </Button>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {apiKeys.map((apiKey) => (
          <div key={apiKey.id} className="rounded-md border p-4">
            <div className="flex justify-between items-center">
              <div className="font-medium">{apiKey.name}</div>
              <Badge
                variant={apiKey.status === "active" ? "default" : "secondary"}
                className={apiKey.status === "active" ? "bg-green-500 hover:bg-green-600" : ""}
              >
                {apiKey.status}
              </Badge>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <div className="flex items-center">
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  {visibleKeys[apiKey.id] ? apiKey.key.replace(/•/g, "x") : apiKey.key}
                </code>
                <Button
                  variant="ghost"
                  size="icon"
                  className="ml-2 h-8 w-8"
                  onClick={() => toggleKeyVisibility(apiKey.id)}
                >
                  {visibleKeys[apiKey.id] ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  <span className="sr-only">{visibleKeys[apiKey.id] ? "Hide" : "Show"} API Key</span>
                </Button>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                <Trash className="h-4 w-4" />
                <span className="sr-only">Delete API Key</span>
              </Button>
            </div>
            <div className="mt-2 text-xs text-muted-foreground">Last used: {apiKey.lastUsed}</div>
          </div>
        ))}
      </div>

      <Separator />

      <div className="space-y-4">
        <h3 className="text-lg font-medium">API Usage Limits</h3>
        <div className="space-y-2">
          <Label htmlFor="max-tokens">Maximum Tokens per Request</Label>
          <Input id="max-tokens" type="number" defaultValue={4096} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="rate-limit">Rate Limit (requests per minute)</Label>
          <Input id="rate-limit" type="number" defaultValue={60} />
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="enforce-limits" defaultChecked />
          <Label htmlFor="enforce-limits">Enforce Usage Limits</Label>
        </div>
      </div>

      <div className="flex gap-2">
        <Button className="flex-1">Save Changes</Button>
        <Button variant="outline" className="flex-1">
          Test Connections
        </Button>
      </div>
    </div>
  )
}

