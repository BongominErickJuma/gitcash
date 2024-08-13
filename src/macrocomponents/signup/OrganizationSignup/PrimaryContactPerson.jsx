import React from "react";

const PrimaryContactPerson = ({ formData, handleChange }) => {
  return (
    <div>
      <h5>Primary Contact Person.</h5>
      <div className="mb-3">
        <label htmlFor="primary_contact_person_name">Fullname</label>
        <input
          type="text"
          id="primary_contact_person_name"
          name="primary_contact_person_name"
          value={formData.primary_contact_person_name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="primary_contact_person_job_title">Job Title</label>
        <input
          type="text"
          id="primary_contact_person_job_title"
          name="primary_contact_person_job_title"
          value={formData.primary_contact_person_job_title}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="primary_contact_person_email">Email</label>
        <input
          type="email"
          id="primary_contact_person_email"
          name="primary_contact_person_email"
          value={formData.primary_contact_person_email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="primary_contact_person_phone">Phone</label>
        <input
          type="text"
          id="primary_contact_person_phone"
          name="primary_contact_person_phone"
          value={formData.primary_contact_person_phone}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="primary_contact_person_address">Address</label>
        <input
          type="text"
          id="primary_contact_person_address"
          name="primary_contact_person_address"
          value={formData.primary_contact_person_address}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  );
};

export default PrimaryContactPerson;
