import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import "../fileupload.css"; // Import your CSS file for styling

const Orginfo2 = ({ formData, handleChange, handleFileUpload }) => {
  const [logoPreview, setLogoPreview] = useState(null);

  const onDropLogo = (acceptedFiles) => {
    const file = acceptedFiles[0];
    handleFileUpload("company_logo", file);

    // Generate a preview URL for the image
    const previewUrl = URL.createObjectURL(file);
    setLogoPreview(previewUrl);
  };

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop: onDropLogo,
    accept: ".jpg, .jpeg, .png", // Adjust the accepted file types as needed
  });

  return (
    <div>
      <h5>Organization Information.</h5>
      <div className="mb-3">
        <label htmlFor="company_description">
          <i className="bi bi-info-circle-fill me-2"></i> Organisation
          Description
        </label>
        <input
          type="text"
          id="company_description"
          name="company_description"
          value={formData.company_description}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="company_logo">
          <i className="bi bi-image-fill me-2"></i> Logo
        </label>
        <div
          {...getRootProps()}
          className={`dropzone ${isDragActive ? "drag-active" : ""} ${
            isDragAccept ? "drag-accept" : ""
          } ${isDragReject ? "drag-reject" : ""}`}
        >
          <input {...getInputProps()} />
          <p>Drag 'n' drop your logo here, or click to select a file</p>
          {logoPreview && (
            <img
              src={logoPreview}
              alt="Logo Preview"
              className="logo-preview"
            />
          )}
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="company_business_type">
          <i className="bi bi-briefcase-fill me-2"></i> Business Type
        </label>
        <input
          type="text"
          id="company_business_type"
          name="company_business_type"
          value={formData.company_business_type}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="company_industry">
          <i className="bi bi-building me-2"></i> Organization Industry
        </label>
        <input
          type="text"
          id="company_industry"
          name="company_industry"
          value={formData.company_industry}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="company_date_of_incorperation">
          <i className="bi bi-calendar-fill me-2"></i> Date of Incorporation
        </label>
        <input
          type="date" // Use date input type for better date handling
          id="company_date_of_incorperation"
          name="company_date_of_incorperation"
          value={formData.company_date_of_incorperation}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  );
};

export default Orginfo2;
