import { Users, Activity, Stethoscope, ClipboardList } from "lucide-react"
import { StatsCard } from "@/components/dashboard/Stats-card"
import { VisitsChart } from "@/components/dashboard/charts/Visits-chart"
import { StaffChart } from "@/components/dashboard/charts/Staff-chart"
import { VisitorsPieChart } from "@/components/dashboard/charts/Visits-pie"

export default function Dashboard() {
  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard title="Total Patients" value="12" icon={<Users className="h-5 w-5" />} />
        <StatsCard title="Daily Average" value="15" icon={<Activity className="h-5 w-5" />} />
        <StatsCard title="Active Doctors" value="12" icon={<Stethoscope className="h-5 w-5" />} />
        <StatsCard title="Appointments" value="89" icon={<ClipboardList className="h-5 w-5" />} />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="md:col-span-4 lg:col-span-7">
          <VisitsChart />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="md:col-span-3">
            <VisitorsPieChart />
        </div>
        <div className="md:col-span-4">
          <StaffChart />
        </div>
      </div>
    </div>
  )
}