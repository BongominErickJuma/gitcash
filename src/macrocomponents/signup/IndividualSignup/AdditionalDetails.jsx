import React from "react";

const AdditionalDetails = ({ formData, handleChange }) => {
  return (
    <div>
      <h5>Additional Details.</h5>
      <div className="mb-3">
        <label htmlFor="emergency_contact_name">
          <i className="bi bi-person-fill me-2"></i> Emergency Contact Name
        </label>
        <input
          type="text"
          id="emergency_contact_name"
          name="emergency_contact_name"
          value={formData.emergency_contact_name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="emergency_contact_relationship">
          <i className="bi bi-people-fill me-2"></i> Relationship
        </label>
        <input
          type="text"
          id="emergency_contact_relationship"
          name="emergency_contact_relationship"
          value={formData.emergency_contact_relationship}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="emergency_contact_phone">
          <i className="bi bi-telephone-fill me-2"></i> Emergency Contact Phone
        </label>
        <input
          type="text"
          id="emergency_contact_phone"
          name="emergency_contact_phone"
          value={formData.emergency_contact_phone}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="emergency_contact_email">
          <i className="bi bi-envelope-fill me-2"></i> Emergency Contact Email
        </label>
        <input
          type="text"
          id="emergency_contact_email"
          name="emergency_contact_email"
          value={formData.emergency_contact_email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="emergency_contact_address">
          <i className="bi bi-geo-alt-fill me-2"></i> Emergency Contact Address
        </label>
        <input
          type="text"
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
