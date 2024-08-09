import React, { useState, useEffect } from "react";


import UserInformation from "./UserInformation";
import TechnologyExperience from "./TechnologyExperience";
import OrganizationInformation from "./OrganizationInformation";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    technologies: "",
    experience: "",
    company: "",
    organizationName: "",
    organizationAddress: "",
  });

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
        !formData.name ||
        !formData.email ||
        !formData.phone ||
        !formData.password ||
        !formData.confirmPassword
      ) {
        setError("All fields are required");
        return;
      } else if (formData.password !== formData.confirmPassword) {
        setError("Passwords do not match");
        return;
      } else if (formData.password.length < 8) {
        setError("Password must be at least 8 characters long");
        return;
      }
    } else if (step === 2) {
      if (!formData.technologies || !formData.experience || !formData.company) {
        setError("All fields are required");
        return;
      }
    } else if (step === 3) {
      if (!formData.organizationName || !formData.organizationAddress) {
        setError("All fields are required");
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
    if (step === 3) {
      // Handle form submission (e.g., send data to the backend)
      console.log("Form data submitted:", formData);
    }
  };

  return (
    <div className="container mt-5 account-form">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card mt-5">
            <div className="card-body">
              <h2 className="card-title text-start">Sign up for Gitcash</h2>
              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <div data-aos="fade-left">
                    <UserInformation
                      formData={formData}
                      handleChange={handleChange}
                    />
                  </div>
                )}
                {step === 2 && (
                  <div data-aos="fade-left">
                    <TechnologyExperience
                      formData={formData}
                      handleChange={handleChange}
                    />
                  </div>
                )}
                {step === 3 && (
                  <div data-aos="fade-left">
                    <OrganizationInformation
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
                  {step < 3 && (
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleNext}
                    >
                      Next
                    </button>
                  )}
                  {step === 3 && (
                    <button
                      type="submit"
                      className="btn btn-primary border-0"
                    >
                      Signup
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
