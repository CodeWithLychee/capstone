import Button from "@/components/Button";
import Access from "../common/access.tsx";
import { useEffect, useState, useContext } from "react";
import { api } from "../../lib/utils.ts";
import { PatientQueue, dataPass } from "@/lib/types.ts";
import { useNavigate } from "react-router-dom";
import { prescriptionContext } from "../../store/prescriptionContext.ts";

export default function DoctorPatientQueue() {
  const [patients, setPatients] = useState<PatientQueue[]>([]);
  const navigate = useNavigate();
  const { setPrescription } = useContext(prescriptionContext);

  function handle(data: dataPass) {
    setPrescription(data);
    console.log("Selected Patient Data:", data);
    navigate("/app/doctor/prescribe");
  }

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await api.get("/doctor/queue");
        console.log(
          "hello ji patients queue ka data dekh lo",
          response.data.data,
        );

        setPatients(response.data.data);
      } catch (error) {
        console.error("Error fetching patient queue:", error);
      }
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
            <table className="w-full table-fixed">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-6 py-3 text-sm font-medium text-gray-900 text-center uppercase w-1/12">
                    Sr No.
                  </th>
                  <th className="px-6 py-3 text-sm font-medium text-gray-900 text-center uppercase w-2/12">
                    Name
                  </th>
                  <th className="px-6 py-3 text-sm font-medium text-gray-900 text-center uppercase w-2/12">
                    Roll Number
                  </th>
                  <th className="px-6 py-3 text-sm font-medium text-gray-900 text-center uppercase w-1/12">
                    Age
                  </th>
                  <th className="px-6 py-3 text-sm font-medium text-gray-900 text-center uppercase w-2/12">
                    Phone Number
                  </th>
                  <th className="px-6 py-3 text-sm font-medium text-gray-900 text-center uppercase w-2/12">
                    Prescribed By
                  </th>
                  <th className="px-6 py-3 text-sm font-medium text-gray-900 text-center uppercase w-2/12">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {patients.map((patient, index) => (
                  <tr
                    key={patient._id || index}
                    className="hover:bg-gray-50 min-h-[50px]"
                  >
                    <td className="px-6 py-4 text-sm text-gray-500 text-center">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-center">
                      {patient.patient_id?.name || "-"}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-center">
                      {patient.patient_id?.roll_no || "-"}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-center">
                      {patient.patient_id?.age || "-"}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-center">
                      {patient.patient_id?.mobile_no || "-"}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-center">
                      {patient.prescription_id?.doctor_id || "-"}
                    </td>
                    <td
                      className="px-6 py-4 text-sm text-center"
                      onClick={() =>
                        handle({
                          ...patient.patient_id,
                          ...patient.prescription_id?.vitals,
                        })
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
