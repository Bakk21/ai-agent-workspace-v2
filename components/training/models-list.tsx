"use client"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Download, Trash, Edit, Play } from "lucide-react"

const models = [
  {
    id: "model-001",
    name: "Classifier v1",
    type: "Classification",
    size: "1.2 GB",
    lastUpdated: "2023-09-15",
    version: "1.0.0",
    status: "Ready",
  },
  {
    id: "model-002",
    name: "NLP Model v2",
    type: "NLP",
    size: "2.4 GB",
    lastUpdated: "2023-10-22",
    version: "2.1.3",
    status: "Ready",
  },
  {
    id: "model-003",
    name: "Vision Model v3",
    type: "Computer Vision",
    size: "3.8 GB",
    lastUpdated: "2023-11-05",
    version: "1.2.0",
    status: "Ready",
  },
  {
    id: "model-004",
    name: "Assistant Base",
    type: "Assistant",
    size: "5.1 GB",
    lastUpdated: "2023-12-10",
    version: "3.0.1",
    status: "Training",
  },
  {
    id: "model-005",
    name: "Research Agent",
    type: "Research",
    size: "4.2 GB",
    lastUpdated: "2024-01-18",
    version: "2.0.0",
    status: "Ready",
  },
]

export function ModelsList() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead className="hidden md:table-cell">Type</TableHead>
            <TableHead className="hidden md:table-cell">Size</TableHead>
            <TableHead className="hidden md:table-cell">Last Updated</TableHead>
            <TableHead className="hidden sm:table-cell">Version</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {models.map((model) => (
            <TableRow key={model.id}>
              <TableCell className="font-medium">{model.name}</TableCell>
              <TableCell className="hidden md:table-cell">{model.type}</TableCell>
              <TableCell className="hidden md:table-cell">{model.size}</TableCell>
              <TableCell className="hidden md:table-cell">{model.lastUpdated}</TableCell>
              <TableCell className="hidden sm:table-cell">{model.version}</TableCell>
              <TableCell>
                <Badge
                  variant={model.status === "Ready" ? "default" : "outline"}
                  className={model.status === "Training" ? "border-amber-500 text-amber-500" : ""}
                >
                  {model.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <span className="sr-only">Open menu</span>
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Play className="mr-2 h-4 w-4" /> Use in Training
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Edit className="mr-2 h-4 w-4" /> Edit Details
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Download className="mr-2 h-4 w-4" /> Download
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive">
                      <Trash className="mr-2 h-4 w-4" /> Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

