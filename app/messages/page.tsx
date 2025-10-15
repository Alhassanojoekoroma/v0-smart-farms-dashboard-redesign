"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Search, Send, Paperclip, Smile } from "lucide-react"
import { farmers } from "@/lib/mock-data"

const conversations = [
  {
    id: 1,
    farmer: farmers[0],
    lastMessage: "Thank you for the seeds delivery!",
    timestamp: "2 hours ago",
    unread: 2,
  },
  {
    id: 2,
    farmer: farmers[1],
    lastMessage: "When will the fertilizer arrive?",
    timestamp: "5 hours ago",
    unread: 1,
  },
  {
    id: 3,
    farmer: farmers[2],
    lastMessage: "I need help with irrigation setup",
    timestamp: "1 day ago",
    unread: 0,
  },
  {
    id: 4,
    farmer: farmers[3],
    lastMessage: "Payment completed successfully",
    timestamp: "2 days ago",
    unread: 0,
  },
]

const messages = [
  { id: 1, sender: "farmer", text: "Hello, I placed an order yesterday", timestamp: "10:30 AM" },
  { id: 2, sender: "admin", text: "Yes, I can see your order. It's being processed.", timestamp: "10:32 AM" },
  { id: 3, sender: "farmer", text: "When will it be delivered?", timestamp: "10:33 AM" },
  {
    id: 4,
    sender: "admin",
    text: "It should arrive within 2-3 business days. We'll notify you when it ships.",
    timestamp: "10:35 AM",
  },
  { id: 5, sender: "farmer", text: "Thank you for the seeds delivery!", timestamp: "2 hours ago" },
]

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0])
  const [searchQuery, setSearchQuery] = useState("")
  const [messageText, setMessageText] = useState("")

  const filteredConversations = conversations.filter((conv) =>
    conv.farmer.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-semibold text-foreground">Messages</h1>
        <p className="text-sm text-muted-foreground mt-1">Communicate with farmers and staff</p>
      </div>

      {/* Messages Layout */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left Panel - Conversations List */}
        <Card className="lg:col-span-1">
          <CardContent className="p-0">
            <div className="border-b p-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search conversations..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="max-h-[600px] overflow-y-auto">
              {filteredConversations.map((conversation) => (
                <button
                  key={conversation.id}
                  onClick={() => setSelectedConversation(conversation)}
                  className={`w-full border-b p-4 text-left transition-colors hover:bg-muted/50 ${
                    selectedConversation.id === conversation.id ? "bg-muted" : ""
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={conversation.farmer.avatar || "/placeholder.svg"} />
                      <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                        {conversation.farmer.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="font-medium truncate">{conversation.farmer.name}</p>
                        {conversation.unread > 0 && (
                          <Badge className="ml-2 h-5 w-5 rounded-full bg-accent text-accent-foreground p-0 flex items-center justify-center text-xs">
                            {conversation.unread}
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground truncate mt-1">{conversation.lastMessage}</p>
                      <p className="text-xs text-muted-foreground mt-1">{conversation.timestamp}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Right Panel - Conversation View */}
        <Card className="lg:col-span-2">
          <CardContent className="p-0 flex flex-col h-[600px]">
            {/* Conversation Header */}
            <div className="border-b p-4">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={selectedConversation.farmer.avatar || "/placeholder.svg"} />
                  <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                    {selectedConversation.farmer.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{selectedConversation.farmer.name}</p>
                  <p className="text-xs text-muted-foreground">{selectedConversation.farmer.location}</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === "admin" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[70%] rounded-lg p-3 ${
                      message.sender === "admin" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p
                      className={`text-xs mt-1 ${
                        message.sender === "admin" ? "text-primary-foreground/70" : "text-muted-foreground"
                      }`}
                    >
                      {message.timestamp}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="border-t p-4">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="flex-shrink-0">
                  <Paperclip className="h-5 w-5" />
                </Button>
                <Input
                  placeholder="Type a message..."
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter" && messageText.trim()) {
                      setMessageText("")
                    }
                  }}
                  className="flex-1"
                />
                <Button variant="ghost" size="icon" className="flex-shrink-0">
                  <Smile className="h-5 w-5" />
                </Button>
                <Button
                  className="flex-shrink-0 bg-primary text-primary-foreground"
                  onClick={() => {
                    if (messageText.trim()) {
                      setMessageText("")
                    }
                  }}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
