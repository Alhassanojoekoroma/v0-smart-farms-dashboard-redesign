import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Building2, User, Bell, Shield, Database, Wheat } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-semibold text-foreground">Settings</h1>
        <p className="text-sm text-muted-foreground mt-1">Manage your account and system preferences</p>
      </div>

      {/* Settings Tabs */}
      <Tabs defaultValue="organization" className="space-y-4">
        <TabsList className="grid w-full grid-cols-5 lg:w-auto">
          <TabsTrigger value="organization">Organization</TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="system">System</TabsTrigger>
        </TabsList>

        {/* Organization Settings */}
        <TabsContent value="organization" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5" />
                Organization Settings
              </CardTitle>
              <CardDescription>Manage your organization information and branding</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-primary">
                  <Wheat className="h-10 w-10 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <Label>Organization Logo</Label>
                  <p className="text-sm text-muted-foreground mb-2">Upload your organization logo</p>
                  <Button variant="outline" size="sm">
                    Change Logo
                  </Button>
                </div>
              </div>
              <Separator />
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="org-name">Organization Name</Label>
                  <Input id="org-name" defaultValue="SmartFarms Ltd" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="org-email">Contact Email</Label>
                  <Input id="org-email" type="email" defaultValue="info@smartfarms.sl" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="org-phone">Contact Phone</Label>
                  <Input id="org-phone" defaultValue="+232 76 000 000" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="org-location">Location</Label>
                  <Input id="org-location" defaultValue="Freetown, Sierra Leone" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="currency">Currency</Label>
                  <Input id="currency" defaultValue="Leone (Le)" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timezone">Timezone</Label>
                  <Input id="timezone" defaultValue="GMT (UTC+0)" />
                </div>
              </div>
              <Button className="bg-primary text-primary-foreground">Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Profile Settings */}
        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Profile Settings
              </CardTitle>
              <CardDescription>Manage your personal account information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-6">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="/placeholder.svg?height=80&width=80" />
                  <AvatarFallback className="bg-primary text-primary-foreground text-2xl">FK</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <Label>Profile Photo</Label>
                  <p className="text-sm text-muted-foreground mb-2">Upload your profile picture</p>
                  <Button variant="outline" size="sm">
                    Change Photo
                  </Button>
                </div>
              </div>
              <Separator />
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="full-name">Full Name</Label>
                  <Input id="full-name" defaultValue="Foday Kamara" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" defaultValue="admin@smartfarms.sl" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" defaultValue="+232 76 123 456" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <Input id="role" defaultValue="System Administrator" disabled />
                </div>
              </div>
              <Separator />
              <div>
                <h3 className="text-sm font-medium mb-4">Change Password</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input id="new-password" type="password" />
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button className="bg-primary text-primary-foreground">Save Changes</Button>
                <Button variant="outline">Cancel</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications Settings */}
        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notification Preferences
              </CardTitle>
              <CardDescription>Choose how you want to be notified</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>SMS Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive notifications via SMS</p>
                  </div>
                  <Switch />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>New Order Alerts</Label>
                    <p className="text-sm text-muted-foreground">Get notified when new orders are placed</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Payment Confirmations</Label>
                    <p className="text-sm text-muted-foreground">Get notified when payments are received</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Low Stock Alerts</Label>
                    <p className="text-sm text-muted-foreground">Get notified when products are low in stock</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>New Farmer Registrations</Label>
                    <p className="text-sm text-muted-foreground">Get notified when new farmers register</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
              <Button className="bg-primary text-primary-foreground">Save Preferences</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Settings */}
        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Security Settings
              </CardTitle>
              <CardDescription>Manage your account security and authentication</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Two-Factor Authentication</Label>
                    <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                  </div>
                  <Switch />
                </div>
                <Separator />
                <div>
                  <Label>Active Sessions</Label>
                  <p className="text-sm text-muted-foreground mb-4">Manage your active login sessions</p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between rounded-lg border p-4">
                      <div>
                        <p className="font-medium">Current Session</p>
                        <p className="text-sm text-muted-foreground">Chrome on Windows • Freetown, Sierra Leone</p>
                        <p className="text-xs text-muted-foreground mt-1">Last active: Just now</p>
                      </div>
                      <Badge className="bg-success text-success-foreground">Active</Badge>
                    </div>
                  </div>
                </div>
                <Separator />
                <div>
                  <Label>Login History</Label>
                  <p className="text-sm text-muted-foreground mb-2">View your recent login activity</p>
                  <Button variant="outline" size="sm">
                    View History
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* System Settings */}
        <TabsContent value="system" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5" />
                System Settings
              </CardTitle>
              <CardDescription>Configure system preferences and integrations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Dark Mode</Label>
                    <p className="text-sm text-muted-foreground">Switch between light and dark theme</p>
                  </div>
                  <Switch />
                </div>
                <Separator />
                <div>
                  <Label>Language</Label>
                  <p className="text-sm text-muted-foreground mb-2">Select your preferred language</p>
                  <Input defaultValue="English" className="max-w-xs" />
                </div>
                <Separator />
                <div>
                  <Label>Data Backup</Label>
                  <p className="text-sm text-muted-foreground mb-2">Configure automatic data backup schedule</p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Configure Backup
                    </Button>
                    <Button variant="outline" size="sm">
                      Backup Now
                    </Button>
                  </div>
                </div>
                <Separator />
                <div>
                  <Label>API Keys</Label>
                  <p className="text-sm text-muted-foreground mb-2">Manage API keys for integrations</p>
                  <Button variant="outline" size="sm">
                    Manage API Keys
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
