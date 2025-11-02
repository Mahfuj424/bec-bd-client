"use client";

import { FormData } from "@/app/become-a-member/formConfig";
import { useFormContext, Controller } from "react-hook-form";
import { FiX } from "react-icons/fi";

export default function ProfessionalForm() {
  const { control } = useFormContext<FormData>();

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium">Professional Experience</h3>

      <Controller
        name="professionalEntries"
        control={control}
        defaultValue={[{ company: "", position: "", duration: "" }]}
        render={({ field }) => (
          <>
            {field.value.map((entry, index) => (
              <div
                key={index}
                className="space-y-4 p-4 border border-gray-200 rounded-md relative"
              >
                {/* ✕ Remove Button */}
                {field.value.length > 1 && (
                  <button
                    type="button"
                    onClick={() => {
                      const updatedEntries = field.value.filter(
                        (_, i) => i !== index
                      );
                      field.onChange(updatedEntries);
                    }}
                    className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                    title="Remove"
                  >
                    <FiX size={18} />
                  </button>
                )}

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
                    onChange={(e) => {
                      const updatedEntries = [...field.value];
                      updatedEntries[index] = {
                        ...updatedEntries[index],
                        company: e.target.value,
                      };
                      field.onChange(updatedEntries);
                    }}
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
                      onChange={(e) => {
                        const updatedEntries = [...field.value];
                        updatedEntries[index] = {
                          ...updatedEntries[index],
                          position: e.target.value,
                        };
                        field.onChange(updatedEntries);
                      }}
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
                      onChange={(e) => {
                        const updatedEntries = [...field.value];
                        updatedEntries[index] = {
                          ...updatedEntries[index],
                          duration: e.target.value,
                        };
                        field.onChange(updatedEntries);
                      }}
                      placeholder="e.g., 2020–Present"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={() =>
                field.onChange([
                  ...field.value,
                  { company: "", position: "", duration: "" },
                ])
              }
              className="w-full py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add Another Professional Entry
            </button>
          </>
        )}
      />
    </div>
  );
}
