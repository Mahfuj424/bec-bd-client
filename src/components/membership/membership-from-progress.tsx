import { STEPS } from "@/app/become-a-member/formConfig";
import type { ReactNode } from "react";

interface MembershipFormProgressProps {
  currentStep: number;
  getStepIcon: (stepNumber: number) => ReactNode;
}

export default function MembershipFormProgress({
  currentStep,
  getStepIcon,
}: MembershipFormProgressProps) {
  return (
    <div className="hidden md:flex justify-between mb-8">
      {Object.values(STEPS).map((stepNumber) => (
        <div
          key={stepNumber}
          className={`flex flex-col items-center ${
            stepNumber === currentStep
              ? "text-primary"
              : stepNumber < currentStep
              ? "text-green-500"
              : "text-muted-foreground"
          }`}
        >
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
              stepNumber === currentStep
                ? "bg-primary text-white"
                : stepNumber < currentStep
                ? "bg-green-500 text-white"
                : "bg-muted"
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
  );
}
