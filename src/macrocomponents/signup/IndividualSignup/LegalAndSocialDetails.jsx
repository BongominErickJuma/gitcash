import React from "react";

const LegalAndSocialDetails = ({ formData, handleChange }) => {
  return (
    <div>
      <h5>Legal And Social Details.</h5>
      <div className="mb-3">
        <label htmlFor="tax_identification_number" className="form-label">
          Tax Identification number (TIN)
        </label>
        <input
          type="text"
          className="form-control"
          id="tax_identification_number"
          name="tax_identification_number"
          value={formData.tax_identification_number}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="social_security_number" className="form-label">
          Social Security Number
        </label>
        <input
          type="text"
          className="form-control"
          id="social_security_number"
          name="social_security_number"
          value={formData.social_security_number}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="criminal_record" className="form-label">
          Criminal Record
        </label>
        <input
          type="text"
          className="form-control"
          id="criminal_record"
          name="criminal_record"
          value={formData.criminal_record}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label
          htmlFor="criminal_record_clearence_upload"
          className="form-label"
        >
          Criminal Clearance File Upload
        </label>
        <input
          type="file"
          className="form-control"
          id="criminal_record_clearence_upload"
          name="criminal_record_clearence_upload"
          value={formData.criminal_record_clearence_upload}
          onChange={handleChange}
        />
      </div>
      <h5>Social Media Profile</h5>
      {/* <div className="mb-3">
        <label htmlFor="social_media_profile" className="form-label">
          Facebook
        </label>
        <input
          type="text"
          className="form-control"
          id="social_media_profile"
          name="social_media_profile"
          value={formData.social_media_profile.facebook}
          onChange={handleChange}
          required
        />
      </div> */}
    </div>
  );
};

export default LegalAndSocialDetails;
