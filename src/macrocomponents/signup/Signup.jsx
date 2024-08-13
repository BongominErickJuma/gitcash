import React, { useState, useEffect } from "react";
import IndividualSignup from "./IndividualSignup/IndividualSignup"; // Assuming these components exist
import OrganizationSignup from "./OrganizationSignup/OrganizationSignup";

const Signup = () => {
  const [signupType, setSignupType] = useState(null);

  const randomSentences = [
    "The quick brown fox jumps over the lazy dog.",
    "A rolling stone gathers no moss.",
    "Time flies when you're having fun.",
  ];

  const bulletPoints = [
    "Bullet point one",
    "Bullet point two",
    "Bullet point three",
    "Bullet point four",
    "Bullet point five",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [bullets, setBullets] = useState([]);
  const [bulletIndex, setBulletIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (signupType) {
      // Start typing only if signupType is set
      if (currentIndex < randomSentences.length) {
        const sentence = randomSentences[currentIndex];

        const typingInterval = setInterval(() => {
          if (charIndex < sentence.length) {
            setDisplayText((prev) => prev + sentence[charIndex]);
            setCharIndex((prev) => prev + 1);
          } else {
            clearInterval(typingInterval);
            setCurrentIndex((prev) => prev + 1);
            setCharIndex(0);
          }
        }, 50); // Adjust the typing speed here (ms per character)

        return () => clearInterval(typingInterval);
      } else if (bulletIndex < bulletPoints.length) {
        const bullet = bulletPoints[bulletIndex];

        const bulletTypingInterval = setInterval(() => {
          if (charIndex < bullet.length) {
            setBullets((prev) => {
              const updatedBullets = [...prev];
              if (!updatedBullets[bulletIndex]) {
                updatedBullets[bulletIndex] = "";
              }
              updatedBullets[bulletIndex] += bullet[charIndex];
              return updatedBullets;
            });
            setCharIndex((prev) => prev + 1);
          } else {
            clearInterval(bulletTypingInterval);
            setBulletIndex((prev) => prev + 1);
            setCharIndex(0);
          }
        }, 50); // Adjust the typing speed here (ms per character)

        return () => clearInterval(bulletTypingInterval);
      }
    }
  }, [signupType, currentIndex, bulletIndex, charIndex]);

  const handleSignupType = (type) => {
    setSignupType(type);
    setCurrentIndex(0);
    setBulletIndex(0);
    setCharIndex(0);
    setDisplayText("");
    setBullets([]);
  };

  const renderSignupForm = () => {
    if (signupType === "individual") {
      return <IndividualSignup />;
    } else if (signupType === "organization") {
      return <OrganizationSignup />;
    } else {
      return (
        <>
          <div className="col-lg-5 bg-info py-5 px-2">
            <a
              className="btn w-100 p-5"
              onClick={() => handleSignupType("individual")}
            >
              <i className="bi bi-person fs-1"></i>
              <h2>Sign up as Individual</h2>
            </a>
          </div>

          <div className="col-lg-5 bg-info py-5 px-2">
            <a
              className="btn w-100 p-5 "
              onClick={() => handleSignupType("organization")}
            >
              <i className="bi bi-people fs-1"></i>
              <h2>Sign up as Organization</h2>
            </a>
          </div>
        </>
      );
    }
  };

  return (
    <div className="container min-vh-100 account-form d-flex justify-content-center align-items-start account-page">
      <div className="row w-100 d-flex justify-content-between align-items-center">
        <h2 className="card-title text-start mb-5 fw-bold">
          Sign up for GitCash
        </h2>

        {!signupType ? (
          renderSignupForm()
        ) : (
          <div className="row">
            <div className="col-lg-4">{renderSignupForm()}</div>
            <div className="col-lg-7 mx-auto p-3">
              <div>
                <h2 className="fw-light">{displayText}</h2>
                <ul>
                  {bullets.map((bullet, index) => (
                    <li key={index} className="ps-5">
                      <h2 className="fw-bold">{bullet}</h2>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Signup;
