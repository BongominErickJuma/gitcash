import React from "react";

const AddressInformation = ({ formData, handleChange }) => {
  return (
    <div>
      <h5>Address Information.</h5>
      <div className="mb-3">
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="state">State</label>
        <input
          type="text"
          id="state"
          name="state"
          value={formData.state}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="zipCode">Zip Code</label>
        <input
          type="text"
          id="zipCode"
          name="zipCode"
          value={formData.zipCode}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="country">Country</label>
        <input
          type="text"
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="permanent_address">Permanent Address</label>
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
