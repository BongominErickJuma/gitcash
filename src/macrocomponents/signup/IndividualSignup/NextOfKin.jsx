import React from "react";

const NextOfKin = ({ formData, handleChange }) => {
  return (
    <div>
      <h5>Next Of Kin.</h5>
      <div className="mb-3">
        <label htmlFor="nok_fullname" className="form-label">
          Fullname
        </label>
        <input
          type="text"
          className="form-control"
          id="nok_fullname"
          name="nok_fullname"
          value={formData.nok_fullname}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="nok_relationship" className="form-label">
          Relationship
        </label>
        <input
          type="text"
          className="form-control"
          id="nok_relationship"
          name="nok_relationship"
          value={formData.nok_relationship}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="nok_phone" className="form-label">
          Phone Number
        </label>
        <input
          type="text"
          className="form-control"
          id="nok_phone"
          name="nok_phone"
          value={formData.nok_phone}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="nok_email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="nok_email"
          name="nok_email"
          value={formData.nok_email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="nok_address" className="form-label">
          Address
        </label>
        <input
          type="text"
          className="form-control"
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
