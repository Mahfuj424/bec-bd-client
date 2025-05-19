/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import type { ChangeEvent } from "react";
import Image from "next/image";

interface PersonalInfoFormProps {
  formData: any;
  updateFormData: (field: string, value: any) => void;
  handleNidChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isNidValid: boolean;
  handlePhotoChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function PersonalInfoForm({
  formData,
  updateFormData,
  handleNidChange,
  isNidValid,
  handlePhotoChange,
}: PersonalInfoFormProps) {
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
            value={formData.fullName}
            onChange={(e) => updateFormData("fullName", e.target.value)}
            placeholder="Enter your full name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
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
              {formData.photoPreview ? (
                <Image
                  src={formData.photoPreview || "/placeholder.svg"}
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
              onChange={handlePhotoChange}
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
            value={formData.fatherName}
            onChange={(e) => updateFormData("fatherName", e.target.value)}
            placeholder="Enter your father's name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
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
            value={formData.motherName}
            onChange={(e) => updateFormData("motherName", e.target.value)}
            placeholder="Enter your mother's name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
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
            value={formData.dateOfBirth}
            onChange={(e) => updateFormData("dateOfBirth", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
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
            value={formData.nationality}
            onChange={(e) => updateFormData("nationality", e.target.value)}
            placeholder="Enter your nationality"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
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
          value={formData.address}
          onChange={(e) => updateFormData("address", e.target.value)}
          placeholder="Enter your full address"
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
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
            value={formData.mobile}
            onChange={(e) => updateFormData("mobile", e.target.value)}
            placeholder="Enter your mobile number"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
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
            value={formData.email}
            onChange={(e) => updateFormData("email", e.target.value)}
            placeholder="Enter your email address"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
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
            value={formData.bloodGroup}
            onChange={(e) => updateFormData("bloodGroup", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            value={formData.gender}
            onChange={(e) => updateFormData("gender", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
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
            value={formData.nidPassport}
            onChange={handleNidChange}
            placeholder="Enter NID or Passport number"
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              !isNidValid ? "border-red-500" : "border-gray-300"
            }`}
          />
          {!isNidValid && (
            <p className="text-xs text-red-500 mt-1">
              Please enter a valid NID/Passport number (at least 10 digits)
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
          value={formData.emergencyContact}
          onChange={(e) => updateFormData("emergencyContact", e.target.value)}
          placeholder="Enter emergency contact number"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}
