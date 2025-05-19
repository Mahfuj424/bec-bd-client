"use client";

import { useFormContext } from "react-hook-form";
import type { FormData } from "@/app/become-a-member/page";

export default function MembershipTypeForm() {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext<FormData>();
  const membershipType = watch("membershipType");

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium">Membership Category</h3>

      <div className="space-y-4">
        <div className="flex items-center space-x-2 p-4 border border-gray-200 rounded-md">
          <input
            type="radio"
            id="regular"
            value="regular"
            {...register("membershipType", {
              required: "Please select a membership type",
            })}
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
            value="student"
            {...register("membershipType")}
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
            value="corporate"
            {...register("membershipType")}
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
      {errors.membershipType && (
        <p className="text-xs text-red-500 mt-1">
          {errors.membershipType.message}
        </p>
      )}

      {(membershipType === "regular" || membershipType === "corporate") && (
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
                {...register("proposedBy.name", {
                  required:
                    membershipType === "regular" ||
                    membershipType === "corporate"
                      ? "Proposer name is required"
                      : false,
                })}
                placeholder="Enter proposer's name"
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.proposedBy?.name ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.proposedBy?.name && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.proposedBy.name.message}
                </p>
              )}
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
                {...register("proposedBy.membershipNumber", {
                  required:
                    membershipType === "regular" ||
                    membershipType === "corporate"
                      ? "Proposer membership number is required"
                      : false,
                })}
                placeholder="Enter proposer's membership number"
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.proposedBy?.membershipNumber
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              {errors.proposedBy?.membershipNumber && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.proposedBy.membershipNumber.message}
                </p>
              )}
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
          <div className="h-20 border border-gray-300 rounded-md flex items-center justify-center bg-gray-50 text-gray-500 text-sm">
            Please sign on the printed form
          </div>
        </div>
      </div>
    </div>
  );
}
