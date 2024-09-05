import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate form
  const validate = () => {
    let inputErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      inputErrors.name = "Name is required";
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      inputErrors.email = "Email is required";
    } else if (!emailPattern.test(formData.email)) {
      inputErrors.email = "Invalid email address";
    }

    // Message validation
    if (!formData.message.trim()) {
      inputErrors.message = "Message is required";
    }

    setErrors(inputErrors);
    return Object.keys(inputErrors).length === 0;
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setSubmitted(true);
      setErrors({});

      // Handle the form submission (e.g., send data to a server)
      console.log("Form submitted:", formData);

      // Clear the form
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } else {
      setSubmitted(false);
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      {submitted && (
        <div className="alert alert-success" role="alert">
          Thank you! Your message has been sent.
        </div>
      )}
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && (
            <div className="invalid-feedback">{errors.name}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className={`form-control ${errors.message ? "is-invalid" : ""}`}
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && (
            <div className="invalid-feedback">{errors.message}</div>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
