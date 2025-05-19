/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import type { ChangeEvent } from "react";
import Image from "next/image";
import type { ProposedBy } from "@/app/become-a-member/page";

interface MembershipTypeFormProps {
  formData: {
    membershipType: string;
    proposedBy: ProposedBy;
    signatureImage: FileList | null;
    signaturePreview: string;
    signatureDate: string;
    [key: string]: any;
  };
  updateFormData: (field: string, value: any) => void;
  handleSignatureChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function MembershipTypeForm({
  formData,
  updateFormData,
  handleSignatureChange,
}: MembershipTypeFormProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium">Membership Category</h3>

      <div className="space-y-4">
        <div className="flex items-center space-x-2 p-4 border border-gray-200 rounded-md">
          <input
            type="radio"
            id="regular"
            name="membershipType"
            value="regular"
            checked={formData.membershipType === "regular"}
            onChange={(e) => updateFormData("membershipType", e.target.value)}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
          />
          <label htmlFor="regular" className="flex-1">
            <div className="font-medium">Regular Member</div>
            <div className="text-sm text-gray-500">
              For professionals (24 and above)
            </div>
            <div className="text-sm font-semibold mt-1">Fee: 1000 BDT</div>
          </label>
        </div>

        <div className="flex items-center space-x-2 p-4 border border-gray-200 rounded-md">
          <input
            type="radio"
            id="student"
            name="membershipType"
            value="student"
            checked={formData.membershipType === "student"}
            onChange={(e) => updateFormData("membershipType", e.target.value)}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
          />
          <label htmlFor="student" className="flex-1">
            <div className="font-medium">Student Member</div>
            <div className="text-sm text-gray-500">
              For students (23 and below)
            </div>
            <div className="text-sm font-semibold mt-1">Fee: 500 BDT</div>
          </label>
        </div>

        <div className="flex items-center space-x-2 p-4 border border-gray-200 rounded-md">
          <input
            type="radio"
            id="corporate"
            name="membershipType"
            value="corporate"
            checked={formData.membershipType === "corporate"}
            onChange={(e) => updateFormData("membershipType", e.target.value)}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
          />
          <label htmlFor="corporate" className="flex-1">
            <div className="font-medium">Corporate Member</div>
            <div className="text-sm text-gray-500">
              For organizations and companies
            </div>
            <div className="text-sm font-semibold mt-1">Fee: 5000 BDT</div>
          </label>
        </div>
      </div>

      {(formData.membershipType === "regular" ||
        formData.membershipType === "corporate") && (
        <div className="mt-6 space-y-4 p-4 border border-gray-200 rounded-md">
          <h4 className="font-medium">
            Proposed By (For Regular & Corporate Members)
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label
                htmlFor="proposerName"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                id="proposerName"
                type="text"
                value={formData.proposedBy.name}
                onChange={(e) =>
                  updateFormData("proposedBy", {
                    ...formData.proposedBy,
                    name: e.target.value,
                  })
                }
                placeholder="Enter proposer's name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="proposerMembershipNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Membership Number
              </label>
              <input
                id="proposerMembershipNumber"
                type="text"
                value={formData.proposedBy.membershipNumber}
                onChange={(e) =>
                  updateFormData("proposedBy", {
                    ...formData.proposedBy,
                    membershipNumber: e.target.value,
                  })
                }
                placeholder="Enter proposer's membership number"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      )}

      <div className="mt-6 space-y-4 p-4 border border-gray-200 rounded-md">
        <h4 className="font-medium">Declaration</h4>
        <p className="text-sm">
          I declare that the information provided above is true and correct. I
          hereby apply for membership of the Young Engineering Society (YES) and
          if elected, I will abide by the rules and regulations of the society.
        </p>
        <div className="mt-4">
          <label
            htmlFor="signature"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Signature
          </label>
          <div className="space-y-2">
            <div className="w-32 h-20 border border-gray-300 rounded-md overflow-hidden mb-2 flex items-center justify-center bg-gray-50">
              {formData.signaturePreview ? (
                <Image
                  src={formData.signaturePreview || "/placeholder.svg"}
                  alt="Signature Preview"
                  width={128}
                  height={80}
                  className="object-contain w-full h-full"
                />
              ) : (
                <span className="text-xs text-gray-500 text-center p-2">
                  Upload signature image
                </span>
              )}
            </div>
            <input
              id="signature"
              type="file"
              accept="image/*"
              onChange={handleSignatureChange}
              className="w-full text-xs"
            />
          </div>
        </div>
        <div className="mt-2">
          <label
            htmlFor="date"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Date
          </label>
          <input
            id="date"
            type="date"
            value={formData.signatureDate || ""}
            onChange={(e) => updateFormData("signatureDate", e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 max-w-xs"
          />
        </div>
      </div>
    </div>
  );
}
