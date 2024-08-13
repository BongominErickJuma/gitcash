import React from "react";

const AcademicBackground = ({ formData, handleChange, handleFileUpload }) => {
  return (
    <div>
      <h5>Academic Information.</h5>
      <div className="mb-3">
        <label htmlFor="highest_level_of_education">
          <i className="bi bi-mortarboard-fill me-2"></i> Highest Level of
          Education
        </label>
        <input
          type="text"
          id="highest_level_of_education"
          name="highest_level_of_education"
          value={formData.highest_level_of_education}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="field_of_study">
          <i className="bi bi-book-fill me-2"></i> Field of Study
        </label>
        <input
          type="text"
          id="field_of_study"
          name="field_of_study"
          value={formData.field_of_study}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="educational_institution">
          <i className="bi bi-building me-2"></i> Educational Institution
        </label>
        <input
          type="text"
          id="educational_institution"
          name="educational_institution"
          value={formData.educational_institution}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  );
};

export default AcademicBackground;
