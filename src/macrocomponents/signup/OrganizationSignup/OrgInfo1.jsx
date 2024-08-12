import React from "react";

const OrgInfo1 = ({ formData, handleChange }) => {
  return (
    <div>
      <h5>Organization Information.</h5>
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
        <label htmlFor="company_registration_number" className="form-label">
          Registration Number
        </label>
        <input
          type="text"
          className="form-control"
          id="company_registration_number"
          name="company_registration_number"
          value={formData.company_registration_number}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label
          htmlFor="company_tax_identification_number"
          className="form-label"
        >
          TIN
        </label>
        <input
          type="text"
          className="form-control"
          id="company_tax_identification_number"
          name="company_tax_identification_number"
          value={formData.company_tax_identification_number}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="company_phone" className="form-label">
          Phone Number
        </label>
        <input
          type="text"
          className="form-control"
          id="company_phone"
          name="company_phone"
          value={formData.company_phone}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="company_email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="company_email"
          name="company_email"
          value={formData.company_email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="company_website" className="form-label">
          Website
        </label>
        <input
          type="text"
          className="form-control"
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
