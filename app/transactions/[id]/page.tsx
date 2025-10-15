import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { transactions } from "@/lib/mock-data"
import { CheckCircle2, Circle, Download, Printer } from "lucide-react"
import Link from "next/link"

export default function TransactionDetailPage({ params }: { params: { id: string } }) {
  const transaction = transactions.find((t) => t.id === params.id)

  if (!transaction) {
    return (
      <div className="flex h-full items-center justify-center">
        <p className="text-muted-foreground">Transaction not found</p>
      </div>
    )
  }

  const statusSteps = [
    { label: "Order Created", date: transaction.date, time: "10:30", completed: true },
    { label: "Approved", date: transaction.date, time: "11:00", completed: true },
    {
      label: "Payment Pending",
      date: transaction.date,
      time: "11:30",
      completed: transaction.paymentStatus === "Completed",
    },
    {
      label: "Ready to Ship",
      date: transaction.date,
      time: "14:00",
      completed: transaction.deliveryStatus === "Shipped" || transaction.deliveryStatus === "Delivered",
    },
    { label: "Shipped", date: "", time: "", completed: transaction.deliveryStatus === "Delivered" },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <Link href="/transactions" className="text-sm text-muted-foreground hover:underline">
            ← Back to Transactions
          </Link>
          <h1 className="text-3xl font-semibold text-foreground mt-2">Transaction Details</h1>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-2 bg-transparent">
            <Printer className="h-4 w-4" />
            Print
          </Button>
          <Button variant="outline" size="sm" className="gap-2 bg-transparent">
            <Download className="h-4 w-4" />
            Invoice
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left Column - Transaction Info */}
        <div className="space-y-6 lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Order Information</CardTitle>
                <Badge
                  variant={transaction.paymentStatus === "Completed" ? "default" : "secondary"}
                  className={
                    transaction.paymentStatus === "Completed"
                      ? "bg-primary text-primary-foreground"
                      : "bg-accent text-accent-foreground"
                  }
                >
                  {transaction.paymentStatus}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Transaction ID</label>
                  <p className="mt-1 text-base font-semibold">{transaction.id}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Date</label>
                  <p className="mt-1 text-base">{transaction.date}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Farmer</label>
                  <p className="mt-1 text-base">{transaction.farmer}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Payment Status</label>
                  <p className="mt-1 text-base">{transaction.paymentStatus}</p>
                </div>
              </div>
              <Separator />
              <div>
                <label className="text-sm font-medium text-muted-foreground">Product</label>
                <div className="mt-2 flex items-center gap-3 rounded-lg border p-4">
                  <span className="text-3xl">{transaction.icon}</span>
                  <div className="flex-1">
                    <p className="font-medium">{transaction.product}</p>
                    <p className="text-sm text-muted-foreground">Quantity: 1</p>
                  </div>
                  <p className="text-lg font-semibold">Le {transaction.amount.toLocaleString()}</p>
                </div>
              </div>
              <Separator />
              <div className="flex justify-between text-lg font-semibold">
                <span>Total Amount</span>
                <span className="text-primary">Le {transaction.amount.toLocaleString()}</span>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <Card>
            <CardHeader>
              <CardTitle>Actions</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {transaction.paymentStatus === "Pending" && (
                <Button className="bg-primary text-primary-foreground">Confirm Payment</Button>
              )}
              {transaction.deliveryStatus === "Processing" && (
                <Button className="bg-secondary text-secondary-foreground">Mark as Ready to Ship</Button>
              )}
              {transaction.deliveryStatus === "Shipped" && (
                <Button className="bg-accent text-accent-foreground">Mark as Delivered</Button>
              )}
              <Button variant="outline">Send Receipt</Button>
              <Button variant="outline" className="text-destructive bg-transparent">
                Cancel Order
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Status Timeline */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Order Status Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {statusSteps.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-full ${
                          step.completed
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground border-2 border-border"
                        }`}
                      >
                        {step.completed ? <CheckCircle2 className="h-4 w-4" /> : <Circle className="h-4 w-4" />}
                      </div>
                      {index < statusSteps.length - 1 && (
                        <div
                          className={`h-full w-px mt-2 ${step.completed ? "bg-primary" : "bg-border"}`}
                          style={{ minHeight: "40px" }}
                        />
                      )}
                    </div>
                    <div className="flex-1 pb-4">
                      <p
                        className={`text-sm font-medium ${step.completed ? "text-foreground" : "text-muted-foreground"}`}
                      >
                        {step.label}
                      </p>
                      {step.date && (
                        <p className="text-xs text-muted-foreground mt-1">
                          {step.date} {step.time && `• ${step.time}`}
                        </p>
                      )}
                      {!step.completed && !step.date && (
                        <p className="text-xs text-muted-foreground mt-1">Awaiting confirmation</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
