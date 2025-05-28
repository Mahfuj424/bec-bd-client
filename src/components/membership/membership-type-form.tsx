"use client";

import { useFormContext } from "react-hook-form";
import type { FormData } from "@/app/become-a-member/page";
import { useState } from "react";
import { uploadToImgbb } from "@/utils/UploadImages";

export default function MembershipTypeForm() {
  const {
    register,
    setValue,
    formState: { errors },
    watch,
  } = useFormContext<FormData>();
  const membershipType = watch("membershipType");

  const [uploading, setUploading] = useState(false);
  const signatureUrl = watch("signatureUrl");

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const imageUrl = await uploadToImgbb(file);
      setValue("signatureUrl", imageUrl);
    } catch (error) {
      alert("Failed to upload image. Try again.");
      console.error(error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium">Membership Category</h3>

      <div className="space-y-4">
        {["fellow", "regular", "student"].map((type) => (
          <div
            key={type}
            className="flex items-center space-x-2 p-4 border border-gray-200 rounded-md"
          >
            <input
              type="radio"
              id={type}
              value={type}
              {...register("membershipType", {
                required: "Please select a membership type",
              })}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
            />
            <label htmlFor={type} className="flex-1">
              <div className="font-medium capitalize">{type} Member</div>
              <div className="text-sm text-gray-500">
                {type === "fellow"
                  ? "For senior professionals (Age 37+)"
                  : type === "regular"
                  ? "For professionals (Age 27+)"
                  : "For students (Below 27)"}
              </div>
              <div className="text-sm font-semibold mt-1">Fee: 500 BDT</div>
            </label>
          </div>
        ))}
      </div>

      {errors.membershipType && (
        <p className="text-xs text-red-500 mt-1">
          {errors.membershipType.message}
        </p>
      )}

      {(membershipType === "regular" || membershipType === "fellow") && (
        <div className="mt-6 space-y-4 p-4 border border-gray-200 rounded-md">
          <h4 className="font-medium">IEB Membership (Optional)</h4>
          <div className="space-y-2">
            <label
              htmlFor="proposedBy.membershipNumber"
              className="block text-sm font-medium text-gray-700"
            >
              IEB Membership Number
            </label>
            <input
              id="proposedBy.membershipNumber"
              type="text"
              {...register("membershipNumber")}
              placeholder="Enter if applicable"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.membershipNumber ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.membershipNumber && (
              <p className="text-xs text-red-500 mt-1">
                {errors.membershipNumber.message}
              </p>
            )}
          </div>
        </div>
      )}

      <div className="mt-6 space-y-4 p-4 border border-gray-200 rounded-md">
        <h4 className="font-medium">Declaration</h4>
        <p className="text-sm">
          I declare that the information provided above is true and correct...
        </p>
        <div className="mt-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Signature
          </label>

          {signatureUrl ? (
            <img
              src={signatureUrl}
              alt="Signature Preview"
              className="h-20 rounded-md border border-gray-300 object-contain"
            />
          ) : (
            <div className="h-20 border border-dashed border-gray-300 rounded-md flex items-center justify-center bg-gray-50 text-gray-500 text-sm">
              {uploading ? "Uploading..." : "Please upload your signature"}
            </div>
          )}

          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="mt-2 block text-sm text-gray-700 ps-3 border-dashed border rounded-lg cursor-pointer"
          />
          {errors.signatureUrl && (
            <p className="text-xs text-red-500 mt-1">
              {errors.signatureUrl.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
