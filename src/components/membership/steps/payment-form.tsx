/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

interface PaymentFormProps {
  formData: any;
  updateFormData: (field: string, value: any) => void;
}

export default function PaymentForm({
  formData,
  updateFormData,
}: PaymentFormProps) {
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
            value={formData.paymentMethod}
            onChange={(e) => updateFormData("paymentMethod", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="bkash">bKash</option>
            <option value="nagad">Nagad</option>
          </select>
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
            value={formData.transactionId}
            onChange={(e) => updateFormData("transactionId", e.target.value)}
            placeholder="Enter your transaction ID"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
}
