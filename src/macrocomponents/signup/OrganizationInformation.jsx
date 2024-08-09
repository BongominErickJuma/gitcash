import React from "react";

const OrganizationInformation = ({ formData, handleChange }) => {
  return (
    <div>
      <div className="mb-3">
        <label htmlFor="organizationName" className="form-label">
          Organization Name
        </label>
        <input
          type="text"
          className="form-control"
          id="organizationName"
          name="organizationName"
          value={formData.organizationName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label
          htmlFor="organizationAddress"
          className="form-label"
        >
          Organization Address
        </label>
        <input
          type="text"
          className="form-control"
          id="organizationAddress"
          name="organizationAddress"
          value={formData.organizationAddress}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  );
};

export default OrganizationInformation;
