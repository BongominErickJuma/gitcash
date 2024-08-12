import React from "react";

const CompanySecurity = ({ formData, handleChange }) => {
  return (
    <div>
      <h5>Username & Password.</h5>
      <div className="mb-3">
        <label htmlFor="desired_username" className="form-label">
          Desired Username
        </label>
        <input
          type="text"
          className="form-control"
          id="desired_username"
          name="desired_username"
          value={formData.desired_username}
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

export default CompanySecurity;
