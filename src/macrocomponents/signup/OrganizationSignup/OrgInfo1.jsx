import React from "react";

const OrgInfo1 = ({ formData, handleChange }) => {
  return (
    <div>
      <h5>Organization Information.</h5>
      <div className="mb-3">
        <label htmlFor="company_name">
          <i className="bi bi-building me-2"></i> Company Name
        </label>
        <input
          type="text"
          id="company_name"
          name="company_name"
          value={formData.company_name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="company_registration_number">
          <i className="bi bi-card-checklist me-2"></i> Registration Number
        </label>
        <input
          type="text"
          id="company_registration_number"
          name="company_registration_number"
          value={formData.company_registration_number}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="company_tax_identification_number">
          <i className="bi bi-file-earmark-text me-2"></i> TIN
        </label>
        <input
          type="text"
          id="company_tax_identification_number"
          name="company_tax_identification_number"
          value={formData.company_tax_identification_number}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="company_phone">
          <i className="bi bi-telephone-fill me-2"></i> Phone Number
        </label>
        <input
          type="text"
          id="company_phone"
          name="company_phone"
          value={formData.company_phone}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="company_email">
          <i className="bi bi-envelope-fill me-2"></i> Email
        </label>
        <input
          type="email"
          id="company_email"
          name="company_email"
          value={formData.company_email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="company_website">
          <i className="bi bi-globe me-2"></i> Website
        </label>
        <input
          type="text"
          id="company_website"
          name="company_website"
          value={formData.company_website}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  );
};

export default OrgInfo1;
