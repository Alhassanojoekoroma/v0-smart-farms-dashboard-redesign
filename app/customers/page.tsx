"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Filter, MoreVertical, UserPlus } from "lucide-react"
import { supabase } from "@/lib/supabase"
import Link from "next/link"

interface Farmer {
  id: string
  name: string
  phone: string
  location: string
  community: string
  land_size: string
  crop: string
  status: string
  avatar: string
}

export default function CustomersPage() {
  const [farmers, setFarmers] = useState<Farmer[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [locationFilter, setLocationFilter] = useState("all")

  useEffect(() => {
    async function fetchFarmers() {
      const { data } = await supabase
        .from('farmers')
        .select('*')
        .order('name', { ascending: true })

      if (data) setFarmers(data)
      setLoading(false)
    }

    fetchFarmers()
  }, [])

  const filteredFarmers = farmers.filter((farmer) => {
    const matchesSearch =
      farmer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      farmer.phone.includes(searchQuery) ||
      farmer.location.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesLocation = locationFilter === "all" || farmer.location === locationFilter
    return matchesSearch && matchesLocation
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-foreground">Customers</h1>
          <p className="text-sm text-muted-foreground mt-1">Manage farmers and their farm operations</p>
        </div>
        <Button className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
          <UserPlus className="h-4 w-4" />
          Add Farmer
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search farmers by name, phone, location..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={locationFilter} onValueChange={setLocationFilter}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <Filter className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Filter by location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="Bombali">Bombali</SelectItem>
                <SelectItem value="Moyamba">Moyamba</SelectItem>
                <SelectItem value="Port Loko">Port Loko</SelectItem>
                <SelectItem value="Kailahun">Kailahun</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="name">
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Sort by Name</SelectItem>
                <SelectItem value="date">Sort by Date Added</SelectItem>
                <SelectItem value="status">Sort by Status</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Farmers Table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Farmers List ({filteredFarmers.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-primary hover:bg-primary">
                  <TableHead className="text-primary-foreground font-semibold">#</TableHead>
                  <TableHead className="text-primary-foreground font-semibold">Name</TableHead>
                  <TableHead className="text-primary-foreground font-semibold">Phone</TableHead>
                  <TableHead className="text-primary-foreground font-semibold">Location</TableHead>
                  <TableHead className="text-primary-foreground font-semibold">Community</TableHead>
                  <TableHead className="text-primary-foreground font-semibold">Land Size</TableHead>
                  <TableHead className="text-primary-foreground font-semibold">Crop</TableHead>
                  <TableHead className="text-primary-foreground font-semibold">Status</TableHead>
                  <TableHead className="text-primary-foreground font-semibold">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loading ? (
                  <TableRow>
                    <TableCell colSpan={9} className="text-center py-8">
                      Loading farmers...
                    </TableCell>
                  </TableRow>
                ) : filteredFarmers.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={9} className="text-center py-8">
                      No farmers found
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredFarmers.map((farmer, index) => (
                  <TableRow key={farmer.id} className="hover:bg-muted/50">
                    <TableCell className="font-medium">{index + 1}</TableCell>
                    <TableCell>
                      <Link href={`/customers/${farmer.id}`} className="flex items-center gap-3 hover:underline">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={farmer.avatar || "/placeholder.svg"} />
                          <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                            {farmer.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <span className="font-medium">{farmer.name}</span>
                      </Link>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{farmer.phone}</TableCell>
                    <TableCell>{farmer.location}</TableCell>
                    <TableCell className="text-muted-foreground">{farmer.community}</TableCell>
                    <TableCell>{farmer.land_size}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="border-secondary text-secondary">
                        {farmer.crop}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={farmer.status === "Active" ? "default" : "secondary"}
                        className={
                          farmer.status === "Active"
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground"
                        }
                      >
                        {farmer.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Profile</DropdownMenuItem>
                          <DropdownMenuItem>Edit Details</DropdownMenuItem>
                          <DropdownMenuItem>View Farm Records</DropdownMenuItem>
                          <DropdownMenuItem>Payment History</DropdownMenuItem>
                          <DropdownMenuItem>Send Message</DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">Deactivate</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
