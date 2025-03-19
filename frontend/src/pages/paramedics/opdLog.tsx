import Button from "@/components/Button";
import Access from "../common/access";
import { useEffect, useState } from "react";
import { api } from "../../lib/utils.ts";
import { PatientQueue } from "@/lib/types.ts";

// const patients: Patient[] = [
//   {
//     id: 1,
//     name: "Prerit Bhagat",
//     rollNumber: "102217030",
//     age: 20,
//     phoneNumber: "+91 81988944400",
//     prescribedBy: "",
//   },
//   {
//     id: 2,
//     name: "Rahul Kumar",
//     rollNumber: "102217031",
//     age: 20,
//     phoneNumber: "+91 81988944401",
//     prescribedBy: "",
//   },
//   {
//     id: 3,
//     name: "Rahul Kumar",
//     rollNumber: "102217032",
//     age: 20,
//     phoneNumber: "+91 81988944402",
//     prescribedBy: "",
//   },
//   {
//     id: 4,
//     name: "Rahul Kumar",
//     rollNumber: "102217033",
//     age: 20,
//     phoneNumber: "+91 81988944403",
//     prescribedBy: "",
//   },
//   // More patients can be added here
// ];

export default function OpdLog() {
  const [patients, setPatients] = useState<PatientQueue[]>([]);
  useEffect(() => {
    const fetchPatients = async () => {
      const response = await api.get("/user/getOpdLog/?status=false");
      const data = await response.data;
      console.log(data);
      setPatients(data);
    };
    const interval = setInterval(fetchPatients, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <Access text={["doctor", "receptionist", "paramedic"]}>
      <div className="p-6 bg-zinc-100 h-full">
        <h1 className="text-4xl font-semibold mb-6 pl-5">
          Patient Prescription
        </h1>
        <div className="bg-white rounded-lg shadow">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                    Sr No.
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                    Roll Number
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                    Age
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                    Phone Number
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                    Prescribed By
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {patients.map((patient, i) => (
                  <tr key={patient._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-500">{i}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {patient.patient_id.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {patient.patient_id.roll_no}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {patient.patient_id.age}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {patient.patient_id.mobile_no}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {patient.prescription_id.doctor_id}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <Button>View</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Access>
  );
}
