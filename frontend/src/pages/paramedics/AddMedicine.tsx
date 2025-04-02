import { useState } from "react";
import Button from "@/components/Button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Access from "../common/access";

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

export function AddMedicine() {
  const [formData, setFormData] = useState<MedicineFormData>(initialFormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const clearForm = () => {
    setFormData(initialFormData);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
    clearForm();
  };

  return (
    <Access text={["paramedic"]}>
      <div className="p-6 bg-zinc-100 h-full">
        <h1 className="text-4xl font-semibold mb-6 pl-5">Add Medicine</h1>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <Label htmlFor="batch_no">Batch Number</Label>
                  <Input
                    id="batch_no"
                    name="batch_no"
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
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <Label htmlFor="desciption">Desciption</Label>
                  <Input
                    id="desciption"
                    name="desciption"
                    type="number"
                    value={formData.desciption}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <Label htmlFor="quantity">Quantity</Label>
                  <Input
                    id="quantity"
                    name="quantity"
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
    </Access>
  );
}
