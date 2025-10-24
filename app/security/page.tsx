import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, AlertTriangle, CheckCircle2, Lock, Key, Activity } from "lucide-react"

export default function SecurityPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-semibold text-background">Security</h1>
        <p className="text-sm text-muted-foreground mt-1">Monitor and manage system security</p>
      </div>

      {/* Security Status */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Security Score</CardTitle>
            <Shield className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold text-primary">85/100</div>
            <p className="text-xs text-muted-foreground mt-1">Good security posture</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Threats</CardTitle>
            <AlertTriangle className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">0</div>
            <p className="text-xs text-muted-foreground mt-1">No threats detected</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Last Scan</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">2h ago</div>
            <p className="text-xs text-muted-foreground mt-1">All systems checked</p>
          </CardContent>
        </Card>
      </div>

      {/* Security Features */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lock className="h-5 w-5" />
            Security Features
          </CardTitle>
          <CardDescription>Review and configure security settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">SSL/TLS Encryption</p>
                <p className="text-sm text-muted-foreground">All data is encrypted in transit</p>
              </div>
            </div>
            <Badge className="bg-primary text-primary-foreground">Active</Badge>
          </div>

          <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Database Encryption</p>
                <p className="text-sm text-muted-foreground">Data at rest is encrypted</p>
              </div>
            </div>
            <Badge className="bg-primary text-primary-foreground">Active</Badge>
          </div>

          <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-5 w-5 text-accent" />
              <div>
                <p className="font-medium">Two-Factor Authentication</p>
                <p className="text-sm text-muted-foreground">Add extra security layer</p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              Enable
            </Button>
          </div>

          <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Automatic Backups</p>
                <p className="text-sm text-muted-foreground">Daily backups at 2:00 AM</p>
              </div>
            </div>
            <Badge className="bg-primary text-primary-foreground">Active</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Access Control */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Key className="h-5 w-5" />
            Access Control
          </CardTitle>
          <CardDescription>Manage user permissions and access levels</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div>
                <p className="font-medium">System Administrator</p>
                <p className="text-sm text-muted-foreground">Full system access</p>
              </div>
              <Badge className="bg-primary text-primary-foreground">3 Users</Badge>
            </div>
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div>
                <p className="font-medium">Manager</p>
                <p className="text-sm text-muted-foreground">Limited administrative access</p>
              </div>
              <Badge variant="outline">5 Users</Badge>
            </div>
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div>
                <p className="font-medium">Staff</p>
                <p className="text-sm text-muted-foreground">Basic operational access</p>
              </div>
              <Badge variant="outline">12 Users</Badge>
            </div>
          </div>
          <Button variant="outline" className="w-full mt-4 bg-transparent">
            Manage Roles & Permissions
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
