import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { month: "Jan", visits: 320 },
  { month: "Feb", visits: 350 },
  { month: "Mar", visits: 300 },
  { month: "Apr", visits: 350 },
  { month: "May", visits: 345 },
  { month: "Jun", visits: 350 },
  { month: "Jul", visits: 400 },
  { month: "Aug", visits: 355 },
  { month: "Sep", visits: 300 },
  { month: "Oct", visits: 450 },
  { month: "Nov", visits: 350 },
  { month: "Dec", visits: 450 },
]

export function VisitsChart() {
  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Students Visited Over Months</h3>
      </div>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="visits" stroke="#2563eb" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

