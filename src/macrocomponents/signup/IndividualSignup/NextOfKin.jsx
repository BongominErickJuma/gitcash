import React from "react";

const NextOfKin = ({ formData, handleChange }) => {
  return (
    <div>
      <h5>Next Of Kin.</h5>
      <div className="mb-3">
        <label htmlFor="nok_fullname">
          <i className="bi bi-person-fill me-2"></i> Fullname
        </label>
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
        <label htmlFor="nok_relationship">
          <i className="bi bi-people-fill me-2"></i> Relationship
        </label>
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
        <label htmlFor="nok_phone">
          <i className="bi bi-telephone-fill me-2"></i> Phone Number
        </label>
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
        <label htmlFor="nok_email">
          <i className="bi bi-envelope-fill me-2"></i> Email
        </label>
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
        <label htmlFor="nok_address">
          <i className="bi bi-geo-alt-fill me-2"></i> Address
        </label>
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
