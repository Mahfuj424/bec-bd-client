/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { FaTrash } from "react-icons/fa";
import type { EducationEntry } from "@/app/become-a-member/page";

interface EducationFormProps {
  formData: {
    educationEntries: EducationEntry[];
    [key: string]: any;
  };
  updateFormData: (field: string, value: any) => void;
}

export default function EducationForm({
  formData,
  updateFormData,
}: EducationFormProps) {
  const addEducationEntry = () => {
    updateFormData("educationEntries", [
      ...formData.educationEntries,
      {
        degree: "",
        university: "",
        passingYear: "",
        result: "",
        certificate: null,
      },
    ]);
  };

  const updateEducationEntry = (
    index: number,
    field: keyof EducationEntry,
    value: string
  ) => {
    const updatedEntries = [...formData.educationEntries];
    updatedEntries[index] = { ...updatedEntries[index], [field]: value };
    updateFormData("educationEntries", updatedEntries);
  };

  const removeEducationEntry = (index: number) => {
    if (formData.educationEntries.length > 1) {
      const updatedEntries = [...formData.educationEntries];
      updatedEntries.splice(index, 1);
      updateFormData("educationEntries", updatedEntries);
    }
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium">Educational Background</h3>

      {formData.educationEntries.map((entry, index) => (
        <div
          key={index}
          className="space-y-4 p-4 border border-gray-200 rounded-md"
        >
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-medium text-sm">Education #{index + 1}</h4>
            {formData.educationEntries.length > 1 && (
              <button
                type="button"
                onClick={() => removeEducationEntry(index)}
                className="text-red-500 hover:text-red-700 flex items-center gap-1 text-sm"
              >
                <FaTrash size={14} /> Remove
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label
                htmlFor={`degree-${index}`}
                className="block text-sm font-medium text-gray-700"
              >
                Degree/Certificate
              </label>
              <input
                id={`degree-${index}`}
                type="text"
                value={entry.degree}
                onChange={(e) =>
                  updateEducationEntry(index, "degree", e.target.value)
                }
                placeholder="e.g., BSc in Engineering"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor={`university-${index}`}
                className="block text-sm font-medium text-gray-700"
              >
                Board/University
              </label>
              <input
                id={`university-${index}`}
                type="text"
                value={entry.university}
                onChange={(e) =>
                  updateEducationEntry(index, "university", e.target.value)
                }
                placeholder="Enter institution name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label
                htmlFor={`passingYear-${index}`}
                className="block text-sm font-medium text-gray-700"
              >
                Passing Year
              </label>
              <input
                id={`passingYear-${index}`}
                type="text"
                value={entry.passingYear}
                onChange={(e) =>
                  updateEducationEntry(index, "passingYear", e.target.value)
                }
                placeholder="e.g., 2022"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor={`result-${index}`}
                className="block text-sm font-medium text-gray-700"
              >
                Result/GPA
              </label>
              <input
                id={`result-${index}`}
                type="text"
                value={entry.result}
                onChange={(e) =>
                  updateEducationEntry(index, "result", e.target.value)
                }
                placeholder="Enter your result"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={addEducationEntry}
        className="w-full py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Add Another Education Entry
      </button>
    </div>
  );
}
