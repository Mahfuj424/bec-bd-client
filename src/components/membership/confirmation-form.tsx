"use client";

import { useFormContext } from "react-hook-form";
import type { FormData } from "@/app/become-a-member/page";

export default function ConfirmationForm() {
  const { watch } = useFormContext<FormData>();
  const formData = watch();

  return (
    <div className="space-y-6">
      <div className="p-4 bg-green-50 rounded-md text-center">
        <h3 className="text-lg font-medium text-green-700">
          Review Your Application
        </h3>
        <p className="text-sm text-green-600 mt-2">
          Please review your information below and click Submit Application to
          complete the process.
        </p>
      </div>

      <div className="border border-gray-200 rounded-md p-4">
        <h4 className="font-medium mb-2">Personal Information</h4>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-500">Name:</span>
            <span className="font-medium">{formData.fullName}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Email:</span>
            <span className="font-medium">{formData.email}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Mobile:</span>
            <span className="font-medium">{formData.mobile}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Blood Group:</span>
            <span className="font-medium">{formData.bloodGroup}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">NID/Passport:</span>
            <span className="font-medium">{formData.nidPassport}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Gender:</span>
            <span className="font-medium capitalize">{formData.gender}</span>
          </div>
        </div>
      </div>

      <div className="border border-gray-200 rounded-md p-4">
        <h4 className="font-medium mb-2">Membership Details</h4>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-500">Membership Type:</span>
            <span className="font-medium capitalize">
              {formData.membershipType}
            </span>
          </div>
          {(formData.membershipType === "regular" ||
            formData.membershipType === "corporate") && (
            <>
              <div className="flex justify-between">
                <span className="text-gray-500">
                  Proposer Membership Number:
                </span>
                <span className="font-medium">
                  {formData.proposedBy.membershipNumber}
                </span>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="border border-gray-200 rounded-md p-4">
        <h4 className="font-medium mb-2">Payment Information</h4>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-500">Payment Method:</span>
            <span className="font-medium capitalize">
              {formData.paymentMethod}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Transaction ID:</span>
            <span className="font-medium">{formData.transactionId}</span>
          </div>
        </div>
      </div>

      <div className="p-4 border border-gray-200 rounded-md">
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="confirmDeclaration"
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label
            htmlFor="confirmDeclaration"
            className="ml-2 block text-sm text-gray-700"
          >
            I confirm that all the information provided is correct and I agree
            to the terms and conditions of the Young Engineering Society.
          </label>
        </div>
      </div>
    </div>
  );
}
