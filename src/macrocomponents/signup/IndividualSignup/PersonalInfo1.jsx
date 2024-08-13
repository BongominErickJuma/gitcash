import React from "react";

const PersonalInfo1 = ({ formData, handleChange }) => {
  return (
    <div>
      <h5 className="mb-3">Personal Information.</h5>
      <div className="mb-3 input-box">
        <label htmlFor="fullname">
          <i className="bi bi-person-fill me-2"></i> Fullname
        </label>
        <input
          type="text"
          id="fullname"
          name="fullname"
          value={formData.fullname}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3 input-box">
        <label htmlFor="username">
          <i className="bi bi-person-badge-fill me-2"></i> Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3 input-box">
        <label htmlFor="email">
          <i className="bi bi-envelope-fill me-2"></i> Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3 input-box">
        <label htmlFor="phone1">
          <i className="bi bi-telephone-fill me-2"></i> Phone Number One
        </label>
        <input
          type="text"
          id="phone1"
          name="phone1"
          value={formData.phone1}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3 input-box">
        <label htmlFor="phone2">
          <i className="bi bi-telephone-fill me-2"></i> Phone Number Two
        </label>
        <input
          type="text"
          id="phone2"
          name="phone2"
          value={formData.phone2}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  );
};

export default PersonalInfo1;
