import React from "react";

const Agreement = ({ formData, handleChange }) => {
  return (
    <div>
      <h5>Legal Agreement.</h5>
      <div className="mb-3">
        <label htmlFor="terms_and_conditions" className="form-label">
          Terms And Conditions
        </label>
        <input
          type="text"
          className="form-control"
          id="terms_and_conditions"
          name="terms_and_conditions"
          value={formData.terms_and_conditions}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="privacy_policy" className="form-label">
          Privacy Policy
        </label>
        <input
          type="text"
          className="form-control"
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

export default Agreement;
