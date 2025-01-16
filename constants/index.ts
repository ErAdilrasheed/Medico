export const GenderOptions = ["Male", "Female", "Other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "Male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Aadhar Card",
  "Ration Card",
  "Driving License",
  "Bank Passbook",
  "Passport",
  "Pan Card",
  "Voter ID Card",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "Electricity Bill",
  "Student ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/adil.png",
    name: "Adil Rasheed (Professor)",
  },
  {
    image: "/assets/images/arisha.png",
    name: "Arisha Fatima (DM)",
  },
  {
    image: "/assets/images/dr-ajay.png",
    name: "Ajay Singh (MBBS-MD)",
  },
  {
    image: "/assets/images/eram.png",
    name: "Eram Kausar (MBBS)",
  },
  {
    image: "/assets/images/onais.png",
    name: "Onais Ansari (BUMS-MD)",
  },
  {
    image: "/assets/images/madhu.png",
    name: "Madhu Srivastava (DNB)",
  },
  {
    image: "/assets/images/ram.png",
    name: "Ram Kumar (MBBS-MS)",
  },
  {
    image: "/assets/images/lata.png",
    name: "Lata Haya (BHMS)",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Hardik Sharma (BAMS-MD)",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
