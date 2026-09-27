import React, { useEffect } from 'react';

const HeroSection = () => {
  useEffect(() => {
    // GSAP Animation using fromTo for reliable rendering
    if (window.gsap) {
      window.gsap.fromTo(
        '.hero-badge',
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
      );
      window.gsap.fromTo(
        '.hero-title',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: 'power2.out' }
      );
      window.gsap.fromTo(
        '.hero-desc',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.4, ease: 'power2.out' }
      );
      window.gsap.fromTo(
        '.hero-btn',
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.5, delay: 0.6, ease: 'back.out(1.7)', stagger: 0.15 }
      );
      window.gsap.fromTo(
        '.hero-img',
        { opacity: 0, x: 40 },
        { opacity: 1, x: 0, duration: 0.8, delay: 0.3, ease: 'power2.out' }
      );
    }
  }, []);

  return (
    <section id="home" className="py-5 bg-light align-items-center d-flex min-vh-100 position-relative overflow-hidden">
      <div className="container py-5">
        <div className="row align-items-center g-5">
          {/* Left Column - Text Content */}
          <div className="col-lg-6">
            <span className="hero-badge badge bg-success text-white px-3 py-2 rounded-pill mb-3 fw-semibold fs-6 shadow-sm d-inline-block">
              🌱 100% Organic & Eco-Friendly
            </span>

            <h1 className="hero-title display-4 fw-bold lh-sm text-dark mb-3">
              Pure Products for a <span className="text-success">Greener Planet</span>
            </h1>

            <p className="hero-desc lead text-dark mb-4 fs-5 fw-normal">
              Discover sustainably sourced, zero-waste, and chemical-free products carefully chosen to elevate your lifestyle while saving the Earth.
            </p>

            <div className="d-flex flex-wrap gap-3">
              <a href="#products" className="hero-btn btn btn-success btn-lg rounded-pill px-4 py-3 fw-bold shadow">
                Explore Shop ➔
              </a>
              <a href="#features" className="hero-btn btn btn-outline-success btn-lg rounded-pill px-4 py-3 fw-bold border-2">
                Learn More
              </a>
            </div>
          </div>

          {/* Right Column - Hero Visual */}
          <div className="col-lg-6 text-center">
            <div className="hero-img position-relative">
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80"
                alt="Eco-Friendly Products"
                className="img-fluid rounded-4 shadow-lg border border-2 border-white"
                style={{ maxHeight: '480px', width: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;