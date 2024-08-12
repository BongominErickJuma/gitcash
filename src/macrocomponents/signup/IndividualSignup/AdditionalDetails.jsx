import React from "react";

const AdditionalDetails = ({ formData, handleChange }) => {
  return (
    <div>
      <h5>Additional Details.</h5>
      <div className="mb-3">
        <label htmlFor="emergency_contact_name" className="form-label">
          Emergency Contact Name
        </label>
        <input
          type="text"
          className="form-control"
          id="emergency_contact_name"
          name="emergency_contact_name"
          value={formData.emergency_contact_name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="emergency_contact_relationship" className="form-label">
          Relationship
        </label>
        <input
          type="text"
          className="form-control"
          id="emergency_contact_relationship"
          name="emergency_contact_relationship"
          value={formData.emergency_contact_relationship}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="emergency_contact_phone" className="form-label">
          Emergency Contact phone
        </label>
        <input
          type="text"
          className="form-control"
          id="emergency_contact_phone"
          name="emergency_contact_phone"
          value={formData.emergency_contact_phone}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="emergency_contact_email" className="form-label">
          Emergency Contact Email
        </label>
        <input
          type="text"
          className="form-control"
          id="emergency_contact_email"
          name="emergency_contact_email"
          value={formData.emergency_contact_email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="emergency_contact_address" className="form-label">
          Emergency Contact Address
        </label>
        <input
          type="text"
          className="form-control"
          id="emergency_contact_address"
          name="emergency_contact_address"
          value={formData.emergency_contact_address}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  );
};

export default AdditionalDetails;
