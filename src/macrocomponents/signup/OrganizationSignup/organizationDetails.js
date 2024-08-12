const companyInformation1 = {
  company_name: "",
  company_registration_number: "",
  company_tax_identification_number: "",
  company_email: "",
  company_phone: "",
  company_website: "",
};

const companyInformation2 = {
  company_description: "",
  company_logo: "",
  company_business_type: "",
  company_industry: "",
  company_date_of_incorperation: "",
};

const primaryContactPersonIformation = {
  primary_contact_person_name: "",
  primary_contact_person_job_title: "",
  primary_contact_person_email: "",
  primary_contact_person_phone: "",
  primary_contact_person_address: "",
};

const alternativeContactPersonInformation = {
  alternative_contact_person_name: "",
  alternative_contact_person_job_title: "",
  alternative_contact_person_email: "",
  alternative_contact_person_phone: "",
  alternative_contact_person_address: "",
};

const businessAddress = {
  business_address_street: "",
  business_address_city: "",
  business_address_state: "",
  business_address_country: "",
  business_address_postal_code: "",
};

const billingInformation = {
  billing_mobile_money: "",
  billing_card: "",
};

const companySocialMedia = {
  linkedin: "",
  youtube: "",
  others: "",
};

const companyAccountDetails = {
  desired_username: "",
  password: "",
  confirm_password: "",
};

const additionalInformation = {
  prefered_communication_method: "",
  preferred_language: "",
  how_did_you_hear_about_us: "",
  comment: "",
};

const agreementAndContract = {
  terms_and_conditions: "",
  privacy_policy: "",
};

const verification = {
  captcha: "",
};

const organizationDetails = {
  ...companyInformation1,
  ...companyInformation2,
  ...primaryContactPersonIformation,
  ...alternativeContactPersonInformation,
  ...businessAddress,
  ...billingInformation,
  ...companySocialMedia,
  ...companyAccountDetails,
  ...additionalInformation,
  ...agreementAndContract,
  ...verification,
};

export { organizationDetails };
