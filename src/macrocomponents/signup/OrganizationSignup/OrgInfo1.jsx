import React from "react";

const OrgInfo1 = ({ formData, handleChange }) => {
  return (
    <div>
      <h5>Organization Information.</h5>
      <div className="mb-3">
        <label htmlFor="company_name">Company Name</label>
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
        <label htmlFor="company_registration_number">Registration Number</label>
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
        <label htmlFor="company_tax_identification_number">TIN</label>
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
        <label htmlFor="company_phone">Phone Number</label>
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
        <label htmlFor="company_email">Email</label>
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
        <label htmlFor="company_website">Website</label>
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
