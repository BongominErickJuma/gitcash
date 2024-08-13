import React from "react";

const AdditionalInfo = ({ formData, handleChange }) => {
  return (
    <div>
      <h5>Additional Information.</h5>
      <div className="mb-3">
        <label htmlFor="prefered_communication_method">
          <i className="bi bi-chat-dots-fill me-2"></i> Preferred Communication
          Method
        </label>
        <input
          type="text"
          id="prefered_communication_method"
          name="prefered_communication_method"
          value={formData.prefered_communication_method}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="preferred_language">
          <i className="bi bi-translate me-2"></i> Preferred Language
        </label>
        <input
          type="text"
          id="preferred_language"
          name="preferred_language"
          value={formData.preferred_language}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="how_did_you_hear_about_us">
          <i className="bi bi-megaphone-fill me-2"></i> How did you hear about
          us
        </label>
        <input
          type="text"
          id="how_did_you_hear_about_us"
          name="how_did_you_hear_about_us"
          value={formData.how_did_you_hear_about_us}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="comment">
          <i className="bi bi-chat-left-text-fill me-2"></i> Comment
        </label>
        <input
          type="text"
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
