import type React from "react"

interface StatsCardProps {
  title: string
  value: string | number
  icon: React.ReactNode
}

export function StatsCard({ title, value, icon }: StatsCardProps) {
  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <div className="rounded-full bg-gray-100 p-2.5">{icon}</div>
      </div>
      <p className="mt-4 text-2xl font-semibold">{value}</p>
    </div>
  )
}

