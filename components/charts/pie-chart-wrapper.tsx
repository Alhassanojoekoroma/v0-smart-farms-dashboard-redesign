"use client"

import dynamic from "next/dynamic"

const PieChart = dynamic(() => import("recharts").then((mod) => mod.PieChart), { ssr: false })

const Pie = dynamic(() => import("recharts").then((mod) => mod.Pie), { ssr: false })

const Cell = dynamic(() => import("recharts").then((mod) => mod.Cell), { ssr: false })

const ResponsiveContainer = dynamic(() => import("recharts").then((mod) => mod.ResponsiveContainer), { ssr: false })

export { PieChart, Pie, Cell, ResponsiveContainer }
