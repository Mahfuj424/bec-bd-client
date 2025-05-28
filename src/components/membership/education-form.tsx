"use client";

import { useFormContext, Controller } from "react-hook-form";
import type { FormData } from "@/app/become-a-member/page";
import Link from "next/link";

const IMGBB_API_KEY = "2696fe7faa1168ada1e00b4cdb7bd8ea"; // 🔁 Replace with your actual API key

export default function EducationForm() {
  const { control } = useFormContext<FormData>();

  // Image uploader to imgbb
  const uploadToImgBB = async (file: File): Promise<string | null> => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await fetch(
        `https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();
      return data?.data?.url || null;
    } catch (error) {
      console.error("Image upload failed", error);
      return null;
    }
  };

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
            certificate: "",
          },
        ]}
        render={({ field }) => (
          <>
            {field.value.map((entry, index) => (
              <div
                key={index}
                className="space-y-4 p-4 border border-gray-200 rounded-md relative"
              >
                {/* Remove Button */}
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

                {/* Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Degree/Certificate
                    </label>
                    <input
                      type="text"
                      value={entry.degree}
                      onChange={(e) => {
                        const updated = [...field.value];
                        updated[index].degree = e.target.value;
                        field.onChange(updated);
                      }}
                      placeholder="e.g., BSc in Engineering"
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Board/University
                    </label>
                    <input
                      type="text"
                      value={entry.university}
                      onChange={(e) => {
                        const updated = [...field.value];
                        updated[index].university = e.target.value;
                        field.onChange(updated);
                      }}
                      placeholder="Institution Name"
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Passing Year</label>
                    <input
                      type="text"
                      value={entry.passingYear}
                      onChange={(e) => {
                        const updated = [...field.value];
                        updated[index].passingYear = e.target.value;
                        field.onChange(updated);
                      }}
                      placeholder="e.g., 2022"
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Result/GPA</label>
                    <input
                      type="text"
                      value={entry.result}
                      onChange={(e) => {
                        const updated = [...field.value];
                        updated[index].result = e.target.value;
                        field.onChange(updated);
                      }}
                      placeholder="e.g., 3.75"
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                </div>

                {/* Certificate Upload */}
                <div className="space-y-2">
                  <label className="text-sm font-medium pe-2">
                    Certificate
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    className="ps-3 border-dashed border rounded-lg cursor-pointer"
                    onChange={async (e) => {
                      const file = e.target.files?.[0];
                      if (!file) return;

                      const url = await uploadToImgBB(file);
                      if (url) {
                        const updated = [...field.value];
                        updated[index].certificate = url;
                        field.onChange(updated);
                      }
                    }}
                  />
                  {entry.certificate && (
                    <p className="text-sm text-green-600">
                      Uploaded:{" "}
                      <Link
                        href={entry.certificate}
                        target="_blank"
                        className="underline"
                      >
                        view certificate
                      </Link>
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* Add More */}
            <button
              type="button"
              onClick={() =>
                field.onChange([
                  ...field.value,
                  {
                    degree: "",
                    university: "",
                    passingYear: "",
                    result: "",
                    certificate: "",
                  },
                ])
              }
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
