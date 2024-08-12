import React from "react";

const AddressInformation = ({ formData, handleChange }) => {
  return (
    <div>
      <h5>Address Information.</h5>
      <div className="mb-3">
        <label htmlFor="address" className="form-label">
          Address
        </label>
        <input
          type="text"
          className="form-control"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="city" className="form-label">
          City
        </label>
        <input
          type="text"
          className="form-control"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="state" className="form-label">
          State
        </label>
        <input
          type="text"
          className="form-control"
          id="state"
          name="state"
          value={formData.state}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="zipCode" className="form-label">
          Zip Code
        </label>
        <input
          type="text"
          className="form-control"
          id="zipCode"
          name="zipCode"
          value={formData.zipCode}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="country" className="form-label">
          Country
        </label>
        <input
          type="text"
          className="form-control"
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="permanent_address" className="form-label">
          Permanent Address
        </label>
        <input
          type="text"
          className="form-control"
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
