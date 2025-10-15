"use client"

import dynamic from "next/dynamic"

const BarChart = dynamic(() => import("recharts").then((mod) => mod.BarChart), { ssr: false })

const Bar = dynamic(() => import("recharts").then((mod) => mod.Bar), { ssr: false })

const XAxis = dynamic(() => import("recharts").then((mod) => mod.XAxis), { ssr: false })

const YAxis = dynamic(() => import("recharts").then((mod) => mod.YAxis), { ssr: false })

const CartesianGrid = dynamic(() => import("recharts").then((mod) => mod.CartesianGrid), { ssr: false })

const ResponsiveContainer = dynamic(() => import("recharts").then((mod) => mod.ResponsiveContainer), { ssr: false })

export { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer }
