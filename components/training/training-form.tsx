"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"

export function TrainingForm() {
  const [batchSize, setBatchSize] = useState([64])
  const [learningRate, setLearningRate] = useState([0.001])
  const [epochs, setEpochs] = useState([10])

  return (
    <form className="space-y-6">
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="agent-name">Agent Name</Label>
            <Input id="agent-name" placeholder="e.g., Text Classifier" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="model-base">Base Model</Label>
            <Select defaultValue="gpt-4">
              <SelectTrigger id="model-base">
                <SelectValue placeholder="Select a model" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gpt-4">GPT-4</SelectItem>
                <SelectItem value="gpt-3.5">GPT-3.5</SelectItem>
                <SelectItem value="llama-7b">Llama 7B</SelectItem>
                <SelectItem value="mistral">Mistral</SelectItem>
                <SelectItem value="custom">Custom</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Training Description</Label>
          <Textarea id="description" placeholder="Describe the purpose and goals of this training session" rows={3} />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="dataset">Training Dataset</Label>
            <Select defaultValue="customer-queries">
              <SelectTrigger id="dataset">
                <SelectValue placeholder="Select a dataset" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="customer-queries">Customer Queries</SelectItem>
                <SelectItem value="research-papers">Research Papers</SelectItem>
                <SelectItem value="news-articles">News Articles</SelectItem>
                <SelectItem value="code-snippets">Code Snippets</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="train-method">Training Method</Label>
            <Select defaultValue="supervised">
              <SelectTrigger id="train-method">
                <SelectValue placeholder="Select a method" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="supervised">Supervised Learning</SelectItem>
                <SelectItem value="fine-tuning">Fine-tuning</SelectItem>
                <SelectItem value="reinforcement">Reinforcement Learning</SelectItem>
                <SelectItem value="few-shot">Few-shot Learning</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Batch Size: {batchSize}</Label>
          <Slider defaultValue={batchSize} max={256} min={8} step={8} onValueChange={setBatchSize} />
        </div>

        <div className="space-y-2">
          <Label>Learning Rate: {learningRate}</Label>
          <Slider defaultValue={learningRate} max={0.01} min={0.0001} step={0.0001} onValueChange={setLearningRate} />
        </div>

        <div className="space-y-2">
          <Label>Epochs: {epochs}</Label>
          <Slider defaultValue={epochs} max={50} min={1} step={1} onValueChange={setEpochs} />
        </div>

        <div className="space-y-4">
          <Label>Advanced Options</Label>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="early-stopping" />
              <Label htmlFor="early-stopping">Enable Early Stopping</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="checkpoints" defaultChecked />
              <Label htmlFor="checkpoints">Save Checkpoints</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="validation" defaultChecked />
              <Label htmlFor="validation">Enable Validation</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="metrics-logging" defaultChecked />
              <Label htmlFor="metrics-logging">Log Metrics</Label>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        <Button className="flex-1">Start Training</Button>
        <Button variant="outline" className="flex-1">
          Save Configuration
        </Button>
      </div>
    </form>
  )
}

