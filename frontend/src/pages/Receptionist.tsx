import Button from "@/components/Button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronDown } from "lucide-react";

export default function Receptionist() {
  return (
    <div>
      <OPD />
    </div>
  );
}

export function OPD() {
  return (
    <div className="p-6 bg-zinc-100">
      <h1 className="text-4xl font-semibold mb-6">OPD</h1>
      <div className="space-y-6 bg-white p-8 rounded-2xl">
        <h2 className="text-xl font-medium">Register New Walk-in</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="staffId">Staff/Student ID</Label>
            <Input id="staffId" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="mobile">Mobile No.</Label>
            <Input id="mobile" type="tel" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="age">Age</Label>
            <Input id="age" type="number" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="sex">Sex</Label>
            <Input id="sex" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="department">Department</Label>
            <Input id="department" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="year">Year</Label>
            <Input id="year" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="hostel">Hostel</Label>
            <Input id="hostel" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="roomNo">Room No.</Label>
            <Input id="roomNo" />
          </div>
        </div>

        <Collapsible className="w-full">
          <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg border p-4 hover:bg-gray-50 transition-colors duration-200">
            <span>Additional</span>
            <ChevronDown className="h-4 w-4 transition-transform duration-200 [&[data-state=open]]:rotate-180" />
          </CollapsibleTrigger>
          <CollapsibleContent className="pt-4 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="bp">Blood Pressure</Label>
                <Input id="bp" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="spo2">SpO2</Label>
                <Input id="spo2" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="temperature">Temperature</Label>
                <Input id="temperature" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="heartRate">Heart Rate</Label>
                <Input id="heartRate" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bmi">BMI</Label>
                <Input id="bmi" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="glucose">Glucose</Label>
                <Input id="glucose" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="respiratoryRate">Respiratory Rate</Label>
                <Input id="respiratoryRate" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="pregnant">Pregnant</Label>
                <Input id="pregnant" />
              </div>
            </div>

            <div className="flex items-center gap-2 mt-4">
              <Checkbox id="emergency" />
              <Label htmlFor="emergency">Emergency</Label>
            </div>
          </CollapsibleContent>
        </Collapsible>

        <div className="flex justify-end">
          <Button>Save Details</Button>
        </div>
      </div>
    </div>
  );
}
