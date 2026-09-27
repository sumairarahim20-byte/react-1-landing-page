import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top py-3">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand fw-bold fs-3 text-success d-flex align-items-center" href="#home">
          🌱 EcoMart
        </a>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links & CTA */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto me-4 fw-semibold">
            <li className="nav-item">
              <a className="nav-link text-dark px-3" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark px-3" href="#features">Why Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark px-3" href="#products">Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark px-3" href="#impact">Impact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark px-3" href="#reviews">Reviews</a>
            </li>
          </ul>

          <button className="btn btn-success rounded-pill px-4 py-2 fw-semibold shadow-sm">
            Shop Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;