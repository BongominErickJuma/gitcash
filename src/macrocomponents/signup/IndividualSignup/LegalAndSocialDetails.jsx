import React from "react";

const LegalAndSocialDetails = ({ formData, handleChange }) => {
  return (
    <div>
      <h5>Legal And Social Details.</h5>
      <div className="mb-3">
        <label htmlFor="tax_identification_number">
          <i className="bi bi-file-earmark-text-fill me-2"></i> Tax
          Identification Number (TIN)
        </label>
        <input
          type="text"
          id="tax_identification_number"
          name="tax_identification_number"
          value={formData.tax_identification_number}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  );
};

export default LegalAndSocialDetails;
