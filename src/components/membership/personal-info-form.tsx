/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import { useFormContext } from "react-hook-form";
import Image from "next/image";
import type { FormData } from "@/app/become-a-member/page";

export default function PersonalInfoForm() {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext<FormData>();
  const [photoPreview, setPhotoPreview] = useState<string>("");

  // Watch the photo field to create preview
  const photoField = watch("photo");

  // Create preview when photo changes
  if (photoField && photoField[0] && !photoPreview) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setPhotoPreview(reader.result as string);
    };
    reader.readAsDataURL(photoField[0]);
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2 md:col-span-2">
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            {...register("fullName", { required: "Full name is required" })}
            placeholder="Enter your full name"
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.fullName ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.fullName && (
            <p className="text-xs text-red-500 mt-1">
              {errors.fullName.message}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <label
            htmlFor="photo"
            className="block text-sm font-medium text-gray-700"
          >
            Photo (A4 Size)
          </label>
          <div className="flex flex-col items-center">
            <div className="w-32 h-40 border border-gray-300 rounded-md overflow-hidden mb-2 flex items-center justify-center bg-gray-50">
              {photoPreview ? (
                <Image
                  src={photoPreview || "/placeholder.svg"}
                  alt="Profile Preview"
                  width={128}
                  height={160}
                  className="object-cover w-full h-full"
                />
              ) : (
                <span className="text-xs text-gray-500 text-center p-2">
                  Upload A4 size photo
                </span>
              )}
            </div>
            <input
              id="photo"
              type="file"
              accept="image/*"
              {...register("photo")}
              className="w-full text-xs"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label
            htmlFor="fatherName"
            className="block text-sm font-medium text-gray-700"
          >
            Father's Name
          </label>
          <input
            id="fatherName"
            type="text"
            {...register("fatherName", {
              required: "Father's name is required",
            })}
            placeholder="Enter your father's name"
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.fatherName ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.fatherName && (
            <p className="text-xs text-red-500 mt-1">
              {errors.fatherName.message}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <label
            htmlFor="motherName"
            className="block text-sm font-medium text-gray-700"
          >
            Mother's Name
          </label>
          <input
            id="motherName"
            type="text"
            {...register("motherName", {
              required: "Mother's name is required",
            })}
            placeholder="Enter your mother's name"
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.motherName ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.motherName && (
            <p className="text-xs text-red-500 mt-1">
              {errors.motherName.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label
            htmlFor="dateOfBirth"
            className="block text-sm font-medium text-gray-700"
          >
            Date of Birth
          </label>
          <input
            id="dateOfBirth"
            type="date"
            {...register("dateOfBirth", {
              required: "Date of birth is required",
            })}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.dateOfBirth ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.dateOfBirth && (
            <p className="text-xs text-red-500 mt-1">
              {errors.dateOfBirth.message}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <label
            htmlFor="nationality"
            className="block text-sm font-medium text-gray-700"
          >
            Nationality
          </label>
          <input
            id="nationality"
            type="text"
            {...register("nationality", {
              required: "Nationality is required",
            })}
            placeholder="Enter your nationality"
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.nationality ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.nationality && (
            <p className="text-xs text-red-500 mt-1">
              {errors.nationality.message}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="address"
          className="block text-sm font-medium text-gray-700"
        >
          Address
        </label>
        <textarea
          id="address"
          {...register("address", { required: "Address is required" })}
          placeholder="Enter your full address"
          rows={3}
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.address ? "border-red-500" : "border-gray-300"
          }`}
        ></textarea>
        {errors.address && (
          <p className="text-xs text-red-500 mt-1">{errors.address.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label
            htmlFor="mobile"
            className="block text-sm font-medium text-gray-700"
          >
            Mobile Number
          </label>
          <input
            id="mobile"
            type="text"
            {...register("mobile", {
              required: "Mobile number is required",
              pattern: {
                value: /^[0-9]{11}$/,
                message: "Please enter a valid 11-digit mobile number",
              },
            })}
            placeholder="Enter your mobile number"
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.mobile ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.mobile && (
            <p className="text-xs text-red-500 mt-1">{errors.mobile.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please enter a valid email address",
              },
            })}
            placeholder="Enter your email address"
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <label
            htmlFor="bloodGroup"
            className="block text-sm font-medium text-gray-700"
          >
            Blood Group
          </label>
          <select
            id="bloodGroup"
            {...register("bloodGroup", { required: "Blood group is required" })}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.bloodGroup ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Select blood group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
          {errors.bloodGroup && (
            <p className="text-xs text-red-500 mt-1">
              {errors.bloodGroup.message}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <label
            htmlFor="gender"
            className="block text-sm font-medium text-gray-700"
          >
            Gender
          </label>
          <select
            id="gender"
            {...register("gender", { required: "Gender is required" })}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.gender ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && (
            <p className="text-xs text-red-500 mt-1">{errors.gender.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <label
            htmlFor="nidPassport"
            className="block text-sm font-medium text-gray-700"
          >
            NID/Passport No.
          </label>
          <input
            id="nidPassport"
            type="text"
            {...register("nidPassport", {
              required: "NID/Passport number is required",
              minLength: {
                value: 10,
                message: "NID/Passport number must be at least 10 characters",
              },
            })}
            placeholder="Enter NID or Passport number"
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.nidPassport ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.nidPassport && (
            <p className="text-xs text-red-500 mt-1">
              {errors.nidPassport.message}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="emergencyContact"
          className="block text-sm font-medium text-gray-700"
        >
          Emergency Contact
        </label>
        <input
          id="emergencyContact"
          type="text"
          {...register("emergencyContact", {
            required: "Emergency contact is required",
          })}
          placeholder="Enter emergency contact number"
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.emergencyContact ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.emergencyContact && (
          <p className="text-xs text-red-500 mt-1">
            {errors.emergencyContact.message}
          </p>
        )}
      </div>
    </div>
  );
}
