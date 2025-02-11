import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { category: "Doctor", count: 45 },
  { category: "Receptionist", count: 30 },
  { category: "Pharmacist", count: 95 },
  { category: "Other Staff", count: 40 },
]

export function StaffChart() {
  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Number of Employees by Category</h3>
      </div>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#2563eb" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
