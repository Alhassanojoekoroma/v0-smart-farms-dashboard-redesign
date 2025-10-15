"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Home,
  BarChart3,
  Users,
  Package,
  MessageSquare,
  CreditCard,
  Settings,
  Lock,
  ChevronLeft,
  ChevronRight,
  Wheat,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const menuItems = [
  { icon: Home, label: "Overview", href: "/" },
  { icon: BarChart3, label: "Statistics", href: "/statistics" },
  { icon: Users, label: "Customers", href: "/customers" },
  { icon: Package, label: "Product", href: "/products" },
  { icon: MessageSquare, label: "Messages", href: "/messages", badge: 3 },
  { icon: CreditCard, label: "Transactions", href: "/transactions" },
]

const generalItems = [
  { icon: Settings, label: "Settings", href: "/settings" },
  { icon: Lock, label: "Security", href: "/security" },
]

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const pathname = usePathname()

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 h-screen bg-primary transition-all duration-300",
        collapsed ? "w-20" : "w-64",
      )}
    >
      <div className="flex h-full flex-col">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-sidebar-border p-4">
          <div className={cn("flex items-center gap-2", collapsed && "justify-center w-full")}>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
              <Wheat className="h-6 w-6 text-accent-foreground" />
            </div>
            {!collapsed && <span className="text-lg font-semibold text-sidebar-foreground">SmartFarms</span>}
          </div>
          {!collapsed && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setCollapsed(true)}
              className="h-8 w-8 text-sidebar-foreground hover:bg-sidebar-accent"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          )}
        </div>

        {collapsed && (
          <div className="flex justify-center p-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setCollapsed(false)}
              className="h-8 w-8 text-sidebar-foreground hover:bg-sidebar-accent"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}

        {/* Menu Items */}
        <div className="flex-1 overflow-y-auto py-4">
          <div className="space-y-1 px-3">
            {!collapsed && (
              <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-sidebar-foreground/60">
                Menu
              </p>
            )}
            {menuItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-sidebar-accent text-sidebar-primary border-l-4 border-sidebar-primary"
                      : "text-sidebar-foreground/80 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground",
                    collapsed && "justify-center",
                  )}
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  {!collapsed && (
                    <>
                      <span className="flex-1">{item.label}</span>
                      {item.badge && (
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-foreground">
                          {item.badge}
                        </span>
                      )}
                    </>
                  )}
                </Link>
              )
            })}
          </div>

          <div className="mt-6 space-y-1 px-3">
            {!collapsed && (
              <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-sidebar-foreground/60">
                General
              </p>
            )}
            {generalItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-sidebar-accent text-sidebar-primary border-l-4 border-sidebar-primary"
                      : "text-sidebar-foreground/80 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground",
                    collapsed && "justify-center",
                  )}
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  {!collapsed && <span>{item.label}</span>}
                </Link>
              )
            })}
          </div>
        </div>

        {/* User Profile */}
        <div className="border-t border-sidebar-border p-4">
          <div className={cn("flex items-center gap-3", collapsed && "justify-center")}>
            <Avatar className="h-10 w-10">
              <AvatarImage src="/placeholder.svg?height=40&width=40" />
              <AvatarFallback className="bg-accent text-accent-foreground">FK</AvatarFallback>
            </Avatar>
            {!collapsed && (
              <div className="flex-1 overflow-hidden">
                <p className="text-sm font-medium text-sidebar-foreground">Foday Kamara</p>
                <p className="truncate text-xs text-sidebar-foreground/60">admin@smartfarms.sl</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </aside>
  )
}
