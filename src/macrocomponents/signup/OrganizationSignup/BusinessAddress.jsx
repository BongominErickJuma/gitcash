import React from "react";

const BusinessAddress = ({ formData, handleChange }) => {
  return (
    <div>
      <h5>Business Address.</h5>
      <div className="mb-3">
        <label htmlFor="business_address_street" className="form-label">
          Address
        </label>
        <input
          type="text"
          className="form-control"
          id="business_address_street"
          name="business_address_street"
          value={formData.business_address_street}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="business_address_city" className="form-label">
          City
        </label>
        <input
          type="text"
          className="form-control"
          id="business_address_city"
          name="business_address_city"
          value={formData.business_address_city}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="business_address_state" className="form-label">
          State
        </label>
        <input
          type="text"
          className="form-control"
          id="business_address_state"
          name="business_address_state"
          value={formData.business_address_state}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="business_address_country" className="form-label">
          Country
        </label>
        <input
          type="text"
          className="form-control"
          id="business_address_country"
          name="business_address_country"
          value={formData.business_address_country}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="business_address_postal_code" className="form-label">
          Postal Address
        </label>
        <input
          type="text"
          className="form-control"
          id="business_address_postal_code"
          name="business_address_postal_code"
          value={formData.business_address_postal_code}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  );
};

export default BusinessAddress;
