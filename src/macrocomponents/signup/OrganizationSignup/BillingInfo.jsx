import React from "react";

const BillingInfo = ({ formData, handleChange }) => {
  return (
    <div>
      <h5>Billing Information </h5>
      <div className="mb-3">
        <label htmlFor="billing_mobile_money" className="form-label">
          Billing Mobile Money
        </label>
        <input
          type="text"
          className="form-control"
          id="billing_mobile_money"
          name="billing_mobile_money"
          value={formData.billing_mobile_money}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="billing_card" className="form-label">
          Billing Card
        </label>
        <input
          type="text"
          className="form-control"
          id="billing_card"
          name="billing_card"
          value={formData.billing_card}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  );
};

export default BillingInfo;
