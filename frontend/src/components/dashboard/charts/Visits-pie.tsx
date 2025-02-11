import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  { name: "Patients", value: 54.5 },
  { name: "Faculty", value: 18.2 },
  { name: "Others", value: 27.3 },
]

const COLORS = ["#2563eb", "#22c55e", "#f59e0b"]

export function VisitorsPieChart() {
  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Visited Persons in Dispensary</h3>
      </div>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
            {data.map((entry, index) => (
              <Cell key={entry.name} fill={COLORS[index % COLORS.length]}  />
            ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 flex justify-center gap-4">
        {data.map((entry, index) => (
          <div key={entry.name} className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
            <span className="text-sm text-gray-600">
              {entry.name} ({entry.value}%)
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
