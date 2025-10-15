import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { farmers, transactions } from "@/lib/mock-data"
import { Phone, MapPin, Edit, FileText, CheckCircle2, Wheat } from "lucide-react"
import Link from "next/link"

export default function CustomerDetailPage({ params }: { params: { id: string } }) {
  const farmer = farmers.find((f) => f.id === Number.parseInt(params.id))

  if (!farmer) {
    return (
      <div className="flex h-full items-center justify-center">
        <p className="text-muted-foreground">Farmer not found</p>
      </div>
    )
  }

  const farmerTransactions = transactions.filter((t) => t.farmer === farmer.name)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <Link href="/customers" className="text-sm text-muted-foreground hover:underline">
            ← Back to Customers
          </Link>
          <h1 className="text-3xl font-semibold text-foreground mt-2">Farmer Profile</h1>
        </div>
        <Button className="gap-2 bg-secondary text-secondary-foreground hover:bg-secondary/90">
          <Edit className="h-4 w-4" />
          Edit Profile
        </Button>
      </div>

      {/* Profile Overview */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            <Avatar className="h-24 w-24">
              <AvatarImage src={farmer.avatar || "/placeholder.svg"} />
              <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                {farmer.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-4">
              <div>
                <h2 className="text-2xl font-semibold">{farmer.name}</h2>
                <Badge
                  variant={farmer.status === "Active" ? "default" : "secondary"}
                  className={
                    farmer.status === "Active"
                      ? "bg-primary text-primary-foreground mt-2"
                      : "bg-muted text-muted-foreground mt-2"
                  }
                >
                  {farmer.status}
                </Badge>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>{farmer.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>
                    {farmer.location}, {farmer.community}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Wheat className="h-4 w-4 text-muted-foreground" />
                  <span>{farmer.crop}</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="personal" className="space-y-4">
        <TabsList className="grid w-full grid-cols-5 lg:w-auto">
          <TabsTrigger value="personal">Personal Info</TabsTrigger>
          <TabsTrigger value="farm">Farm Details</TabsTrigger>
          <TabsTrigger value="activity">Activity History</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="notes">Notes</TabsTrigger>
        </TabsList>

        <TabsContent value="personal" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Full Name</label>
                  <p className="mt-1 text-base">{farmer.name}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Phone Number</label>
                  <p className="mt-1 text-base">{farmer.phone}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Location</label>
                  <p className="mt-1 text-base">{farmer.location}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Community</label>
                  <p className="mt-1 text-base">{farmer.community}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">ID Number</label>
                  <p className="mt-1 text-base">SL-{farmer.id.toString().padStart(6, "0")}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Registration Date</label>
                  <p className="mt-1 text-base">May 15, 2024</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="farm" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Farm Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Land Size</label>
                  <p className="mt-1 text-base">{farmer.landSize}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Land Type</label>
                  <p className="mt-1 text-base">Owned</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Primary Crop</label>
                  <p className="mt-1 text-base">{farmer.crop}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Water Source</label>
                  <p className="mt-1 text-base">Rain-fed</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Experience Level</label>
                  <p className="mt-1 text-base">5+ years</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Knowledge Level</label>
                  <p className="mt-1 text-base">Intermediate</p>
                </div>
              </div>
              <Separator />
              <div>
                <label className="text-sm font-medium text-muted-foreground">Farm Location</label>
                <div className="mt-2 h-48 rounded-lg bg-muted flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-muted-foreground" />
                  <span className="ml-2 text-muted-foreground">Map view placeholder</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activity" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Activity Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {farmerTransactions.map((transaction, index) => (
                  <div key={transaction.id} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      {index < farmerTransactions.length - 1 && <div className="h-full w-px bg-border mt-2" />}
                    </div>
                    <div className="flex-1 pb-4">
                      <p className="text-sm font-medium">{transaction.product}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {transaction.date} • Le {transaction.amount.toLocaleString()}
                      </p>
                      <Badge variant="outline" className="mt-2 border-primary text-primary">
                        {transaction.paymentStatus}
                      </Badge>
                    </div>
                  </div>
                ))}
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-success text-success-foreground">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Farmer registered in system</p>
                    <p className="text-xs text-muted-foreground mt-1">May 15, 2024</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="documents" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="flex items-center gap-3">
                    <FileText className="h-8 w-8 text-muted-foreground" />
                    <div>
                      <p className="font-medium">National ID Card</p>
                      <p className="text-xs text-muted-foreground">Uploaded May 15, 2024</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                </div>
                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="flex items-center gap-3">
                    <FileText className="h-8 w-8 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Land Certificate</p>
                      <p className="text-xs text-muted-foreground">Uploaded May 15, 2024</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  Upload New Document
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notes" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Admin Notes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">Notes</label>
                <textarea
                  className="mt-2 w-full rounded-md border bg-background p-3 text-sm min-h-[120px]"
                  placeholder="Add notes about this farmer..."
                  defaultValue="Reliable farmer with good track record. Interested in expanding to vegetable farming."
                />
              </div>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" className="rounded" />
                  <span>Follow-up needed</span>
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" className="rounded" />
                  <span>High priority</span>
                </label>
              </div>
              <div>
                <label className="text-sm font-medium">Next Review Date</label>
                <Input type="date" className="mt-2" />
              </div>
              <Button className="bg-primary text-primary-foreground">Save Notes</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
