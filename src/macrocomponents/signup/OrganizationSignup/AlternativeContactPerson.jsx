import React from "react";

const AlternativeContactPerson = ({ formData, handleChange }) => {
  return (
    <div>
      <h5>Alternative Contact Person.</h5>
      <div className="mb-3">
        <label htmlFor="alternative_contact_person_name">
          <i className="bi bi-person-fill me-2"></i> Fullname
        </label>
        <input
          type="text"
          id="alternative_contact_person_name"
          name="alternative_contact_person_name"
          value={formData.alternative_contact_person_name}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="alternative_contact_person_job_title">
          <i className="bi bi-briefcase-fill me-2"></i> Job Title
        </label>
        <input
          type="text"
          id="alternative_contact_person_job_title"
          name="alternative_contact_person_job_title"
          value={formData.alternative_contact_person_job_title}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="alternative_contact_person_email">
          <i className="bi bi-envelope-fill me-2"></i> Email
        </label>
        <input
          type="email"
          id="alternative_contact_person_email"
          name="alternative_contact_person_email"
          value={formData.alternative_contact_person_email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="alternative_contact_person_phone">
          <i className="bi bi-telephone-fill me-2"></i> Phone
        </label>
        <input
          type="text"
          id="alternative_contact_person_phone"
          name="alternative_contact_person_phone"
          value={formData.alternative_contact_person_phone}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="alternative_contact_person_address">
          <i className="bi bi-geo-alt-fill me-2"></i> Address
        </label>
        <input
          type="text"
          id="alternative_contact_person_address"
          name="alternative_contact_person_address"
          value={formData.alternative_contact_person_address}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default AlternativeContactPerson;
