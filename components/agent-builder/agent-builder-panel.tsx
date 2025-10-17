"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { AgentCanvas } from "@/components/agent-builder/agent-canvas"
import { ComponentsPalette } from "@/components/agent-builder/components-palette"
import { AgentPropertiesPanel } from "@/components/agent-builder/agent-properties-panel"

export function AgentBuilderPanel() {
  const [selectedNode, setSelectedNode] = useState(null)
  
  return (
    <DndProvider backend={HTML5Backend}>
        setSelectedNode] = useState(null)
  
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex flex-col h-[600px] gap-4">
        <Tabs defaultValue="canvas" className="w-full">
          <TabsList>
            <TabsTrigger value="canvas">Canvas</TabsTrigger>
            <TabsTrigger value="code">Generated Code</TabsTrigger>
            <TabsTrigger value="config">Configuration</TabsTrigger>
          </TabsList>
          <TabsContent value="canvas" className="flex flex-1 gap-4">
            <div className="flex-1 border rounded-md p-4 h-[500px] relative">
              <AgentCanvas 
                onNodeSelect={setSelectedNode} 
                selectedNode={selectedNode}
              />
            </div>
            <div className="w-64 flex flex-col gap-4">
              <ComponentsPalette />
              <AgentPropertiesPanel selectedNode={selectedNode} />
            </div>
          </TabsContent>
          <TabsContent value="code" className="h-[500px]">
            <div className="border rounded-md p-4 h-full overflow-auto">
              <pre className="text-sm">
                <code>{`// Generated Agent Code
import { AgentFramework } from '@agent/core';

class CustomAgent extends AgentFramework {
  constructor() {
    super();
    this.name = "Research Assistant";
    this.description = "Analyzes research papers and extracts key information";
    
    // Initialized Components
    this.memory = new ShortTermMemory();
    this.tools = [
      new SearchTool(),
      new DocumentAnalyzer()
    ];
  }

  async process(input) {
    // Agent processing logic
    const result = await this.tools.analyze(input);
    this.memory.store(result);
    return result;
  }
}
`}</code>
              </pre>
            </div>
          </TabsContent>
          <TabsContent value="config" className="h-[500px]">
            <div className="border rounded-md p-4 h-full overflow-auto">
              <pre className="text-sm">
                <code>{`{
  "agent": {
    "name": "Research Assistant",
    "description": "Analyzes research papers and extracts key information",
    "version": "1.0.0",
    "components": [
      {
        "type": "memory",
        "config": {
          "capacity": 1000,
          "persistenceEnabled": true
        }
      },
      {
        "type": "tool",
        "name": "SearchTool",
        "config": {
          "apiKey": "{{SEARCH_API_KEY}}",
          "maxResults": 5
        }
      },
      {
        "type": "tool",
        "name": "DocumentAnalyzer",
        "config": {
          "precision": "high",
          "extractionFields": ["title", "authors", "abstract", "keywords"]
        }
      }
    ]
  }
}</code>
              </pre>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DndProvider>
  )
}

