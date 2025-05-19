/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { FaTrash } from "react-icons/fa";
import type { ProfessionalEntry } from "@/app/become-a-member/page";

interface ProfessionalFormProps {
  formData: {
    professionalEntries: ProfessionalEntry[];
    [key: string]: any;
  };
  updateFormData: (field: string, value: any) => void;
}

export default function ProfessionalForm({
  formData,
  updateFormData,
}: ProfessionalFormProps) {
  const addProfessionalEntry = () => {
    updateFormData("professionalEntries", [
      ...formData.professionalEntries,
      { company: "", position: "", duration: "" },
    ]);
  };

  const updateProfessionalEntry = (
    index: number,
    field: keyof ProfessionalEntry,
    value: string
  ) => {
    const updatedEntries = [...formData.professionalEntries];
    updatedEntries[index] = { ...updatedEntries[index], [field]: value };
    updateFormData("professionalEntries", updatedEntries);
  };

  const removeProfessionalEntry = (index: number) => {
    if (formData.professionalEntries.length > 1) {
      const updatedEntries = [...formData.professionalEntries];
      updatedEntries.splice(index, 1);
      updateFormData("professionalEntries", updatedEntries);
    }
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium">Professional Experience</h3>

      {formData.professionalEntries.map((entry, index) => (
        <div
          key={index}
          className="space-y-4 p-4 border border-gray-200 rounded-md"
        >
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-medium text-sm">Experience #{index + 1}</h4>
            {formData.professionalEntries.length > 1 && (
              <button
                type="button"
                onClick={() => removeProfessionalEntry(index)}
                className="text-red-500 hover:text-red-700 flex items-center gap-1 text-sm"
              >
                <FaTrash size={14} /> Remove
              </button>
            )}
          </div>

          <div className="space-y-2">
            <label
              htmlFor={`company-${index}`}
              className="block text-sm font-medium text-gray-700"
            >
              Company/Organization
            </label>
            <input
              id={`company-${index}`}
              type="text"
              value={entry.company}
              onChange={(e) =>
                updateProfessionalEntry(index, "company", e.target.value)
              }
              placeholder="Enter company name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label
                htmlFor={`position-${index}`}
                className="block text-sm font-medium text-gray-700"
              >
                Position/Designation
              </label>
              <input
                id={`position-${index}`}
                type="text"
                value={entry.position}
                onChange={(e) =>
                  updateProfessionalEntry(index, "position", e.target.value)
                }
                placeholder="e.g., Software Engineer"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor={`duration-${index}`}
                className="block text-sm font-medium text-gray-700"
              >
                Duration
              </label>
              <input
                id={`duration-${index}`}
                type="text"
                value={entry.duration}
                onChange={(e) =>
                  updateProfessionalEntry(index, "duration", e.target.value)
                }
                placeholder="e.g., 2020-Present"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={addProfessionalEntry}
        className="w-full py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Add Another Professional Entry
      </button>
    </div>
  );
}
