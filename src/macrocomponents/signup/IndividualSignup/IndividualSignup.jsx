import React, { useState } from "react";
import { individualSignupData } from "./individualDetails";

import PersonalInfo1 from "./PersonalInfo1";
import PersonalInfo2 from "./personalInfo2";
import FileFields from "./FileFields";
import NextOfKin from "./NextOfKin";
import AddressInformation from "./AddressInformation";
import AcademicBackground from "./AcademicInformation";
import ProfessionalInformation from "./ProfessionalInformation";
import LegalAgreements from "./LegalAgreements";

const IndividualSignup = () => {
  const [formData, setFormData] = useState(individualSignupData);

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
    // Handle file upload, e.g., update the formData state
    setFormData({
      ...formData,
      [fieldName]: file,
    });
  };

  const handleNext = () => {
    // if (step === 1) {
    //   if (
    //     !formData.fullname ||
    //     !formData.username ||
    //     !formData.email ||
    //     !formData.phone1 ||
    //     !formData.phone2
    //   ) {
    //     setError("All fields are required");
    //     return;
    //   }
    // } else if (step === 2) {
    //   if (
    //     !formData.date_of_birth ||
    //     !formData.gender ||
    //     !formData.nationality ||
    //     !formData.marital_status ||
    //     !formData.password ||
    //     !formData.confirm_password
    //   ) {
    //     setError("All fields are required");
    //     return;
    //   } else if (formData.password !== formData.confirm_password) {
    //     setError("Passwords do not match");
    //     return;
    //   } else if (formData.password.length < 8) {
    //     setError("Password must be at least 8 characters long");
    //     return;
    //   }
    // } else if (step === 4) {
    //   if (
    //     !formData.nok_fullname ||
    //     !formData.nok_relationship ||
    //     !formData.nok_phone ||
    //     !formData.nok_email ||
    //     !formData.nok_address
    //   ) {
    //     setError("All fields are required");
    //     return;
    //   }
    // } else if (step === 5) {
    //   if (
    //     !formData.address ||
    //     !formData.city ||
    //     !formData.state ||
    //     !formData.zipCode ||
    //     !formData.country ||
    //     !formData.permanent_address
    //   ) {
    //     setError("All fields are required");
    //     return;
    //   }
    // } else if (step === 6) {
    //   if (
    //     !formData.highest_level_of_education ||
    //     !formData.field_of_study ||
    //     !formData.educational_institution
    //     // !formData.graduation_year ||
    //     // !formData.academic_document_upload ||
    //     // !formData.additional_document_upload
    //   ) {
    //     setError("All fields are required");
    //     return;
    //   }
    // } else if (step === 7) {
    //   if (
    //     !formData.years_of_experience ||
    //     !formData.area_of_experience ||
    //     // !formData.company_name ||
    //     // !formData.job_title ||
    //     // !formData.resume_upload ||
    //     !formData.portfolio_link ||
    //     !formData.linkedin_profile
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
    if (step === 11) {
      // Handle form submission (e.g., send data to the backend)
      console.log("Form data submitted:", formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="signup-form">
        {step === 1 && (
          <div data-aos="fade-left">
            <PersonalInfo1 formData={formData} handleChange={handleChange} />
          </div>
        )}
        {step === 2 && (
          <div data-aos="fade-left">
            <PersonalInfo2 formData={formData} handleChange={handleChange} />
          </div>
        )}
        {step === 3 && (
          <div data-aos="fade-left">
            <FileFields
              formData={formData}
              handleChange={handleChange}
              handleFileUpload={handleFileUpload}
            />
          </div>
        )}

        {step === 4 && (
          <div data-aos="fade-left">
            <NextOfKin formData={formData} handleChange={handleChange} />
          </div>
        )}
        {step === 5 && (
          <div data-aos="fade-left">
            <AddressInformation
              formData={formData}
              handleChange={handleChange}
            />
          </div>
        )}
        {step === 6 && (
          <div data-aos="fade-left">
            <AcademicBackground
              formData={formData}
              handleChange={handleChange}
            />
          </div>
        )}
        {step === 7 && (
          <div data-aos="fade-left">
            <ProfessionalInformation
              formData={formData}
              handleChange={handleChange}
            />
          </div>
        )}

        {step === 8 && (
          <div data-aos="fade-left">
            <LegalAgreements formData={formData} handleChange={handleChange} />
          </div>
        )}
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
        {step < 8 && (
          <button
            type="button"
            className="btn text-right border-0"
            onClick={handleNext}
          >
            <i className="bi bi-arrow-right fs-2 text-info"></i>
          </button>
        )}
        {step === 8 && (
          <button type="submit" className="btn  border-0">
            <i className="bi bi-check fs-2 text-info"></i>
          </button>
        )}
      </div>
    </form>
  );
};

export default IndividualSignup;
