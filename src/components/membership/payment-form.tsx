"use client";

import { useFormContext } from "react-hook-form";
import type { FormData } from "@/app/become-a-member/page";

export default function PaymentForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormData>();

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium">Payment Information</h3>

      <div className="p-4 bg-blue-50 rounded-md">
        <p className="text-sm">
          Please send the membership fee to one of the following numbers and
          enter the transaction ID below:
        </p>
        <div className="mt-2 space-y-2">
          <div className="flex items-center gap-2">
            <span className="font-semibold">bKash:</span> 01712345678 (Personal)
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">Nagad:</span> 01712345678 (Personal)
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <label
            htmlFor="paymentMethod"
            className="block text-sm font-medium text-gray-700"
          >
            Payment Method
          </label>
          <select
            id="paymentMethod"
            {...register("paymentMethod", {
              required: "Payment method is required",
            })}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.paymentMethod ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="bkash">bKash</option>
            <option value="nagad">Nagad</option>
          </select>
          {errors.paymentMethod && (
            <p className="text-xs text-red-500 mt-1">
              {errors.paymentMethod.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="transactionId"
            className="block text-sm font-medium text-gray-700"
          >
            Transaction ID
          </label>
          <input
            id="transactionId"
            type="text"
            {...register("transactionId", {
              required: "Transaction ID is required",
              minLength: {
                value: 6,
                message: "Transaction ID must be at least 6 characters",
              },
            })}
            placeholder="Enter your transaction ID"
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.transactionId ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.transactionId && (
            <p className="text-xs text-red-500 mt-1">
              {errors.transactionId.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
