import React from "react";

const AlternativeContactPerson = ({ formData, handleChange }) => {
  return (
    <div>
      <h5>Alternative Contact Person.</h5>
      <div className="mb-3">
        <label htmlFor="alternative_contact_person_name">Fullname</label>
        <input
          type="text"
          id="alternative_contact_person_name"
          name="alternative_contact_person_name"
          value={formData.alternative_contact_person_name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="alternative_contact_person_job_title">Job Title</label>
        <input
          type="text"
          id="alternative_contact_person_job_title"
          name="alternative_contact_person_job_title"
          value={formData.alternative_contact_person_job_title}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="alternative_contact_person_email">Email</label>
        <input
          type="email"
          id="alternative_contact_person_email"
          name="alternative_contact_person_email"
          value={formData.alternative_contact_person_email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="alternative_contact_person_phone">Phone</label>
        <input
          type="text"
          id="alternative_contact_person_phone"
          name="alternative_contact_person_phone"
          value={formData.alternative_contact_person_phone}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="alternative_contact_person_address">Address</label>
        <input
          type="text"
          id="alternative_contact_person_address"
          name="alternative_contact_person_address"
          value={formData.alternative_contact_person_address}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  );
};

export default AlternativeContactPerson;
