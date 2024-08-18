import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import "../fileupload.css";

const FileFields = ({ formData, handleChange, handleFileUpload }) => {
  const [idCardFrontPreview, setIdCardFrontPreview] = useState(null);
  const [idCardBackPreview, setIdCardBackPreview] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);

  const onDropIdCardFront = (acceptedFiles) => {
    const file = acceptedFiles[0];
    handleFileUpload("identification_card_scan_front", file);
    const previewUrl = URL.createObjectURL(file);
    setIdCardFrontPreview(previewUrl);
  };

  const onDropIdCardBack = (acceptedFiles) => {
    const file = acceptedFiles[0];
    handleFileUpload("identification_card_scan_back", file);
    const previewUrl = URL.createObjectURL(file);
    setIdCardBackPreview(previewUrl);
  };

  const onDropPhoto = (acceptedFiles) => {
    const file = acceptedFiles[0];
    handleFileUpload("passport_sized_photo", file);
    const previewUrl = URL.createObjectURL(file);
    setPhotoPreview(previewUrl);
  };

  const {
    getRootProps: getRootPropsIdCardFront,
    getInputProps: getInputPropsIdCardFront,
  } = useDropzone({ onDrop: onDropIdCardFront, accept: ".jpg, .jpeg, .png" });

  const {
    getRootProps: getRootPropsIdCardBack,
    getInputProps: getInputPropsIdCardBack,
  } = useDropzone({ onDrop: onDropIdCardBack, accept: ".jpg, .jpeg, .png" });

  const { getRootProps: getRootPropsPhoto, getInputProps: getInputPropsPhoto } =
    useDropzone({ onDrop: onDropPhoto, accept: ".jpg, .jpeg, .png" });

  return (
    <div>
      <h5>National ID or Passport.</h5>

      <div className="mb-3">
        <label htmlFor="identification_number">
          <i className="bi bi-card-text me-2"></i> NIN or Passport Number
        </label>
        <input
          type="text"
          id="identification_number"
          name="identification_number"
          value={formData.identification_number}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="identification_card_scan_front">
          <i className="bi bi-file-earmark-arrow-up-fill me-2"></i> National ID
          / Passport Front Page Upload
        </label>
        <div
          {...getRootPropsIdCardFront()}
          className={`dropzone ${idCardFrontPreview ? "with-preview" : ""}`}
        >
          <input {...getInputPropsIdCardFront()} />
          <div className="d-flex flex-column align-items-center justify-content-evently ">
            <p>Drag 'n' drop here, or click to select a file</p>
            <i className="bi bi-upload fs-2"></i>
          </div>
          {idCardFrontPreview && (
            <img
              src={idCardFrontPreview}
              alt="ID Card Front Preview"
              className="preview-img"
            />
          )}
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="identification_card_scan_back ">
          <i className="bi bi-file-earmark-arrow-up-fill me-2"></i> National /
          Passport Back Page Upload
        </label>
        <div
          {...getRootPropsIdCardBack()}
          className={`dropzone ${idCardBackPreview ? "with-preview" : ""}`}
        >
          <input {...getInputPropsIdCardBack()} />
          <div className="d-flex flex-column align-items-center justify-content-evently ">
            <p>Drag 'n' drop here, or click to select a file</p>
            <i className="bi bi-upload fs-2"></i>
          </div>
          {idCardBackPreview && (
            <img
              src={idCardBackPreview}
              alt="ID Card Back Preview"
              className="preview-img"
            />
          )}
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="passport_sized_photo">
          <i className="bi bi-camera-fill me-2"></i> Photo
        </label>
        <div
          {...getRootPropsPhoto()}
          className={`dropzone ${photoPreview ? "with-preview" : ""}`}
        >
          <input {...getInputPropsPhoto()} />
          <div className="d-flex flex-column align-items-center justify-content-evently ">
            <p>Drag 'n' drop here, or click to select a file</p>
            <i className="bi bi-upload fs-2"></i>
          </div>
          {photoPreview && (
            <img
              src={photoPreview}
              alt="Photo Preview"
              className="preview-img"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default FileFields;
