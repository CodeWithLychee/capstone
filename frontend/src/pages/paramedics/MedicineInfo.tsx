import Button from "@/components/Button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  ArrowLeft,
  Barcode,
  Boxes,
  Calendar,
  Factory,
  FileText,
  Hourglass,
  Pill,
  Tag,
} from "lucide-react";
import moment from "moment";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface MedicineFormData {
  name: string;
  company: string;
  expiry_date: string;
  price: string;
  quantity: string;
  desciption: string;
  batch_no: string;
  mfg_date: string;
}

const initialFormData: MedicineFormData = {
  name: "",
  company: "",
  expiry_date: "",
  price: "",
  quantity: "",
  desciption: "",
  batch_no: "",
  mfg_date: "",
};

export default function MedicineDetails() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [formData, setFormData] = useState<MedicineFormData>(initialFormData);
  const location = useLocation();
  const { state } = location;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      [name]: name.includes("date") ? new Date(value) : value,
    }));
  };

  const clearForm = () => {
    setFormData(initialFormData);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    clearForm();
    // Add your form submission logic here
  };

  return (
    <div className="mx-auto p-6">
      <Link
        to="/app/paramedic/inventory"
        className="flex items-center text-[#1e3a5c] hover:underline"
      >
        <ArrowLeft className="w-4 h-4 mr-1" />
        Back to Inventory
      </Link>
      <h1 className="text-3xl font-bold mt-2">Medicine Details</h1>

      <Card className="mt-4 p-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <Pill className="size-8 p-2 text-blue-500 bg-blue-100 rounded-full" />
              {state.name}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="font-semibold text-xl">Basic Information</h3>
            <div className="flex items-center gap-2 mt-2">
              <div className="rounded-full overflow-hidden">
                <Pill className="size-8 p-2 text-blue-500 bg-blue-100" />
              </div>
              Medicine Name: <span>{state.name}</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <div className="rounded-full overflow-hidden">
                <Factory className="size-8 p-2 text-purple-500 bg-purple-100" />
              </div>
              Manufacturer: <span>{state.company}</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <div className="rounded-full overflow-hidden">
                <Barcode className="size-8 p-2 text-yellow-500 bg-yellow-100" />
              </div>
              Batch Number:
              <span>{state.batch_no}</span>
            </div>
            <div className="font-medium flex items-center gap-2 mt-2">
              <div className="rounded-full overflow-hidden">
                <Tag className="size-8 p-2 text-green-500 bg-green-100" />
              </div>
              Price: Rs. {state.price}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-xl">Inventory & Dates</h3>
            <div className="flex items-center gap-2 mt-2">
              <div className="rounded-full overflow-hidden">
                <Boxes className="size-8 p-2 text-indigo-500 bg-indigo-100" />
              </div>
              Quantity in Stock: <span>{state.quantity}</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <div className="rounded-full overflow-hidden">
                <Calendar className="size-8 p-2 text-blue-500 bg-blue-100" />
              </div>
              Manufacturing Date:
              <span>{moment(state.mfg_date).format("DD-MM-YYYY")}</span>
            </div>
            <div
              className={`flex items-center gap-2 mt-2 ${
                isExpiringSoon(state.expiry_date) &&
                "text-red-600 font-semibold"
              }`}
            >
              <div className="rounded-full overflow-hidden">
                <Hourglass className="size-8 p-2 text-red-500 bg-red-100" />
              </div>
              Expiry Date:
              <span>{moment(state.expiry_date).format("DD-MM-YYYY")}</span>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold text-xl">Description</h3>
          <p className=" text-gray-600 p-4 bg-gray-100 rounded-lg flex items-start gap-2 mt-2">
            <FileText className="w-5 h-5 text-gray-500 mt-0.5" />
            {state.description}
          </p>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold text-xl">Update Details</h3>
          <div className="p-4 bg-gray-100 rounded-lg flex items-start gap-2 mt-2">
            <form onSubmit={handleSubmit} className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <Label htmlFor="batch_no">Batch Number</Label>
                    <Input
                      id="batch_no"
                      name="batch_no"
                      required
                      value={formData.batch_no}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <Label htmlFor="price">Price</Label>
                    <Input
                      id="price"
                      name="price"
                      type="number"
                      required
                      value={formData.price}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <Label htmlFor="expiry_date">Expiry Date</Label>
                    <Input
                      id="expiry_date"
                      name="expiry_date"
                      type="date"
                      required
                      value={formData.expiry_date}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <Label htmlFor="desciption">Desciption</Label>
                    <Input
                      id="desciption"
                      name="desciption"
                      required
                      value={formData.desciption}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <Label htmlFor="quantity">Quantity</Label>
                    <Input
                      id="quantity"
                      name="quantity"
                      type="number"
                      required
                      value={formData.quantity}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <Label htmlFor="mfg_date">Manufacturing Date</Label>
                    <Input
                      id="mfg_date"
                      name="mfg_date"
                      type="date"
                      required
                      value={formData.mfg_date}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-4 my-8">
                <Button>Save Details</Button>
              </div>
            </form>
          </div>
        </div>
      </Card>
    </div>
  );
}

function isExpiringSoon(date: Date): boolean {
  const now = new Date();
  const sixMonthsFromNow = new Date();
  sixMonthsFromNow.setMonth(now.getMonth() + 6);

  return date <= sixMonthsFromNow;
}
