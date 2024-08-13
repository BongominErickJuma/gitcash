import React from "react";

const NextOfKin = ({ formData, handleChange }) => {
  return (
    <div>
      <h5>Next Of Kin.</h5>
      <div className="mb-3">
        <label htmlFor="nok_fullname">Fullname</label>
        <input
          type="text"
          id="nok_fullname"
          name="nok_fullname"
          value={formData.nok_fullname}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="nok_relationship">Relationship</label>
        <input
          type="text"
          id="nok_relationship"
          name="nok_relationship"
          value={formData.nok_relationship}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="nok_phone">Phone Number</label>
        <input
          type="text"
          id="nok_phone"
          name="nok_phone"
          value={formData.nok_phone}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="nok_email">Email</label>
        <input
          type="email"
          id="nok_email"
          name="nok_email"
          value={formData.nok_email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="nok_address">Address</label>
        <input
          type="text"
          id="nok_address"
          name="nok_address"
          value={formData.nok_address}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  );
};

export default NextOfKin;
