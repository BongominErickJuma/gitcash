import React, { useState } from "react";
import { individualSignupData } from "./individualDetails";

import PersonalInfo1 from "./PersonalInfo1";
import PersonalInfo2 from "./personalInfo2";
import FileFields from "./FileFields";
import NextOfKin from "./NextOfKin";
import AddressInformation from "./AddressInformation";
import AcademicBackground from "./AcademicInformation";
import ProfessionalInformation from "./ProfessionalInformation";
import LegalAndSocialDetails from "./LegalAndSocialDetails";
import AdditionalDetails from "./AdditionalDetails";
import LegalAgreements from "./LegalAgreements";
import PersonalVerification from "./PersonalVerification";

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

  const handleNext = () => {
    if (step === 1) {
      if (
        !formData.fullname ||
        !formData.username ||
        !formData.email ||
        !formData.phone1 ||
        !formData.phone2
      ) {
        setError("All fields are required");
        return;
      }
    } else if (step === 2) {
      if (
        !formData.date_of_birth ||
        !formData.gender ||
        !formData.nationality ||
        !formData.marital_status ||
        !formData.password ||
        !formData.confirm_password
      ) {
        setError("All fields are required");
        return;
      } else if (formData.password !== formData.confirm_password) {
        setError("Passwords do not match");
        return;
      } else if (formData.password.length < 8) {
        setError("Password must be at least 8 characters long");
        return;
      }
    } else if (step === 3) {
      if (
        !formData.identification_number ||
        !formData.identification_card_scan ||
        !formData.pasport_sized_photo
      ) {
        setError("All fields are required");
        return;
      }
    } else if (step === 4) {
      if (
        !formData.nok_fullname ||
        !formData.nok_relationship ||
        !formData.nok_phone ||
        !formData.nok_email ||
        !formData.nok_address
      ) {
        setError("All fields are required");
        return;
      }
    } else if (step === 5) {
      if (
        !formData.address ||
        !formData.city ||
        !formData.state ||
        !formData.zipCode ||
        !formData.country ||
        !formData.permanent_address
      ) {
        setError("All fields are required");
        return;
      }
    } else if (step === 6) {
      if (
        !formData.highest_level_of_education ||
        !formData.field_of_study ||
        !formData.educational_institution ||
        !formData.graduation_year ||
        !formData.academic_document_upload ||
        !formData.additional_document_upload
      ) {
        setError("All fields are required");
        return;
      }
    } else if (step === 7) {
      if (
        !formData.years_of_experience ||
        !formData.area_of_experience ||
        !formData.company_name ||
        !formData.job_title ||
        !formData.resume_upload ||
        !formData.portfolio_link ||
        !formData.linkedin_profile
      ) {
        setError("All fields are required");
        return;
      }
    } else if (step === 8) {
      if (
        !formData.tax_identification_number ||
        !formData.social_security_number ||
        !formData.criminal_record ||
        !formData.criminal_record_clearence_upload
        // !formData.social_media_profile.facebook
        // !formData.social_media_profile.twitter ||
        // !formData.social_media_profile.linkedin
      ) {
        setError("All fields are required");
        return;
      }
    } else if (step === 9) {
      if (
        !formData.emergency_contact_name ||
        !formData.emergency_contact_relationship ||
        !formData.emergency_contact_phone ||
        !formData.emergency_contact_email ||
        !formData.emergency_contact_address
      ) {
        setError("All fields are required");
        return;
      }
    } else if (step === 10) {
      if (!formData.terms_and_conditions || !formData.privacy_policy) {
        setError("All required are required");
        return;
      }
    } else if (step === 11) {
      if (!formData.captcha) {
        setError("All required are required");
        return;
      }
    }

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
      {step === 1 && (
        <div data-aos="zoom-in">
          <PersonalInfo1 formData={formData} handleChange={handleChange} />
        </div>
      )}
      {step === 2 && (
        <div data-aos="zoom-in">
          <PersonalInfo2 formData={formData} handleChange={handleChange} />
        </div>
      )}
      {step === 3 && (
        <div data-aos="zoom-in">
          <FileFields formData={formData} handleChange={handleChange} />
        </div>
      )}

      {step === 4 && (
        <div data-aos="zoom-in">
          <NextOfKin formData={formData} handleChange={handleChange} />
        </div>
      )}
      {step === 5 && (
        <div data-aos="zoom-in">
          <AddressInformation formData={formData} handleChange={handleChange} />
        </div>
      )}
      {step === 6 && (
        <div data-aos="zoom-in">
          <AcademicBackground formData={formData} handleChange={handleChange} />
        </div>
      )}
      {step === 7 && (
        <div data-aos="zoom-in">
          <ProfessionalInformation
            formData={formData}
            handleChange={handleChange}
          />
        </div>
      )}
      {step === 8 && (
        <div data-aos="zoom-in">
          <LegalAndSocialDetails
            formData={formData}
            handleChange={handleChange}
          />
        </div>
      )}
      {step === 9 && (
        <div data-aos="zoom-in">
          <AdditionalDetails formData={formData} handleChange={handleChange} />
        </div>
      )}
      {step === 10 && (
        <div data-aos="zoom-in">
          <LegalAgreements formData={formData} handleChange={handleChange} />
        </div>
      )}
      {step === 11 && (
        <div data-aos="zoom-in">
          <PersonalVerification
            formData={formData}
            handleChange={handleChange}
          />
        </div>
      )}
      {error && <p className="text-danger">{error}</p>}
      <div className="d-flex justify-content-between">
        {step > 1 && (
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handlePrevious}
          >
            Previous
          </button>
        )}
        {step < 11 && (
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleNext}
          >
            Next
          </button>
        )}
        {step === 11 && (
          <button type="submit" className="btn btn-primary border-0">
            Signup
          </button>
        )}
      </div>
    </form>
  );
};

export default IndividualSignup;
