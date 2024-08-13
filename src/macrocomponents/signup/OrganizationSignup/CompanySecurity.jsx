import React from "react";

const CompanySecurity = ({ formData, handleChange }) => {
  return (
    <div>
      <h5>Username & Password.</h5>
      <div className="mb-3">
        <label htmlFor="desired_username">
          <i className="bi bi-person-fill me-2"></i> Desired Username
        </label>
        <input
          type="text"
          id="desired_username"
          name="desired_username"
          value={formData.desired_username}
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

export default CompanySecurity;
