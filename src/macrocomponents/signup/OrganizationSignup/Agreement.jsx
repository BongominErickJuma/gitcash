import React from "react";

const Agreement = ({ formData, handleChange }) => {
  return (
    <div>
      <h5>Legal Agreement.</h5>

      <div className="form-check form-switch mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          name="terms_and_conditions"
          value={formData.terms_and_conditions}
          onChange={handleChange}
          required
          id="flexSwitchCheckDefault"
        />
        <label className="form-check-label" for="flexSwitchCheckDefault">
          <a href="#" className="text-black">
            Terms And Conditions
          </a>
        </label>
      </div>
      <div className="form-check form-switch mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckChecked"
          name="privacy_policy"
          value={formData.privacy_policy}
          onChange={handleChange}
          required
        />
        <label className="form-check-label" for="flexSwitchCheckChecked">
          <a href="#" className="text-black">
            Privacy and Policy
          </a>
        </label>
      </div>
    </div>
  );
};

export default Agreement;
