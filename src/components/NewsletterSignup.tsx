"use client";

import React, { useState } from "react";

interface NewsletterSignupProps {
  className?: string;
}

export default function NewsletterSignup({ className = "" }: NewsletterSignupProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    consent: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Newsletter signup:", formData);
  };

  return (
    <section className={`newsletter-signup banner ${className}`}>
      <div className="container">
        <div className="newsletter-content">
          <header className="newsletter-header">
            <h2 className="newsletter-title">GET THE LATEST FROM RACKETPRO</h2>
            <p className="newsletter-subtitle">
              Add your email below to stay up to date with announcements and our launch deals
            </p>
          </header>

          <div className="newsletter-form-container">
            <form onSubmit={handleSubmit} className="newsletter-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Enter Your First Name"
                    className="form-input newsletter-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName" className="form-label">
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Enter Your Last Name"
                    className="form-input newsletter-input"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter Your Email"
                  className="form-input newsletter-input"
                  required
                />
              </div>

              <div className="form-actions">
                <div className="consent-group">
                  <label className="consent-label">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleInputChange}
                      className="consent-checkbox"
                      required
                    />
                    <span className="consent-checkmark">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <rect x="0.5" y="0.5" width="17" height="17" rx="2.5" fill="#F76900" stroke="#F76900" />
                        <path
                          d="M5 9L8 12L13 6"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="consent-text">I consent to receiving email communication from RPO</span>
                  </label>
                </div>

                <button type="submit" className="btn newsletter-submit-btn" disabled={!formData.consent}>
                  <svg className="btn-icon" width="14" height="19" viewBox="0 0 14 19" fill="none">
                    <path
                      d="M1 9.5L13 9.5M13 9.5L7 3.5M13 9.5L7 15.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Paddle me in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
