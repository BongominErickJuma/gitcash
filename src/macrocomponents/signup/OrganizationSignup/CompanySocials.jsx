import React from "react";

const CompanySocials = ({ formData, handleChange }) => {
  return (
    <div>
      <h5>Organization Social Media.</h5>
      <div className="mb-3">
        <label htmlFor="linkedin">
          <i className="bi bi-linkedin me-2"></i> LinkedIn
        </label>
        <input
          type="text"
          id="linkedin"
          name="linkedin"
          value={formData.linkedin}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="youtube">
          <i className="bi bi-youtube me-2"></i> YouTube
        </label>
        <input
          type="text"
          id="youtube"
          name="youtube"
          value={formData.youtube}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="others">
          <i className="bi bi-three-dots me-2"></i> Others
        </label>
        <input
          type="text"
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
