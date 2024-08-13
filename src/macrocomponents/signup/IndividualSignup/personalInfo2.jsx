import React from "react";

const PersonalInfo2 = ({ formData, handleChange }) => {
  return (
    <div>
      <h5>Personal Information.</h5>
      <div className="mb-3">
        <label htmlFor="date_of_birth">Date of Birth</label>
        <input
          type="text"
          id="date_of_birth"
          name="date_of_birth"
          value={formData.date_of_birth}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="gender">Gender</label>
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
        <label htmlFor="nationality">Nationality</label>
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
        <label htmlFor="marital_status">Marital Status</label>
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
        <label htmlFor="password">Password</label>
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
        <label htmlFor="confirm_password">Confirm Password</label>
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
