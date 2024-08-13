import React from "react";

const CompanySocials = ({ formData, handleChange }) => {
  return (
    <div>
      <h5>organization Social Media.</h5>
      <div className="mb-3">
        <label htmlFor="linkedin">linkedIn</label>
        <input
          type="text"
          id="linkedin"
          name="linkedin"
          value={formData.linkedin}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="youtube">YouTube</label>
        <input
          type="text"
          id="youtube"
          name="youtube"
          value={formData.youtube}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="others">Others</label>
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
