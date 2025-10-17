"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LineChart,
  Settings,
  PlusSquare,
  Database,
  Layers,
  ActivitySquare,
  Users,
  FileText,
  Bell,
  Cpu,
  Menu,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const sidebarItems = [
  {
    title: "Dashboard",
    icon: LineChart,
    href: "/",
  },
  {
    title: "Agent Builder",
    icon: PlusSquare,
    href: "/agent-builder",
  },
  {
    title: "Training Hub",
    icon: Cpu,
    href: "/training-hub",
  },
  {
    title: "Tasks Manager",
    icon: FileText,
    href: "/tasks",
  },
  {
    title: "Monitoring",
    icon: ActivitySquare,
    href: "/monitoring",
  },
  {
    title: "Multi-Agent Coordination",
    icon: Users,
    href: "/coordination",
  },
  {
    title: "Data Pipeline",
    icon: Database,
    href: "/data-pipeline",
  },
  {
    title: "Resource Monitor",
    icon: Layers,
    href: "/resources",
  },
  {
    title: "Alerts",
    icon: Bell,
    href: "/alerts",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/settings",
  },
]

export function Sidebar() {
  const pathname = usePathname()
  const isMobile = useMobile()

  const SidebarContent = () => (
    <div className="flex h-screen w-64 flex-col border-r bg-background">
      <div className="flex h-14 items-center border-b px-4">
        <h2 className="text-lg font-semibold">Agent Workspace</h2>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid gap-1 px-2">
          {sidebarItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                pathname === item.href ? "bg-accent text-accent-foreground" : "transparent",
              )}
            >
              <item.icon className="h-4 w-4" />
              <span>{item.title}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )

  if (isMobile) {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="fixed left-4 top-3 z-40 md:hidden">
            <Menu className="h-4 w-4" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0">
          <SidebarContent />
        </SheetContent>
      </Sheet>
    )
  }

  return <SidebarContent />
}

