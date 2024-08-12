import React from "react";

const AcademicBackground = ({ formData, handleChange }) => {
  return (
    <div>
      <h5>Academic Information.</h5>
      <div className="mb-3">
        <label htmlFor="highest_level_of_education" className="form-label">
          Highest level of Education
        </label>
        <input
          type="text"
          className="form-control"
          id="highest_level_of_education"
          name="highest_level_of_education"
          value={formData.highest_level_of_education}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="field_of_study" className="form-label">
          Field of Study
        </label>
        <input
          type="text"
          className="form-control"
          id="field_of_study"
          name="field_of_study"
          value={formData.field_of_study}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="educational_institution" className="form-label">
          Educational Institution
        </label>
        <input
          type="text"
          className="form-control"
          id="educational_institution"
          name="educational_institution"
          value={formData.educational_institution}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="graduation_year" className="form-label">
          Graduation year
        </label>
        <input
          type="text"
          className="form-control"
          id="graduation_year"
          name="graduation_year"
          value={formData.graduation_year}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="academic_document_upload" className="form-label">
          Upload Academic Document
        </label>
        <input
          type="file"
          className="form-control"
          id="academic_document_upload"
          name="academic_document_upload"
          value={formData.academic_document_upload}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="additional_document_upload" className="form-label">
          Upload Any Other Document
        </label>
        <input
          type="file"
          className="form-control"
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
