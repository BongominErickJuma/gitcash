import React from "react";

const AdditionalInfo = ({ formData, handleChange }) => {
  return (
    <div>
      <h5>Additional Information.</h5>
      <div className="mb-3">
        <label htmlFor="prefered_communication_method" className="form-label">
          Preferred Communication Method
        </label>
        <input
          type="text"
          className="form-control"
          id="prefered_communication_method"
          name="prefered_communication_method"
          value={formData.prefered_communication_method}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="preferred_language" className="form-label">
          Preferred Language
        </label>
        <input
          type="text"
          className="form-control"
          id="preferred_language"
          name="preferred_language"
          value={formData.preferred_language}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="how_did_you_hear_about_us" className="form-label">
          How did you hear about us.
        </label>
        <input
          type="text"
          className="form-control"
          id="how_did_you_hear_about_us"
          name="how_did_you_hear_about_us"
          value={formData.how_did_you_hear_about_us}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="comment" className="form-label">
          Comment
        </label>
        <input
          type="text"
          className="form-control"
          id="comment"
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  );
};

export default AdditionalInfo;
