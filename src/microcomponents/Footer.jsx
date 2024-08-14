import React from "react";
import payment from "../assets/payment.png";

const Footer = () => {
  return (
    <footer id="footer" className="footer dark-background">
      <div className="footer-top">
        <div className="container">
          <div className="col-xl-12 floating-on-border container shadow rounded-4 d-flex align-items-center justify-content-end">
            <h3 className="pt-2">
              Our AI-powered platform increases the pace of software
              development.
            </h3>
          </div>
          <div className="footer-image">
            <img src={payment} alt="payment" className="d-block w-100" />
          </div>
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6 footer-about">
              <a href="index.html" className="logo d-flex align-items-center">
                <span className="sitename">GitCash</span>
              </a>
              <div className="footer-contact pt-3">
                <p>A108 Adam Street</p>
                <p>New York, NY 535022</p>
                <p className="mt-3">
                  <strong>Phone:</strong> <span>+1 5589 55488 55</span>
                </p>
                <p>
                  <strong>Email:</strong> <span>info@example.com</span>
                </p>
              </div>
              <div className="social-links d-flex mt-4">
                <a href="">
                  <i className="bi bi-twitter-x"></i>
                </a>
                <a href="">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bi bi-chevron-right"></i> <a href="#"> Home</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <a href="#"> About us</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <a href="#"> Services</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>
                  <a href="#"> Terms of service</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>
                  <a href="#"> Privacy policy</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i className="bi bi-chevron-right"></i>
                  <a href="#"> Web Design</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>
                  <a href="#"> Web Development</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>
                  <a href="#"> Product Management</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <a href="#"> Marketing</a>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>
                  <a href="#"> Graphic Design</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-12 footer-newsletter">
              <h4>Our Newsletter</h4>
              <p>
                Subscribe to our newsletter and receive the latest news about
                our products and services!
              </p>
              <form
                action="forms/newsletter.php"
                method="post"
                className="php-email-form"
              >
                <div className="newsletter-form">
                  <input type="email" name="email" />
                  <input
                    type="submit"
                    value="Subscribe"
                    className="text-white"
                  />
                </div>
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">
                  Your subscription request has been sent. Thank you!
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright">
        <div className="container text-center">
          <p>
            © <span>Copyright</span>{" "}
            <strong className="px-1 sitename">Gitcash</strong>
            <span>All Rights Reserved</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
