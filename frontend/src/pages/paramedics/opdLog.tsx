import Button from "@/components/Button";
import Access from "../common/access";
import { useEffect, useState } from "react";
import { api } from "../../lib/utils.ts";
import { PatientQueue, dataPass } from "@/lib/types.ts";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { prescriptionContext } from "../../store/prescriptionContext.ts";

export default function OpdLog() {
  const [patients, setPatients] = useState<PatientQueue[]>([]);
  const navigate = useNavigate();
  const { setPrescription } = useContext(prescriptionContext);
  function handle(data: dataPass) {
    setPrescription(data);
    console.log(data);
    navigate("/app/doctor/prescribe");
  }
  useEffect(() => {
    const fetchPatients = async () => {
      const response = await api.get("/user/getOpdLog/?status=false");
      const data = await response.data;
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
                    <td
                      className="px-6 py-4 text-sm"
                      onClick={() =>
                        handle({...patient.patient_id,...patient.prescription_id.vitals})
                      }
                    >
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
