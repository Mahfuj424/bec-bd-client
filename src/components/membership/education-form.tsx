"use client";

import { useFormContext, Controller } from "react-hook-form";
import type { FormData } from "@/app/become-a-member/page";

export default function EducationForm() {
  const { control } = useFormContext<FormData>();

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium">Educational Background</h3>

      <Controller
        name="educationEntries"
        control={control}
        defaultValue={[
          {
            degree: "",
            university: "",
            passingYear: "",
            result: "",
            certificate: null,
          },
        ]}
        render={({ field }) => (
          <>
            {field.value.map((entry, index) => (
              <div
                key={index}
                className="space-y-4 p-4 border border-gray-200 rounded-md relative"
              >
                {/* Remove Entry */}
                {field.value.length > 1 && (
                  <button
                    type="button"
                    onClick={() => {
                      const updatedEntries = field.value.filter(
                        (_, i) => i !== index
                      );
                      field.onChange(updatedEntries);
                    }}
                    className="absolute top-2 right-2 text-red-500 text-sm"
                  >
                    ✕
                  </button>
                )}

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
                      onChange={(e) => {
                        const updatedEntries = [...field.value];
                        updatedEntries[index].degree = e.target.value;
                        field.onChange(updatedEntries);
                      }}
                      placeholder="e.g., BSc in Engineering"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
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
                      onChange={(e) => {
                        const updatedEntries = [...field.value];
                        updatedEntries[index].university = e.target.value;
                        field.onChange(updatedEntries);
                      }}
                      placeholder="Enter institution name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
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
                      onChange={(e) => {
                        const updatedEntries = [...field.value];
                        updatedEntries[index].passingYear = e.target.value;
                        field.onChange(updatedEntries);
                      }}
                      placeholder="e.g., 2022"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
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
                      onChange={(e) => {
                        const updatedEntries = [...field.value];
                        updatedEntries[index].result = e.target.value;
                        field.onChange(updatedEntries);
                      }}
                      placeholder="Enter your result"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                {/* Certificate Upload */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Upload Certificate
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      const updatedEntries = [...field.value];
                      updatedEntries[index].certificate = file || null;
                      field.onChange(updatedEntries);
                    }}
                  />
                </div>
              </div>
            ))}

            {/* Add More Button */}
            <button
              type="button"
              onClick={() => {
                field.onChange([
                  ...field.value,
                  {
                    degree: "",
                    university: "",
                    passingYear: "",
                    result: "",
                    certificate: null,
                  },
                ]);
              }}
              className="w-full py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Add Another Education Entry
            </button>
          </>
        )}
      />
    </div>
  );
}
