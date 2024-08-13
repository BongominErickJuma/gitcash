import React from "react";

const AcademicBackground = ({ formData, handleChange }) => {
  return (
    <div>
      <h5>Academic Information.</h5>
      <div className="mb-3">
        <label htmlFor="highest_level_of_education">
          Highest level of Education
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
        <label htmlFor="field_of_study">Field of Study</label>
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
        <label htmlFor="educational_institution">Educational Institution</label>
        <input
          type="text"
          id="educational_institution"
          name="educational_institution"
          value={formData.educational_institution}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="graduation_year">Graduation year</label>
        <input
          type="text"
          id="graduation_year"
          name="graduation_year"
          value={formData.graduation_year}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="academic_document_upload">
          Upload Academic Document
        </label>
        <input
          type="file"
          id="academic_document_upload"
          name="academic_document_upload"
          value={formData.academic_document_upload}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="additional_document_upload">
          Upload Any Other Document
        </label>
        <input
          type="file"
          id="additional_document_upload"
          name="additional_document_upload"
          value={formData.additional_document_upload}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  );
};

export default AcademicBackground;
