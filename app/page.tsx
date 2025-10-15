"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, ArrowDownRight, TrendingUp, Calendar, MoreVertical, Sparkles } from "lucide-react"
import { transactions, revenueData, performanceData, salesReportData } from "@/lib/mock-data"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "@/components/charts/bar-chart-wrapper"
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer as PieResponsiveContainer,
} from "@/components/charts/pie-chart-wrapper"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-foreground">Dashboard</h1>
          <p className="text-sm text-muted-foreground mt-1">An easy way to manage sales with care and precision.</p>
        </div>
        <Select defaultValue="may-2024">
          <SelectTrigger className="w-[220px] border-primary">
            <Calendar className="mr-2 h-4 w-4" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="may-2024">January 2024 - May 2024</SelectItem>
            <SelectItem value="this-month">This Month</SelectItem>
            <SelectItem value="last-month">Last Month</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6 lg:grid-cols-12">
        {/* Left Column - Update Card + Transactions */}
        <div className="space-y-6 lg:col-span-5">
          {/* Update Alert Card */}
          <Card className="bg-primary border-primary shadow-none">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent">
                  <TrendingUp className="h-4 w-4 text-accent-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-primary-foreground mb-1">Update</h3>
                  <p className="text-sm text-primary-foreground/80 mb-1">Feb 7th, 2024</p>
                  <p className="text-lg font-semibold text-primary-foreground mb-3">
                    Sales revenue increased 40% in 1 week
                  </p>
                  <Button variant="link" className="text-primary-foreground p-0 h-auto font-normal">
                    See Statistics →
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stat Cards Row */}
          <div className="grid gap-4 sm:grid-cols-2">
            <Card className="shadow-none">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Net Income</CardTitle>
                  <Button variant="ghost" size="icon" className="h-6 w-6">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">Le 193,000</div>
                <div className="flex items-center gap-1 text-sm text-secondary mt-2">
                  <ArrowUpRight className="h-4 w-4" />
                  <span>+35% from last month</span>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-none">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Return</CardTitle>
                  <Button variant="ghost" size="icon" className="h-6 w-6">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">Le 32,000</div>
                <div className="flex items-center gap-1 text-sm text-destructive mt-2">
                  <ArrowDownRight className="h-4 w-4" />
                  <span>-24% from last month</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Transaction List */}
          <Card className="shadow-none border border-sidebar-primary">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Transaction</CardTitle>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {transactions.slice(0, 7).map((transaction) => (
                <div key={transaction.id} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-xl">
                    {transaction.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm">{transaction.product}</p>
                    <p className="text-xs text-muted-foreground">{transaction.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-muted-foreground">{transaction.paymentStatus}</p>
                    <p className="text-xs text-muted-foreground">Le {transaction.amount.toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Middle Column - Revenue + Sales Report */}
        <div className="space-y-6 lg:col-span-4">
          {/* Revenue Chart */}
          <Card className="shadow-none">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Revenue</CardTitle>
                <div className="flex items-center gap-4 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-sm bg-primary" />
                    <span>Income</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-sm bg-secondary" />
                    <span>Expenses</span>
                  </div>
                </div>
              </div>
              <div className="text-3xl font-bold mt-2">Le 193,000</div>
              <div className="flex items-center gap-1 text-sm text-secondary">
                <ArrowUpRight className="h-4 w-4" />
                <span>+35% from last month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} />
                  <Bar dataKey="income" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="expenses" fill="hsl(var(--secondary))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Sales Report */}
          <Card className="shadow-none">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Sales Report</CardTitle>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {salesReportData.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{item.label}</span>
                    <span className="font-semibold text-accent">({item.value})</span>
                  </div>
                  <div className="relative h-8 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full bg-secondary transition-all"
                      style={{ width: `${(item.value / 500) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
              <div className="flex items-center justify-between text-xs text-muted-foreground pt-2">
                <span>0</span>
                <span>100</span>
                <span>200</span>
                <span>300</span>
                <span>400</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Performance + Promo Card */}
        <div className="space-y-6 lg:col-span-3">
          {/* Total View Performance */}
          <Card className="shadow-none">
            <CardHeader>
              <CardTitle className="text-lg">Total View Performance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="relative mx-auto w-48 h-48">
                <PieResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={performanceData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {performanceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </PieResponsiveContainer>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground">Total Count</p>
                    <p className="text-3xl font-bold">565K</p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground text-center">
                Here are some tips on how to improve your score.
              </p>

              <Button variant="outline" className="w-full bg-transparent border-primary">
                Guide Views
              </Button>

              <div className="space-y-2">
                {performanceData.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <div className="h-3 w-3 rounded-sm" style={{ backgroundColor: item.color }} />
                    <span className="text-muted-foreground flex-1">{item.name}</span>
                    <span className="font-semibold">{item.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Promotional Card */}
          <Card className="bg-gradient-to-br from-accent/20 to-secondary/20 border-accent/50 relative overflow-hidden shadow-none">
            <CardContent className="p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/30">
                  <Sparkles className="h-5 w-5 text-accent-foreground" />
                </div>
                <div className="absolute top-4 right-4 text-6xl opacity-20">✨</div>
              </div>
              <h3 className="text-xl font-bold mb-2">Level up your sales managing to the next level.</h3>
              <p className="text-sm text-muted-foreground mb-4">An any way to manage sales with care and precision.</p>
              <Button className="w-full bg-primary hover:bg-primary/90">Update to SmartFarms+</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
