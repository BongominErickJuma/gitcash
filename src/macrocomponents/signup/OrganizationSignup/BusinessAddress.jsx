import React from "react";

const BusinessAddress = ({ formData, handleChange }) => {
  return (
    <div>
      <h5>Business Address.</h5>
      <div className="mb-3">
        <label htmlFor="business_address_street">
          <i className="bi bi-geo-alt-fill me-2"></i> Address
        </label>
        <input
          type="text"
          id="business_address_street"
          name="business_address_street"
          value={formData.business_address_street}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-5">
        <label htmlFor="business_address_city">
          <i className="bi bi-building me-2"></i> City
        </label>

        <select
          className="form-select mt-3"
          id="business_address_city"
          name="business_address_city"
          value={formData.business_address_city}
          onChange={handleChange}
        >
          <option selected>Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div className="mb-5">
        <label htmlFor="business_address_state">
          <i className="bi bi-map me-2"></i> State
        </label>
        <select
          className="form-select mt-3"
          id="business_address_state"
          name="business_address_state"
          value={formData.business_address_state}
          onChange={handleChange}
        >
          <option selected>Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div className="mb-5">
        <label htmlFor="business_address_country">
          <i className="bi bi-globe me-2"></i> Country
        </label>
        <select
          className="form-select mt-3"
          id="business_address_country"
          name="business_address_country"
          value={formData.business_address_country}
          onChange={handleChange}
        >
          <option selected>Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="business_address_postal_code">
          <i className="bi bi-envelope-fill me-2"></i> Postal Address
        </label>
        <input
          type="text"
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
