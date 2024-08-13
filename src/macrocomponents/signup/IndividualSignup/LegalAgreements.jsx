import React from "react";

const LegalAgreements = ({ formData, handleChange }) => {
  return (
    <div>
      <h5>Legal Agreement.</h5>
      <div className="mb-3">
        <label htmlFor="terms_and_conditions">
          <i className="bi bi-file-earmark-text-fill me-2"></i> Terms And
          Conditions
        </label>
        <input
          type="text"
          id="terms_and_conditions"
          name="terms_and_conditions"
          value={formData.terms_and_conditions}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="privacy_policy">
          <i className="bi bi-shield-lock-fill me-2"></i> Privacy Policy
        </label>
        <input
          type="text"
          id="privacy_policy"
          name="privacy_policy"
          value={formData.privacy_policy}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  );
};

export default LegalAgreements;
