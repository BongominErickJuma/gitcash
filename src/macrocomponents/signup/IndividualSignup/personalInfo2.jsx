import React from "react";

const PersonalInfo2 = ({ formData, handleChange }) => {
  return (
    <div>
      <h5>Personal Information.</h5>
      <div className="mb-3">
        <label htmlFor="date_of_birth">
          <i className="bi bi-calendar-fill me-2"></i> Date of Birth
        </label>
        <input
          type="date"
          id="date_of_birth"
          name="date_of_birth"
          value={formData.date_of_birth}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="gender">
          <i className="bi bi-gender-ambiguous me-2"></i> Gender
        </label>
        <input
          type="text"
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="nationality">
          <i className="bi bi-flag-fill me-2"></i> Nationality
        </label>
        <input
          type="text"
          id="nationality"
          name="nationality"
          value={formData.nationality}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="marital_status">
          <i className="bi bi-heart-fill me-2"></i> Marital Status
        </label>
        <input
          type="text"
          id="marital_status"
          name="marital_status"
          value={formData.marital_status}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password">
          <i className="bi bi-lock-fill me-2"></i> Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="confirm_password">
          <i className="bi bi-lock-fill me-2"></i> Confirm Password
        </label>
        <input
          type="password"
          id="confirm_password"
          name="confirm_password"
          value={formData.confirm_password}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  );
};

export default PersonalInfo2;
