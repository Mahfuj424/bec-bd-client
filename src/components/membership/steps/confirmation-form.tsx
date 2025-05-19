/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { FaFileAlt } from "react-icons/fa";

interface ConfirmationFormProps {
  formData: any;
  pdfUrl: string;
  downloadPdf: () => void;
}

export default function ConfirmationForm({
  formData,
  downloadPdf,
}: ConfirmationFormProps) {
  return (
    <div className="space-y-6">
      <div className="p-4 bg-green-50 rounded-md text-center">
        <h3 className="text-lg font-medium text-green-700">
          Payment Verified Successfully!
        </h3>
        <p className="text-sm text-green-600 mt-2">
          Your membership application has been received. Please download your
          membership form below.
        </p>
      </div>

      <div className="border border-gray-200 rounded-md p-4">
        <h4 className="font-medium mb-2">Application Summary</h4>
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
          <div className="flex justify-between">
            <span className="text-gray-500">Membership Type:</span>
            <span className="font-medium capitalize">
              {formData.membershipType}
            </span>
          </div>
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
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-medium">Membership Certificate</h4>
          <div className="text-sm text-gray-500">PDF Preview</div>
        </div>
        <div className="bg-gray-100 rounded-md p-4 relative">
          <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="YES Logo Background"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="relative z-10 text-center p-6">
            <h3 className="text-xl font-bold mb-4">
              Young Engineering Society (YES)
            </h3>
            <h4 className="text-lg font-semibold mb-2">
              Membership Certificate
            </h4>
            <p className="mb-4">This is to certify that</p>
            <p className="text-xl font-bold mb-4">{formData.fullName}</p>
            <p className="mb-4">
              has been accepted as a {formData.membershipType} member of YES
            </p>
            <div className="mt-8 flex justify-between">
              <div className="text-center">
                <div className="border-t border-black pt-2">
                  Member's Signature
                </div>
              </div>
              <div className="text-center">
                <div className="border-t border-black pt-2">
                  President's Signature
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={downloadPdf}
        className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-center"
      >
        <FaFileAlt className="mr-2" />
        Download Membership Form PDF
      </button>
    </div>
  );
}
