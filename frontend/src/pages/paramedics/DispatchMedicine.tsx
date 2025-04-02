import { Button } from "@/components/myprofilecomponents/ui/button";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { ArrowLeft, Check, Printer } from "lucide-react";
import moment from "moment";
import { useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function PrescriptionDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  console.log("State from location:", state);

  const patient = {
    name: state.patient_id.name,
    rollNumber: state.patient_id.roll_no || state.patient_id.staffId,
    age: state.patient_id.age,
    phone: state.patient_id.mobile_no,
    prescribedBy: state.prescription_id.doctor_id,
    prescriptionDate: moment(state.prescription_id.date).format("DD-MM-YYYY"),
    notes: state.prescription_id.paramedic_notes,
  };

  const medications = [
    {
      id: 1,
      name: "Paracetamol 500mg",
      dosage: "1 tablet",
      frequency: "3 times a day after meals",
      duration: "5 days",
      quantity: 15,
      notes: "For fever and pain relief",
      available: true,
    },
    {
      id: 2,
      name: "Azithromycin 250mg",
      dosage: "1 tablet",
      frequency: "Once daily",
      duration: "3 days",
      quantity: 3,
      notes: "Take on empty stomach",
      available: true,
    },
    {
      id: 3,
      name: "Vitamin C 500mg",
      dosage: "1 tablet",
      frequency: "Once daily",
      duration: "15 days",
      quantity: 15,
      notes: "",
      available: false,
    },
  ];

  const pdfRef = useRef(null);

  const generatePDF = async () => {
    const element = pdfRef.current;
    const canvas = await html2canvas(element!);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const imgWidth = 210;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save(`${patient.prescriptionDate}_${patient.name}.pdf`);
  };

  return (
    <main className="container mx-auto py-6 px-4 max-w-4xl bg-zinc-100">
      <div className="mb-6 flex justify-between items-center">
        <Link
          to="/app/paramedic/opdLog"
          className="flex items-center text-[#1e3a5c] hover:underline"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Prescriptions
        </Link>
        <Button
          onClick={generatePDF}
          variant="outline"
          size="sm"
          className="flex items-center gap-1"
        >
          <Printer className="w-4 h-4" />
          Print
        </Button>
      </div>

      <div ref={pdfRef}>
        {/* Patient Information Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-2xl font-bold text-[#1e3a5c]">
                Prescription Details
              </h1>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-2">
            <div>
              <h3 className="font-medium text-sm text-gray-500 mb-2">
                Patient Information
              </h3>
              <div className="space-y-1">
                <p>Name: {patient.name}</p>
                <p>Roll Number: {patient.rollNumber}</p>
                <p>Age: {patient.age}</p>
                <p>Phone: {patient.phone}</p>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-sm text-gray-500 mb-2">
                Prescription Information
              </h3>
              <div className="space-y-1">
                <p>Prescribed By: {patient.prescribedBy}</p>
                <p>Prescription Date: {patient.prescriptionDate}</p>
                <p>Prescription Notes: {patient.notes}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Medications Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-[#1e3a5c] mb-4">
            Prescribed Medications
          </h2>

          <div className="space-y-4 mb-6">
            {medications.map((med) => (
              <div key={med.id} className="bg-gray-50 p-4 rounded-lg border">
                <div className="flex items-center gap-3">
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <label
                        htmlFor={`med-${med.id}`}
                        className="font-medium cursor-pointer"
                      >
                        {med.name}
                      </label>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          med.available
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {med.available ? "In Stock" : "Out of Stock"}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      <p>Quantity: {med.quantity} units</p>
                      <p>
                        Dosage: {med.dosage}, {med.frequency}, for{" "}
                        {med.duration}
                      </p>

                      {med.notes && (
                        <p className="text-gray-500 mt-1">Note: {med.notes}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-6">
            <h3 className="font-medium text-sm text-gray-500 mb-2">
              Additional Instructions
            </h3>
            <p>{state.prescription_id.treatment_plan.advice}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-end my-5">
        <div className="flex gap-3">
          <Button
            onClick={() => navigate("/app/paramedic/opdLog")}
            variant="outline"
          >
            Cancel
          </Button>
          <Button className="bg-[#1e3a5c] hover:bg-[#2a4a6d] text-white">
            <Check className="w-4 h-4 mr-2" />
            Dispense Medication
          </Button>
        </div>
      </div>
    </main>
  );
}
