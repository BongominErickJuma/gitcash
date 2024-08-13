import React from "react";

const ProfessionalInformation = ({ formData, handleChange }) => {
  return (
    <div>
      <h5>Professional Information.</h5>
      <div className="mb-3">
        <label htmlFor="years_of_experience">
          <i className="bi bi-briefcase-fill me-2"></i> Years Of Experience
        </label>
        <input
          type="text"
          id="years_of_experience"
          name="years_of_experience"
          value={formData.years_of_experience}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="area_of_experience">
          <i className="bi bi-gear-fill me-2"></i> Area Of Experience
        </label>
        <input
          type="text"
          id="area_of_experience"
          name="area_of_experience"
          value={formData.area_of_experience}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="portfolio_link">
          <i className="bi bi-link-45deg me-2"></i> Portfolio Link
        </label>
        <input
          type="text"
          id="portfolio_link"
          name="portfolio_link"
          value={formData.portfolio_link}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="linkedin_profile">
          <i className="bi bi-linkedin me-2"></i> LinkedIn Profile
        </label>
        <input
          type="text"
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
