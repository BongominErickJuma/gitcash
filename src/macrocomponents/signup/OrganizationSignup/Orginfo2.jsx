import React from "react";

const Orginfo2 = ({ formData, handleChange }) => {
  return (
    <div>
      <h5>Organization Information.</h5>
      <div className="mb-3">
        <label htmlFor="company_description" className="form-label">
          Organisation Description
        </label>
        <input
          type="text"
          className="form-control"
          id="company_description"
          name="company_description"
          value={formData.company_description}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="company_logo" className="form-label">
          Logo
        </label>
        <input
          type="file"
          className="form-control"
          id="company_logo"
          name="company_logo"
          value={formData.company_logo}
          onChange={handleChange}
          // required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="company_business_type" className="form-label">
          Business Type
        </label>
        <input
          type="text"
          className="form-control"
          id="company_business_type"
          name="company_business_type"
          value={formData.company_business_type}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="company_industry" className="form-label">
          Organization Industry
        </label>
        <input
          type="text"
          className="form-control"
          id="company_industry"
          name="company_industry"
          value={formData.company_industry}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="company_date_of_incorperation" className="form-label">
          Date of Incorporation
        </label>
        <input
          type="email"
          className="form-control"
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
