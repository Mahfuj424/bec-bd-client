/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import Image from "next/image";
import {
  FaUser,
  FaGraduationCap,
  FaBriefcase,
  FaMoneyBillWave,
  FaFileAlt,
} from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import PersonalInfoForm from "@/components/membership/personal-info-form";
import EducationForm from "@/components/membership/education-form";
import ProfessionalForm from "@/components/membership/professional-form";
import MembershipTypeForm from "@/components/membership/membership-type-form";
import PaymentForm from "@/components/membership/payment-form";
import ConfirmationForm from "@/components/membership/confirmation-form";

// Form steps
export const STEPS = {
  PERSONAL_INFO: 0,
  EDUCATION: 1,
  PROFESSIONAL: 2,
  MEMBERSHIP_TYPE: 3,
  PAYMENT: 4,
  CONFIRMATION: 5,
};

// Form types for TypeScript
export type EducationEntry = {
  degree: string;
  university: string;
  passingYear: number;
  result: string;
  certificate: string;
};

export type ProfessionalEntry = {
  company: string;
  position: string;
  duration: string;
};

export type FormData = {
  // Personal Info
  fullName: string;
  profile: string;
  fatherName: string;
  motherName: string;
  dateOfBirth: string;
  nationality: string;
  address: string;
  mobile: number;
  email: string;
  bloodGroup: string;
  gender: string;
  nidPassport: number;
  emergencyContact: number;

  // Education
  educationEntries: EducationEntry[];

  // Professional
  professionalEntries: ProfessionalEntry[];

  // Membership
  membershipType: string;
  membershipNumber?: string;
  signatureUrl?: string;

  // Payment
  paymentMethod: string;
  transactionId: string;
};

export default function MembershipForm() {
  const [step, setStep] = useState(STEPS.PERSONAL_INFO);
  const [termConditionIsTrue, setTermConditionIsTrue] = useState(false);

  // Initialize React Hook Form
  const methods = useForm<FormData>({
    defaultValues: {
      // Personal Info
      fullName: "",
      fatherName: "",
      motherName: "",
      dateOfBirth: "",
      nationality: "",
      address: "",
      mobile: undefined,
      email: "",
      bloodGroup: "",
      gender: "",
      nidPassport: undefined,
      emergencyContact: undefined,
      profile: "",

      // Education
      educationEntries: [
        {
          degree: "",
          university: "",
          passingYear: undefined,
          result: "",
          certificate: "",
        },
      ],

      // Professional
      professionalEntries: [{ company: "", position: "", duration: "" }],

      // Membership
      membershipType: "regular",
      membershipNumber: "",
      signatureUrl: "",

      // Payment
      paymentMethod: "bkash",
      transactionId: "",
    },
    mode: "onChange",
  });

  const {
    handleSubmit,
    trigger,
    formState: { isValid },
  } = methods;

  const nextStep = async () => {
    // Validate current step before proceeding
    let isStepValid = false;

    switch (step) {
      case STEPS.PERSONAL_INFO:
        isStepValid = await trigger([
          "fullName",
          "fatherName",
          "motherName",
          "dateOfBirth",
          "nationality",
          "address",
          "mobile",
          "email",
          "bloodGroup",
          "gender",
          "nidPassport",
          "emergencyContact",
        ]);
        break;
      case STEPS.EDUCATION:
        isStepValid = true; // Education is optional
        break;
      case STEPS.PROFESSIONAL:
        isStepValid = true; // Professional experience is optional
        break;
      case STEPS.MEMBERSHIP_TYPE:
        isStepValid = await trigger([
          "membershipType",
          "signatureUrl",
          "membershipNumber",
        ]);
        break;
      case STEPS.PAYMENT:
        isStepValid = await trigger(["paymentMethod", "transactionId"]);
        break;
      default:
        isStepValid = true;
    }

    if (isStepValid) {
      setStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const onSubmit = (data: FormData) => {
    // Log the form data to the console as requested
    console.log("Form submitted with data:", data);
    alert("Form submitted successfully! Check console for data.");
  };

  const getStepIcon = (stepNumber: number) => {
    switch (stepNumber) {
      case STEPS.PERSONAL_INFO:
        return <FaUser />;
      case STEPS.EDUCATION:
        return <FaGraduationCap />;
      case STEPS.PROFESSIONAL:
        return <FaBriefcase />;
      case STEPS.MEMBERSHIP_TYPE:
        return <FaMoneyBillWave />;
      case STEPS.PAYMENT:
        return <MdPayment />;
      case STEPS.CONFIRMATION:
        return <FaFileAlt />;
      default:
        return null;
    }
  };
  console.log(process.env.IMGBB_API_KEY);

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="relative w-64 h-20">
              <Image
                src="/logo/logo.png"
                alt="YES Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <h1 className="text-2xl font-bold">Membership Application Form</h1>
          <p className="text-gray-500">Young Engineering Society (YES)</p>
        </div>

        {/* Progress Steps */}
        <div className="hidden md:flex justify-between mb-8">
          {Object.values(STEPS).map((stepNumber) => (
            <div
              key={stepNumber}
              className={`flex flex-col items-center ${
                stepNumber === step
                  ? "text-blue-600"
                  : stepNumber < step
                  ? "text-green-500"
                  : "text-gray-400"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                  stepNumber === step
                    ? "bg-blue-600 text-white"
                    : stepNumber < step
                    ? "bg-green-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                {getStepIcon(stepNumber)}
              </div>
              <span className="text-xs text-center">
                {stepNumber === STEPS.PERSONAL_INFO && "Personal Info"}
                {stepNumber === STEPS.EDUCATION && "Education"}
                {stepNumber === STEPS.PROFESSIONAL && "Professional"}
                {stepNumber === STEPS.MEMBERSHIP_TYPE && "Membership"}
                {stepNumber === STEPS.PAYMENT && "Payment"}
                {stepNumber === STEPS.CONFIRMATION && "Confirmation"}
              </span>
            </div>
          ))}
        </div>

        {/* Form */}
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Form Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              {/* Card Header */}
              <div className="border-b border-gray-200 p-6">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  {getStepIcon(step)}
                  {step === STEPS.PERSONAL_INFO && "Personal Information"}
                  {step === STEPS.EDUCATION && "Educational Background"}
                  {step === STEPS.PROFESSIONAL && "Professional Experience"}
                  {step === STEPS.MEMBERSHIP_TYPE && "Membership Type"}
                  {step === STEPS.PAYMENT && "Payment Information"}
                  {step === STEPS.CONFIRMATION && "Application Confirmation"}
                </h2>
                <p className="text-gray-500 mt-1">
                  {step === STEPS.PERSONAL_INFO &&
                    "Please provide your personal details"}
                  {step === STEPS.EDUCATION &&
                    "Add your educational qualifications"}
                  {step === STEPS.PROFESSIONAL && "Add your work experience"}
                  {step === STEPS.MEMBERSHIP_TYPE &&
                    "Select your membership category"}
                  {step === STEPS.PAYMENT && "Complete your payment to proceed"}
                  {step === STEPS.CONFIRMATION &&
                    "Review your application and submit"}
                </p>
              </div>

              {/* Card Content */}
              <div className="p-6">
                {/* Render the appropriate component based on the current step */}
                {step === STEPS.PERSONAL_INFO && <PersonalInfoForm />}
                {step === STEPS.EDUCATION && <EducationForm />}
                {step === STEPS.PROFESSIONAL && <ProfessionalForm />}
                {step === STEPS.MEMBERSHIP_TYPE && <MembershipTypeForm />}
                {step === STEPS.PAYMENT && <PaymentForm />}
                {step === STEPS.CONFIRMATION && (
                  <ConfirmationForm
                    setTermConditionIsTrue={setTermConditionIsTrue}
                  />
                )}
              </div>

              {/* Card Footer */}
              <div className="border-t border-gray-200 p-6 flex justify-between">
                {step > STEPS.PERSONAL_INFO && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Previous
                  </button>
                )}

                {step < STEPS.CONFIRMATION && (
                  <button
                    type="button"
                    className={`py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      step > STEPS.PERSONAL_INFO ? "" : "ml-auto"
                    }`}
                    onClick={nextStep}
                  >
                    Next
                  </button>
                )}

                {step === STEPS.CONFIRMATION && (
                  <button
                    type="submit"
                    disabled={!termConditionIsTrue}
                    className={`py-2 px-4 ${
                      !termConditionIsTrue
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-green-600 hover:bg-green-700"
                    } text-white font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-green-500`}
                  >
                    Submit Application
                  </button>
                )}
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
