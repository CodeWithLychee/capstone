import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import Button from "@/components/Button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ChevronDown } from "lucide-react";

export function Prescribe() {
  const [isVitalsOpen, setIsVitalsOpen] = useState(false);
  const [isPrescriptionOpen, setIsPrescriptionOpen] = useState(false);
  const [isPharmacyMedicationOpen, setIsPharmacyMedicationOpen] =
    useState(false);

  const vitals = [
    { id: "bp", label: "Blood Pressure", placeholder: "Enter blood pressure" },
    { id: "spo2", label: "SpO2", placeholder: "Enter SpO2" },
    {
      id: "temperature",
      label: "Temperature",
      placeholder: "Enter temperature",
    },
    { id: "heart-rate", label: "Heart Rate", placeholder: "Enter heart rate" },
    {
      id: "respiratory-rate",
      label: "Respiratory Rate",
      placeholder: "Enter respiratory rate",
    },
  ];
  const prescriptionFields = [
    { id: "history", label: "History", placeholder: "Enter medical history" },
    { id: "co", label: "C/o", placeholder: "Enter chief complaints" },
    { id: "allergies", label: "Allergy(s)", placeholder: "Enter allergies" },
    {
      id: "investigations",
      label: "Investigation(s)",
      placeholder: "Enter investigations",
    },
    {
      id: "diagnosis-icd",
      label: "Diagnosis (ICD Code & Description)",
      placeholder: "Enter ICD diagnosis",
    },
    { id: "prognosis", label: "Prognosis", placeholder: "Enter prognosis" },
    {
      id: "advice",
      label: "Doctor’s Advice / Recommendations",
      placeholder: "Enter advice",
    },
  ];

  const patientData = {
    name: "Abhinav Sharma",
    rollNo: "102203255",
    gender: "M",
    age: "21",
    email: "asharma5_be22@thapar.edu",
  };

  return (
    <div className="p-6 bg-zinc-100 ">
      <h1 className="text-4xl font-semibold mb-6 pl-5">Patient Prescription</h1>
      <div className="space-y-6 bg-white p-8 rounded-2xl">
        <form className="space-y-6 max-w-7xl mx-auto ">
          {/* Demographics */}
          {/* <div className="space-y-4">
            <h2 className="text-lg font-semibold">Patient Details</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter patient name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter email address"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gender">Gender</Label>
                <Input id="gender" placeholder="Select gender" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="age">Age</Label>
                <Input id="age" type="number" placeholder="Enter age" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="notes">Paramedic Notes</Label>
              <Textarea
                id="notes"
                placeholder="Enter paramedic notes"
                className="h-24"
              />
            </div>
          </div> */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Patient Details</h2>
            <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg">
              <div className="space-y-1">
                <Label className="text-gray-500">Name</Label>
                <p className="font-medium">{patientData.name}</p>
              </div>
              <div className="space-y-1">
                <Label className="text-gray-500">Roll No/Staff ID</Label>
                <p className="font-medium">{patientData.rollNo}</p>
              </div>
              <div className="space-y-1">
                <Label className="text-gray-500">Gender</Label>
                <p className="font-medium">{patientData.gender}</p>
              </div>
              <div className="space-y-1">
                <Label className="text-gray-500">Age</Label>
                <p className="font-medium">{patientData.age}</p>
              </div>
              <div className="space-y-1 col-span-2">
                <Label className="text-gray-500">Email</Label>
                <p className="font-medium">{patientData.email}</p>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="notes">Paramedic Notes</Label>
              <Textarea
                id="notes"
                placeholder="Enter paramedic notes"
                className="h-24"
              />
            </div>
          </div>

          {/* Vitals */}
          <Collapsible
            open={isVitalsOpen}
            onOpenChange={setIsVitalsOpen}
            className="border rounded-lg"
          >
            <CollapsibleTrigger className="flex items-center justify-between w-full p-4 hover:bg-gray-50">
              <h2 className="text-lg font-semibold">Vitals</h2>
              <ChevronDown
                className={`h-5 w-5 transition-transform duration-200 ${
                  isVitalsOpen ? "transform rotate-180" : ""
                }`}
              />
            </CollapsibleTrigger>
            <CollapsibleContent className="p-4 border-t">
              <div className="grid grid-cols-2 gap-4">
                {vitals.map(({ id, label, placeholder }) => (
                  <div key={id} className="space-y-2">
                    <Label htmlFor={id}>{label}</Label>
                    <Input id={id} placeholder={placeholder} />
                  </div>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>

          {/* Prescription */}
          <Collapsible
            open={isPrescriptionOpen}
            onOpenChange={setIsPrescriptionOpen}
            className="border rounded-lg"
          >
            <CollapsibleTrigger className="flex items-center justify-between w-full p-4 hover:bg-gray-50">
              <h2 className="text-lg font-semibold">Prescription</h2>
              <ChevronDown
                className={`h-5 w-5 transition-transform duration-200 ${
                  isPrescriptionOpen ? "transform rotate-180" : ""
                }`}
              />
            </CollapsibleTrigger>
            <CollapsibleContent className="p-4 border-t">
              <div className="grid grid-cols-2 gap-4">
                {prescriptionFields.map(({ id, label, placeholder }) => (
                  <div key={id} className="space-y-2">
                    <Label htmlFor={id}>{label}</Label>
                    <Textarea id={id} placeholder={placeholder} />
                  </div>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>

          {/* In Pharmacy Medication */}
          <Collapsible
            open={isPharmacyMedicationOpen}
            onOpenChange={setIsPharmacyMedicationOpen}
            className="border rounded-lg"
          >
            <CollapsibleTrigger className="flex items-center justify-between w-full p-4 hover:bg-gray-50">
              <h2 className="text-lg font-semibold">In Pharmacy Medication</h2>
              <ChevronDown
                className={`h-5 w-5 transition-transform duration-200 ${
                  isPharmacyMedicationOpen ? "transform rotate-180" : ""
                }`}
              />
            </CollapsibleTrigger>
            <CollapsibleContent className="p-4 border-t">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Sr No.</TableHead>
                    <TableHead>Medicine</TableHead>
                    <TableHead>Frequency/Day</TableHead>
                    <TableHead>Duration(Days)</TableHead>
                    <TableHead>Instructions</TableHead>
                    <TableHead className="w-[100px]">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>1.</TableCell>
                    <TableCell>
                      <Input placeholder="Enter medicine" />
                    </TableCell>
                    <TableCell>
                      <Input placeholder="Enter frequency" />
                    </TableCell>
                    <TableCell>
                      <Input placeholder="Enter duration" />
                    </TableCell>
                    <TableCell>
                      <Input placeholder="Enter instructions" />
                    </TableCell>
                    <TableCell>
                      <Button>ADD</Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CollapsibleContent>
          </Collapsible>
          {/* Additional Fields */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="referred" />
              <Label htmlFor="referred">Referred Outside?</Label>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="rest">Recommend Rest?</Label>
                <Textarea id="rest" placeholder={"Enter rest recommendation"} />
              </div>
              <div className="space-y-2 ">
                <Label htmlFor="followup">Follow-Up Date</Label>
                <div className="w-40">
                  <Input id="followup" type="date" />
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <Button>Save Details</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
