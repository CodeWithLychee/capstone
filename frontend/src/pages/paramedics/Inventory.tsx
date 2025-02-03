"use client"

import { useState } from "react"
import Button from "@/components/Button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface MedicineFormData {
  name: string
  brand: string
  type: string
  expiryDate: string
  mrp: string
  potency: string
  stock: string
  batchNumber: string
  manufacturingDate: string
}

const initialFormData: MedicineFormData = {
  name: "",
  brand: "",
  type: "",
  expiryDate: "",
  mrp: "",
  potency: "",
  stock: "",
  batchNumber: "",
  manufacturingDate: "",
}

export function InventoryForm() {
  const [formData, setFormData] = useState<MedicineFormData>(initialFormData)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Add your form submission logic here
  }

  const handleClear = () => {
    setFormData(initialFormData)
  }


  return (
    <div className="p-6 bg-zinc-100 h-full">
      <h1 className="text-4xl font-semibold mb-6 pl-5">Patient Prescription</h1>
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Add Medicines</h2>
        <div className="flex gap-2 text-sm">
          <span className="text-gray-600">Clinic</span>
          <span className="text-gray-400">|</span>
          <span className="text-gray-600">Pharmacy</span>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" value={formData.name} onChange={handleChange} />
            </div>

            <div>
              <Label htmlFor="brand">Brand</Label>
              <Input id="brand" name="brand" value={formData.brand} onChange={handleChange} />
            </div>

            <div>
              <Label htmlFor="type">Type</Label>
              <Input id="type" name="type" value={formData.type} onChange={handleChange} />
            </div>

            <div>
              <Label htmlFor="expiryDate">Expiry Date</Label>
              <Input
                id="expiryDate"
                name="expiryDate"
                type="date"
                value={formData.expiryDate}
                onChange={handleChange}
              />
            </div>

            <div>
              <Label htmlFor="mrp">MRP</Label>
              <Input id="mrp" name="mrp" type="number" value={formData.mrp} onChange={handleChange} />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="potency">Potency</Label>
              <Input id="potency" name="potency" value={formData.potency} onChange={handleChange} />
            </div>

            <div>
              <Label htmlFor="stock">Stock</Label>
              <Input id="stock" name="stock" type="number" value={formData.stock} onChange={handleChange} />
            </div>

            <div>
              <Label htmlFor="batchNumber">Batch Number</Label>
              <Input id="batchNumber" name="batchNumber" value={formData.batchNumber} onChange={handleChange} />
            </div>

            <div>
              <Label htmlFor="manufacturingDate">Manufacturing Date</Label>
              <Input
                id="manufacturingDate"
                name="manufacturingDate"
                type="date"
                value={formData.manufacturingDate}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-8">
            <div onClick={handleClear}><Button >
            Clear
          </Button></div>
          
          <Button>
            Save Details
          </Button>
        </div>
      </form>
    </div>
    </div>
  )
}

