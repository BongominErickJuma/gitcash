import React from "react";

const CompanySecurity = ({ formData, handleChange }) => {
  return (
    <div>
      <h5>Username & Password.</h5>
      <div className="mb-3">
        <label htmlFor="desired_username">Desired Username</label>
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

export default CompanySecurity;
