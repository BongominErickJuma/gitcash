import React from "react";

const ProfessionalInformation = ({ formData, handleChange }) => {
  return (
    <div>
      <h5>Professional Information.</h5>
      <div className="mb-3">
        <label htmlFor="years_of_experience" className="form-label">
          Years Of Experience
        </label>
        <input
          type="text"
          className="form-control"
          id="years_of_experience"
          name="years_of_experience"
          value={formData.years_of_experience}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="area_of_experience" className="form-label">
          Area Of Experience
        </label>
        <input
          type="text"
          className="form-control"
          id="area_of_experience"
          name="area_of_experience"
          value={formData.area_of_experience}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="company_name" className="form-label">
          Company Name
        </label>
        <input
          type="text"
          className="form-control"
          id="company_name"
          name="company_name"
          value={formData.company_name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="job_title" className="form-label">
          Job Title
        </label>
        <input
          type="text"
          className="form-control"
          id="job_title"
          name="job_title"
          value={formData.job_title}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="resume_upload" className="form-label">
          Upload Resume
        </label>
        <input
          type="file"
          className="form-control"
          id="resume_upload"
          name="resume_upload"
          value={formData.resume_upload}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="portfolio_link" className="form-label">
          Portfolio Link
        </label>
        <input
          type="text"
          className="form-control"
          id="portfolio_link"
          name="portfolio_link"
          value={formData.portfolio_link}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="linkedin_profile" className="form-label">
          LinkedIn Profile
        </label>
        <input
          type="text"
          className="form-control"
          id="linkedin_profile"
          name="linkedin_profile"
          value={formData.linkedin_profile}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  );
};

export default ProfessionalInformation;
