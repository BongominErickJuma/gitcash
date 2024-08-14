import React from "react";

const BillingInfo = ({ formData, handleChange }) => {
  return (
    <div>
      <h5>Billing Information</h5>

      <div className="form-check form-switch mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          name="billing_mobile_money"
          value={formData.billing_mobile_money}
          onChange={handleChange}
          required
          id="flexSwitchCheckDefault"
        />
        <label className="form-check-label" for="flexSwitchCheckDefault">
          <a href="#" className="text-black">
            Billing Mobile Money
          </a>
        </label>
      </div>
      <div className="form-check form-switch mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckChecked"
          name="billing_card"
          value={formData.billing_card}
          onChange={handleChange}
          required
        />
        <label className="form-check-label" for="flexSwitchCheckChecked">
          <a href="#" className="text-black">
            Billing Card
          </a>
        </label>
      </div>
    </div>
  );
};

export default BillingInfo;
