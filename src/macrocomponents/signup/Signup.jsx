import React, { useState } from "react";
import IndividualSignup from "./IndividualSignup/IndividualSignup"; // Assuming these components exist
import OrganizationSignup from "./OrganizationSignup/OrganizationSignup";

const Signup = () => {
  const [signupType, setSignupType] = useState(null);

  const renderSignupForm = () => {
    if (signupType === "individual") {
      return <IndividualSignup />;
    } else if (signupType === "organization") {
      return <OrganizationSignup />;
    } else {
      return (
        <div className="d-flex flex-column align-items-center">
          <button
            className="btn btn-primary mb-3 w-100"
            onClick={() => setSignupType("individual")}
          >
            Sign up as Individual
          </button>
          <button
            className="btn btn-secondary w-100"
            onClick={() => setSignupType("organization")}
          >
            Sign up as Organization
          </button>
        </div>
      );
    }
  };

  return (
    <div className="container min-vh-100 mt-5 account-form d-flex justify-content-center align-items-center">
      <div className="row w-100 d-flex justify-content-center align-items-center">
        <div className="col-4">
          <div className="card mt-5">
            <div className="card-body">
              <h2 className="card-title text-start mb-3">
                Sign up for GitCash
              </h2>
              {renderSignupForm()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
