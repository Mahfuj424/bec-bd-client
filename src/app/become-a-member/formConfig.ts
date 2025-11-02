// src/app/become-a-member/formConfig.ts
export const STEPS = {
  PERSONAL_INFO: 0,
  EDUCATION: 1,
  PROFESSIONAL: 2,
  MEMBERSHIP_TYPE: 3,
  PAYMENT: 4,
  CONFIRMATION: 5,
};

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

  educationEntries: EducationEntry[];
  professionalEntries: ProfessionalEntry[];

  membershipType: string;
  membershipNumber?: string;
  signatureUrl?: string;

  paymentMethod: string;
  transactionId: string;
};
