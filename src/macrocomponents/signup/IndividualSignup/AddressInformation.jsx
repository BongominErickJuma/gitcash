import React from "react";

const AddressInformation = ({ formData, handleChange }) => {
  return (
    <div>
      <h5>Address Information.</h5>
      <div className="mb-3">
        <label htmlFor="address">
          <i className="bi bi-geo-alt-fill me-2"></i> Address
        </label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-5">
        <label htmlFor="city">
          <i className="bi bi-building me-2"></i> City
        </label>

        <select
          className="form-select mt-3"
          id="city"
          name="city"
          aria-label="Default select example"
          value={formData.city}
          onChange={handleChange}
        >
          <option selected>Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div className="mb-5">
        <label htmlFor="state">
          <i className="bi bi-map me-2"></i> State
        </label>

        <select
          className="form-select mt-3"
          id="state"
          name="state"
          value={formData.state}
          onChange={handleChange}
        >
          <option selected>Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="zipCode">
          <i className="bi bi-mailbox me-2"></i> Zip Code
        </label>
        <input
          type="text"
          id="zipCode"
          name="zipCode"
          value={formData.zipCode}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-5">
        <label htmlFor="country">
          <i className="bi bi-globe me-2"></i> Country
        </label>

        <select
          className="form-select mt-3"
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
        >
          <option selected>Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="permanent_address">
          <i className="bi bi-house-fill me-2"></i> Permanent Address
        </label>
        <input
          type="text"
          id="permanent_address"
          name="permanent_address"
          value={formData.permanent_address}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  );
};

export default AddressInformation;
