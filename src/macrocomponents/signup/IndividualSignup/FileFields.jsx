import React from "react";

const FileFields = ({ formData, handleChange }) => {
  return (
    <div>
      <h5>National ID or Passport.</h5>

      <div className="mb-3">
        <label htmlFor="identification_number" className="form-label">
          NIN or Passport Number
        </label>
        <input
          type="text"
          className="form-control"
          id="identification_number"
          name="identification_number"
          value={formData.identification_number}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="identification_card_scan" className="form-label">
          National Id or Passport Upload
        </label>
        <input
          type="file"
          className="form-control"
          id="identification_card_scan"
          name="identification_card_scan"
          value={formData.identification_card_scan}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="pasport_sized_photo" className="form-label">
          Photo
        </label>
        <input
          type="file"
          className="form-control"
          id="pasport_sized_photo"
          name="pasport_sized_photo"
          value={formData.pasport_sized_photo}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default FileFields;
