/* eslint-disable @typescript-eslint/no-explicit-any */
import type React from "react";
import { STEPS } from "@/app/become-a-member/page";
import PersonalInfoForm from "./steps/personal-info-form";
import EducationForm from "./steps/education-form";
import ProfessionalForm from "./steps/professional-form";
import PaymentForm from "./steps/payment-form";
import ConfirmationForm from "./steps/confirmation-form";
import MembershipTypeForm from "./steps/membership-type-form";

interface MembershipFormStepsProps {
  step: number;
  formData: any;
  updateFormData: (field: string, value: any) => void;
  handleNidChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isNidValid: boolean;
  handlePhotoChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  pdfUrl: string;
  downloadPdf: () => void;
}

export default function MembershipFormSteps({
  step,
  formData,
  updateFormData,
  handleNidChange,
  isNidValid,
  handlePhotoChange,
  pdfUrl,
  downloadPdf,
}: MembershipFormStepsProps) {
  switch (step) {
    case STEPS.PERSONAL_INFO:
      return (
        <PersonalInfoForm
          formData={formData}
          updateFormData={updateFormData}
          handleNidChange={handleNidChange}
          isNidValid={isNidValid}
          handlePhotoChange={handlePhotoChange}
        />
      );
    case STEPS.EDUCATION:
      return (
        <EducationForm formData={formData} updateFormData={updateFormData} />
      );
    case STEPS.PROFESSIONAL:
      return (
        <ProfessionalForm formData={formData} updateFormData={updateFormData} />
      );
    case STEPS.MEMBERSHIP_TYPE:
      return (
        <MembershipTypeForm
          formData={formData}
          updateFormData={updateFormData}
        />
      );
    case STEPS.PAYMENT:
      return (
        <PaymentForm formData={formData} updateFormData={updateFormData} />
      );
    case STEPS.CONFIRMATION:
      return (
        <ConfirmationForm
          formData={formData}
          pdfUrl={pdfUrl}
          downloadPdf={downloadPdf}
        />
      );
    default:
      return null;
  }
}
