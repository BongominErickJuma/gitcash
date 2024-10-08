import React, { useState } from "react";
import { organizationDetails } from "./organizationDetails";
import OrgInfo1 from "./OrgInfo1";
import OrgInfo2 from "./OrgInfo2";
import PrimaryContactPerson from "./PrimaryContactPerson";
import AlternativeContactPerson from "./AlternativeContactPerson";
import BusinessAddress from "./BusinessAddress";
import BillingInfo from "./BillingInfo";
import CompanySocials from "./CompanySocials";
import CompanySecurity from "./CompanySecurity";
import AdditionalInfo from "./AdditionalInfo";
import Agreement from "./Agreement";
import Verification from "./Verification";

const OrganizationSignup = () => {
  const [formData, setFormData] = useState(organizationDetails);

  const [error, setError] = useState("");
  const [step, setStep] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileUpload = (fieldName, file) => {
    // Handle the file upload logic here
    setFormData({
      ...formData,
      [fieldName]: file,
    });
  };

  const handleNext = () => {
    // if (step === 1) {
    //   if (
    //     !company_name ||
    //     !company_registration_number ||
    //     !company_tax_identification_number ||
    //     !company_email ||
    //     !company_phone ||
    //     !company_website
    //   ) {
    //     setError("All fields are required");
    //     return;
    //   }
    // } else if (step === 2) {
    //   if (
    //     !company_description ||
    //     !company_logo ||
    //     !company_business_type ||
    //     !company_industry ||
    //     !company_date_of_incorperation
    //   ) {
    //     setError("All fields are required");
    //     return;
    //   }
    // } else if (step === 3) {
    //   if (
    //     !primary_contact_person_name ||
    //     !primary_contact_person_job_title ||
    //     !primary_contact_person_email ||
    //     !primary_contact_person_phone ||
    //     !primary_contact_person_address
    //   ) {
    //     setError("All fields are required");
    //     return;
    //   }
    // } else if (step === 4) {
    //   if (
    //     !alternative_contact_person_name ||
    //     !alternative_contact_person_job_title ||
    //     !alternative_contact_person_email ||
    //     !alternative_contact_person_phone ||
    //     !alternative_contact_person_address
    //   ) {
    //     setError("All fields are required");
    //     return;
    //   }
    // } else if (step === 5) {
    //   if (
    //     !business_address_street ||
    //     !business_address_city ||
    //     !business_address_state ||
    //     !business_address_country ||
    //     !business_address_postal_code
    //   ) {
    //     setError("All fields are required");
    //     return;
    //   }
    // } else if (step === 6) {
    //   if (!billing_mobile_money || !billing_card) {
    //     setError("All fields are required");
    //     return;
    //   }
    // } else if (step === 7) {
    //   if (!linkedin || !youtube || !others) {
    //     setError("All fields are required");
    //     return;
    //   }
    // } else if (step === 8) {
    //   if (!desired_username || !password || !confirm_password) {
    //     setError("All fields are required");
    //     return;
    //   } else if (formData.password !== formData.confirm_password) {
    //     setError("Passwords do not match");
    //     return;
    //   } else if (formData.password.length < 8) {
    //     setError("Password must be at least 8 characters long");
    //     return;
    //   }
    // } else if (step === 9) {
    //   if (
    //     !prefered_communication_method ||
    //     !preferred_language ||
    //     !how_did_you_hear_about_us ||
    //     !comment
    //   ) {
    //     setError("All fields are required");
    //     return;
    //   }
    // } else if (step === 10) {
    //   if (!formData.terms_and_conditions || !formData.privacy_policy) {
    //     setError("All required are required");
    //     return;
    //   }
    // } else if (step === 11) {
    //   if (!formData.captcha) {
    //     setError("All required are required");
    //     return;
    //   }
    // }

    setError("");
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 10) {
      // Handle form submission (e.g., send data to the backend)
      console.log("Form data submitted:", formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="signup-form">
        {step === 1 && (
          <div data-aos="fade-left">
            <OrgInfo1 formData={formData} handleChange={handleChange} />
          </div>
        )}
        {step === 2 && (
          <div data-aos="fade-left">
            <OrgInfo2
              formData={formData}
              handleChange={handleChange}
              handleFileUpload={handleFileUpload}
            />
          </div>
        )}
        {step === 3 && (
          <div data-aos="fade-left">
            <PrimaryContactPerson
              formData={formData}
              handleChange={handleChange}
            />
          </div>
        )}

        {step === 4 && (
          <div data-aos="fade-left">
            <AlternativeContactPerson
              formData={formData}
              handleChange={handleChange}
            />
          </div>
        )}
        {step === 5 && (
          <div data-aos="fade-left">
            <BusinessAddress formData={formData} handleChange={handleChange} />
          </div>
        )}
        {step === 6 && (
          <div data-aos="fade-left">
            <BillingInfo formData={formData} handleChange={handleChange} />
          </div>
        )}
        {step === 7 && (
          <div data-aos="fade-left">
            <CompanySocials formData={formData} handleChange={handleChange} />
          </div>
        )}
        {step === 8 && (
          <div data-aos="fade-left">
            <CompanySecurity formData={formData} handleChange={handleChange} />
          </div>
        )}
        {step === 9 && (
          <div data-aos="fade-left">
            <AdditionalInfo formData={formData} handleChange={handleChange} />
          </div>
        )}
        {step === 10 && (
          <div data-aos="fade-left">
            <Agreement formData={formData} handleChange={handleChange} />
          </div>
        )}
        {/* {step === 11 && (
        <div data-aos="fade-left">
          <Verification formData={formData} handleChange={handleChange} />
        </div>
      )} */}
        {error && <p className="text-danger">{error}</p>}
      </div>
      <div className="d-flex justify-content-between">
        {step > 1 && (
          <button
            type="button"
            className="btn border-0"
            onClick={handlePrevious}
          >
            <i className="bi bi-arrow-left fs-2 text-info"></i>
          </button>
        )}
        {step < 10 && (
          <button
            type="button"
            className="btn text-right border-0"
            onClick={handleNext}
          >
            <i className="bi bi-arrow-right fs-2 text-info"></i>
          </button>
        )}
        {step === 10 && (
          <button type="submit" className="btn  border-0">
            <i className="bi bi-check fs-2 text-info"></i>
          </button>
        )}
      </div>
    </form>
  );
};

export default OrganizationSignup;
