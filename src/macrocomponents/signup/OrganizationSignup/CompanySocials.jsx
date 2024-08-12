import React from "react";

const CompanySocials = ({ formData, handleChange }) => {
  return (
    <div>
      <h5>organization Social Media.</h5>
      <div className="mb-3">
        <label htmlFor="linkedin" className="form-label">
          linkedIn
        </label>
        <input
          type="text"
          className="form-control"
          id="linkedin"
          name="linkedin"
          value={formData.linkedin}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="youtube" className="form-label">
          YouTube
        </label>
        <input
          type="text"
          className="form-control"
          id="youtube"
          name="youtube"
          value={formData.youtube}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="others" className="form-label">
          Others
        </label>
        <input
          type="text"
          className="form-control"
          id="others"
          name="others"
          value={formData.others}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default CompanySocials;
