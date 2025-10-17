"use client"

import { useRef, useCallback } from "react"
import ReactFlow, { Controls, Background, useNodesState, useEdgesState, addEdge, Panel } from "reactflow"
import "reactflow/dist/style.css"
import { Button } from "@/components/ui/button"
import { PlusCircle, Save } from "lucide-react"
import { ComponentNode } from "@/components/agent-builder/component-node"

const initialNodes = [
  {
    id: "1",
    type: "component",
    data: {
      label: "Agent Core",
      type: "core",
      description: "Main processing unit",
      inputs: ["query", "context"],
      outputs: ["response"],
    },
    position: { x: 250, y: 100 },
  },
  {
    id: "2",
    type: "component",
    data: {
      label: "Memory Module",
      type: "memory",
      description: "Stores agent context",
      inputs: ["data"],
      outputs: ["retrievedData"],
    },
    position: { x: 100, y: 300 },
  },
  {
    id: "3",
    type: "component",
    data: {
      label: "Search Tool",
      type: "tool",
      description: "External information retrieval",
      inputs: ["query"],
      outputs: ["results"],
    },
    position: { x: 400, y: 300 },
  },
]

const initialEdges = [
  { id: "e1-2", source: "1", target: "2", animated: true },
  { id: "e1-3", source: "1", target: "3", animated: true },
]

const nodeTypes = {
  component: ComponentNode,
}

export function AgentCanvas({ onNodeSelect, selectedNode }) {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)
  const reactFlowWrapper = useRef(null)

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges])

  const onNodeClick = useCallback(
    (_, node) => {
      onNodeSelect(node)
    },
    [onNodeSelect],
  )

  const onSave = useCallback(() => {
    const flow = {
      nodes,
      edges,
    }
    console.log(flow)
    // Save logic would go here
    alert("Agent configuration saved!")
  }, [nodes, edges])

  return (
    <div className="h-full w-full" ref={reactFlowWrapper}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={onNodeClick}
        nodeTypes={nodeTypes}
        fitView
        attributionPosition="bottom-left"
      >
        <Background />
        <Controls />
        <Panel position="top-right">
          <div className="flex gap-2">
            <Button size="sm" variant="outline">
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Node
            </Button>
            <Button size="sm" onClick={onSave}>
              <Save className="mr-2 h-4 w-4" />
              Save Agent
            </Button>
          </div>
        </Panel>
      </ReactFlow>
    </div>
  )
}

