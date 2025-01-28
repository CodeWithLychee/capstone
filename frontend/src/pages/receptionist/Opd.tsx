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
import { useState } from "react";

function Opd() {
  const [isOpen, setIsOpen] = useState(false);

  const fields = [
    { id: "bp", label: "Blood Pressure", placeholder: "Enter Blood Pressure" },
    { id: "spo2", label: "SpO2", placeholder: "Enter SpO2" },
    {
      id: "temperature",
      label: "Temperature",
      placeholder: "Enter Temperature",
    },
    { id: "heartRate", label: "Heart Rate", placeholder: "Enter Heart Rate" },
    { id: "bmi", label: "BMI", placeholder: "Enter BMI" },
    { id: "glucose", label: "Glucose", placeholder: "Enter Glucose" },
    {
      id: "respiratoryRate",
      label: "Respiratory Rate",
      placeholder: "Enter Respiratory Rate",
    },
    {
      id: "pregnant",
      label: "Pregnant",
      placeholder: "Enter Pregnancy Status",
    },
  ];

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

        <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}
          className="border rounded-lg"
        >
          <CollapsibleTrigger className="flex items-center justify-between w-full p-4 hover:bg-gray-50">
            <h2 className="text-lg font-semibold">Additional</h2>
            <ChevronDown
              className={`h-5 w-5 transition-transform duration-200 ${
                isOpen ? "transform rotate-180" : ""
              }`}
            />
          </CollapsibleTrigger>
          <CollapsibleContent className="p-4 border-t">
            <div className="grid grid-cols-2 gap-4">
              {fields.map(({ id, label, placeholder }) => (
                <div key={id} className="space-y-2">
                  <Label htmlFor={id}>{label}</Label>
                  <Input id={id} placeholder={placeholder} />
                </div>
              ))}
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

export default Opd;
