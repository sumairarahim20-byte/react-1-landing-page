import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container">
        {/* Newsletter Section */}
        <div className="row pb-5 mb-4 border-bottom border-secondary align-items-center">
          <div className="col-lg-6 mb-3 mb-lg-0">
            <h3 className="fw-bold mb-1">Join the Eco Movement 🌱</h3>
            <p className="text-secondary mb-0">Subscribe to get special discounts and sustainable living tips.</p>
          </div>
          <div className="col-lg-6">
            <form onSubmit={(e) => e.preventDefault()} className="d-flex gap-2">
              <input
                type="email"
                className="form-control form-control-lg rounded-pill border-0 px-4"
                placeholder="Enter your email address"
              />
              <button type="submit" className="btn btn-success btn-lg rounded-pill px-4 fw-semibold text-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Links Grid */}
        <div className="row g-4 mb-4">
          <div className="col-md-4">
            <h4 className="fw-bold text-success mb-3">🌱 EcoMart</h4>
            <p className="text-secondary">
              Making sustainable choices simple and accessible for everyone. 100% natural, ethical, and eco-friendly products delivered to your door.
            </p>
          </div>

          <div className="col-md-2 offset-md-1">
            <h6 className="fw-bold mb-3 text-uppercase">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#home" className="text-secondary text-decoration-none">Home</a></li>
              <li className="mb-2"><a href="#features" className="text-secondary text-decoration-none">Why Us</a></li>
              <li className="mb-2"><a href="#products" className="text-secondary text-decoration-none">Products</a></li>
            </ul>
          </div>

          <div className="col-md-2">
            <h6 className="fw-bold mb-3 text-uppercase">Categories</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><span className="text-secondary">Personal Care</span></li>
              <li className="mb-2"><span className="text-secondary">Lifestyle</span></li>
              <li className="mb-2"><span className="text-secondary">Accessories</span></li>
            </ul>
          </div>

          <div className="col-md-3">
            <h6 className="fw-bold mb-3 text-uppercase">Contact Us</h6>
            <p className="text-secondary mb-1">📍 Karachi, Pakistan</p>
            <p className="text-secondary mb-1">📧 support@ecomart.com</p>
            <p className="text-secondary">📞 +92 300 1234567</p>
          </div>
        </div>

        <hr className="border-secondary" />

        {/* Bottom Bar */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center pt-2">
          <p className="text-secondary small mb-0">
            © {new Date().getFullYear()} EcoMart. All rights reserved.
          </p>
          <div className="d-flex gap-3 text-secondary fs-5 mt-2 mt-md-0">
            <span>🌐</span>
            <span>📱</span>
            <span>✉️</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;