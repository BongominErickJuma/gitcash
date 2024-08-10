import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation and form submission logic here
    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
    } else {
      setError("");
      // Handle form submission (e.g., send data to the backend)
      console.log("Form data submitted:", formData);
    }
  };

  return (
    <div className="container min-vh-100 account-form d-flex  justify-content-center align-items-center">
      <div className="row w-100 d-flex justify-content-center align-items-center">
        <div className="col-4">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-start">Log in to Gitcash</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3" data-aos="zoom-in">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3" data-aos="zoom-in">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                {error && <p className="text-danger">{error}</p>}
                <button
                  type="submit"
                  className="btn btn-primary w-100 border-0"
                >
                  Log in
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
