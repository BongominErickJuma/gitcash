import React from "react";

const PersonalInfo2 = ({ formData, handleChange }) => {
  return (
    <div>
      <h5>Personal Information.</h5>
      <div className="mb-3">
        <label htmlFor="date_of_birth" className="form-label">
          Date of Birth
        </label>
        <input
          type="text"
          className="form-control"
          id="date_of_birth"
          name="date_of_birth"
          value={formData.date_of_birth}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="gender" className="form-label">
          Gender
        </label>
        <input
          type="text"
          className="form-control"
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="nationality" className="form-label">
          Nationality
        </label>
        <input
          type="text"
          className="form-control"
          id="nationality"
          name="nationality"
          value={formData.nationality}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="marital_status" className="form-label">
          Marital Status
        </label>
        <input
          type="text"
          className="form-control"
          id="marital_status"
          name="marital_status"
          value={formData.marital_status}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="confirm_password" className="form-label">
          Confirm Password
        </label>
        <input
          type="password"
          className="form-control"
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
