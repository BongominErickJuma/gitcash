import React from "react";

const PersonalInfo1 = ({ formData, handleChange }) => {
  return (
    <div>
      <h5>Personal Information.</h5>
      <div className="mb-3">
        <label htmlFor="fullname" className="form-label">
          Fullname
        </label>
        <input
          type="text"
          className="form-control"
          id="fullname"
          name="fullname"
          value={formData.fullname}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="phone1" className="form-label">
          Phone Number One
        </label>
        <input
          type="text"
          className="form-control"
          id="phone1"
          name="phone1"
          value={formData.phone1}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="phone2" className="form-label">
          Phone Number Two
        </label>
        <input
          type="text"
          className="form-control"
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
