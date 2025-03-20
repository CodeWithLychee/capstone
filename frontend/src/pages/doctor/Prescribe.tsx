import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import Button from "@/components/Button";
import Access from "../common/access";
import { useContext } from "react";

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
import { prescriptionContext } from "@/store/prescriptionContext";
import { dataPass } from "@/lib/types.ts";

const vitals: Array<{
  id: string;
  label: string;
  name: keyof dataPass;
  placeholder: string;
}> = [
  {
    id: "bp",
    label: "Blood Pressure",
    name: "bp",
    placeholder: "Enter Blood Pressure",
  },
  { id: "spo2", label: "SpO2", name: "spo2", placeholder: "Enter SpO2" },
  {
    id: "temperature",
    name: "temperature",
    label: "Temperature",
    placeholder: "Enter Temperature",
  },
  {
    id: "heartRate",
    label: "Heart Rate",
    name: "heart_rate",
    placeholder: "Enter Heart Rate",
  },
  { id: "bmi", label: "BMI", name: "bmi", placeholder: "Enter BMI" },
  {
    id: "glucose",
    label: "Glucose",
    name: "glucose",
    placeholder: "Enter Glucose",
  },
  {
    id: "respiratoryRate",
    label: "Respiratory Rate",
    name: "respiratory_rate",
    placeholder: "Enter Respiratory Rate",
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

export default function Prescribe() {
  const [isVitalsOpen, setIsVitalsOpen] = useState(false);
  const [isPrescriptionOpen, setIsPrescriptionOpen] = useState(false);
  const [isPharmacyMedicationOpen, setIsPharmacyMedicationOpen] =
    useState(false);
  const { prescription } = useContext(prescriptionContext);
  console.log(
    "mai hu prescribe page mai now see the data jo queue sai aya ",
    prescription,
  );

  return (
    <Access text={["doctor"]}>
      <div className="p-6 bg-zinc-100 ">
        <h1 className="text-4xl font-semibold mb-6 pl-5">
          Patient Prescription
        </h1>
        <div className="space-y-6 bg-white p-8 rounded-2xl">
          <form className="space-y-6 max-w-7xl mx-auto ">
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Patient Details</h2>
              <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg">
                <div className="space-y-1">
                  <Label className="text-gray-500">Name</Label>
                  <p className="font-medium">{prescription.name}</p>
                </div>
                <div className="space-y-1">
                  <Label className="text-gray-500">Roll No/Staff ID</Label>
                  <p className="font-medium">{prescription.roll_no}</p>
                </div>
                <div className="space-y-1">
                  <Label className="text-gray-500">Gender</Label>
                  <p className="font-medium">{prescription.gender}</p>
                </div>
                <div className="space-y-1">
                  <Label className="text-gray-500">Age</Label>
                  <p className="font-medium">{prescription.age}</p>
                </div>
                <div className="space-y-1 col-span-2">
                  <Label className="text-gray-500">Email</Label>
                  <p className="font-medium">{prescription.email}</p>
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
                  {vitals.map(({ id, label, name, placeholder }) => (
                    <div key={id} className="space-y-2">
                      <Label htmlFor={id}>{label}</Label>
                      <Input
                        id={id}
                        placeholder={placeholder}
                        defaultValue={String(prescription?.[name] ?? "")}
                      />
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
                <h2 className="text-lg font-semibold">
                  In Pharmacy Medication
                </h2>
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
                  <Textarea
                    id="rest"
                    placeholder={"Enter rest recommendation"}
                  />
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
    </Access>
  );
}
