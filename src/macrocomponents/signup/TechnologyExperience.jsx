import React from "react";

const TechnologyExperience = ({ formData, handleChange }) => {
  return (
    <div>
      <div className="mb-3">
        <label htmlFor="technologies" className="form-label">
          Technologies Used
        </label>
        <input
          type="text"
          className="form-control"
          id="technologies"
          name="technologies"
          value={formData.technologies}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="experience" className="form-label">
          Years of Experience
        </label>
        <input
          type="text"
          className="form-control"
          id="experience"
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="company" className="form-label">
          Company Name
        </label>
        <input
          type="text"
          className="form-control"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  );
};

export default TechnologyExperience;
