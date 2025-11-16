import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Signed in successfully! Welcome back.');
    setFormData({ email: '', password: '' });
  };

  return (
    <main>
      <section className="page-header">
        <div className="page-header-content">
          <h1>Sign In</h1>
          <p>Access your account to manage bookings and preferences</p>
        </div>
      </section>

      <section className="auth-section">
        <div className="auth-container">
          <form className="auth-form" onSubmit={handleSubmit}>
            <h2>Welcome Back</h2>

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

            <button type="submit" className="btn btn-primary">Sign In</button>

            <p className="auth-link">Don't have an account? <Link to="/signup">Sign Up</Link></p>
          </form>
        </div>
      </section>
    </main>
  );
};

export default SignIn;