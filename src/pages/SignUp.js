import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    alert('Account created successfully! Welcome to Marwa Safaris.');
    setFormData({ name: '', email: '', password: '', confirmPassword: '' });
  };

  return (
    <main>
      <section className="page-header">
        <div className="page-header-content">
          <h1>Sign Up</h1>
          <p>Join us for exclusive safari deals and updates</p>
        </div>
      </section>

      <section className="auth-section">
        <div className="auth-container">
          <form className="auth-form" onSubmit={handleSubmit}>
            <h2>Create Account</h2>

            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary">Sign Up</button>

            <p className="auth-link">Already have an account? <Link to="/signin">Sign In</Link></p>
          </form>
        </div>
      </section>
    </main>
  );
};

export default SignUp;