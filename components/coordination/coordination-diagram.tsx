"use client"
import ReactFlow, { type Edge, type Node, Background, Controls, useNodesState, useEdgesState } from "reactflow"
import "reactflow/dist/style.css"
import { Badge } from "@/components/ui/badge"

// Sample node data for the coordination diagram
const initialNodes: Node[] = [
  {
    id: "1",
    type: "agentNode",
    position: { x: 250, y: 100 },
    data: {
      label: "Manager Agent",
      type: "manager",
      status: "active",
      description: "Coordinates and delegates tasks",
    },
  },
  {
    id: "2",
    type: "agentNode",
    position: { x: 100, y: 250 },
    data: {
      label: "Research Agent",
      type: "research",
      status: "active",
      description: "Retrieves and analyzes information",
    },
  },
  {
    id: "3",
    type: "agentNode",
    position: { x: 400, y: 250 },
    data: {
      label: "Writer Agent",
      type: "writer",
      status: "active",
      description: "Generates written content",
    },
  },
  {
    id: "4",
    type: "agentNode",
    position: { x: 250, y: 400 },
    data: {
      label: "Fact Checker",
      type: "factChecker",
      status: "idle",
      description: "Verifies information accuracy",
    },
  },
  {
    id: "5",
    type: "agentNode",
    position: { x: 550, y: 400 },
    data: {
      label: "Editor Agent",
      type: "editor",
      status: "active",
      description: "Refines and improves content",
    },
  },
]

// Sample edge data for connections between agents
const initialEdges: Edge[] = [
  { id: "e1-2", source: "1", target: "2", animated: true, label: "research task" },
  { id: "e1-3", source: "1", target: "3", animated: true, label: "write task" },
  { id: "e2-4", source: "2", target: "4", animated: true, label: "verify data" },
  { id: "e3-5", source: "3", target: "5", animated: false, label: "edit content" },
  { id: "e4-3", source: "4", target: "3", animated: false, label: "fact correction" },
  { id: "e5-1", source: "5", target: "1", animated: false, label: "final review" },
]

const AgentNode = ({ data }: { data: any }) => {
  const getNodeColor = (type: string) => {
    switch (type) {
      case "manager":
        return "bg-blue-100 border-blue-500 dark:bg-blue-950 dark:border-blue-400"
      case "research":
        return "bg-green-100 border-green-500 dark:bg-green-950 dark:border-green-400"
      case "writer":
        return "bg-amber-100 border-amber-500 dark:bg-amber-950 dark:border-amber-400"
      case "factChecker":
        return "bg-purple-100 border-purple-500 dark:bg-purple-950 dark:border-purple-400"
      case "editor":
        return "bg-red-100 border-red-500 dark:bg-red-950 dark:border-red-400"
      default:
        return "bg-gray-100 border-gray-500 dark:bg-gray-800 dark:border-gray-400"
    }
  }

  return (
    <div className={`p-3 rounded-md border-2 shadow-md ${getNodeColor(data.type)}`}>
      <div className="text-center font-bold">{data.label}</div>
      <div className="flex justify-center mt-1">
        <Badge variant={data.status === "active" ? "default" : "secondary"}>{data.status}</Badge>
      </div>
      <div className="text-xs mt-2 text-center">{data.description}</div>
    </div>
  )
}

const nodeTypes = {
  agentNode: AgentNode,
}

export function CoordinationDiagram() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  return (
    <div className="h-[500px] border rounded-md p-1">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
        attributionPosition="bottom-left"
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  )
}

