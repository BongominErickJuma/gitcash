const individualFields1 = {
  fullname: "",
  username: "",
  email: "",
  phone1: "",
  phone2: "",
};

const individualFields2 = {
  date_of_birth: "",
  gender: "",
  nationality: "",
  marital_status: "",
  password: "",
  confirm_password: "",
};

const fileFields = {
  identification_number: "",
  identification_card_scan: "",
  pasport_sized_photo: "",
};

const nextofkin = {
  nok_fullname: "",
  nok_relationship: "",
  nok_phone: "",
  nok_email: "",
  nok_address: "",
};

const addressInformation = {
  address: "",
  city: "",
  state: "",
  zipCode: "",
  country: "",
  permanent_address: "",
};

const academic_information = {
  highest_level_of_education: "",
  field_of_study: "",
  educational_institution: "",
  graduation_year: "",
  academic_document_upload: "",
  additional_document_upload: "",
};

const proffessional_information = {
  years_of_experience: "",
  area_of_experience: "",
  company_name: "",
  job_title: "",
  resume_upload: "",
  portfolio_link: "",
  linkedin_profile: "",
};

const legalAndSocialDetails = {
  tax_identification_number: "",
  social_security_number: "",
  criminal_record: "",
  criminal_record_clearence_upload: "",
  social_media_profile: {
    facebook: "",
    twitter: "",
    linkedin: "",
    github: "",
  },
};

const additionalDetails = {
  emergency_contact_name: "",
  emergency_contact_relationship: "",
  emergency_contact_phone: "",
  emergency_contact_email: "",
  emergency_contact_address: "",
};

const legalAgreement = {
  terms_and_conditions: "",
  privacy_policy: "",
};

const verification = {
  captcha: "",
};
// combine all the categories into one object

const individualSignupData = {
  ...individualFields1,
  ...individualFields2,
  ...fileFields,
  ...nextofkin,
  ...addressInformation,
  ...academic_information,
  ...proffessional_information,
  ...legalAndSocialDetails,
  ...additionalDetails,
  ...legalAgreement,
  ...verification,
};
export { individualSignupData };
