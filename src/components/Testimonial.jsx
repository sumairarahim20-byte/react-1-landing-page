import React from 'react';

const reviewsList = [
  {
    id: 1,
    name: 'Ayesha Khan',
    role: 'Verified Buyer',
    comment: 'The bamboo toothbrushes and tote bags are top quality! Super fast delivery and zero plastic packaging.',
    rating: '⭐⭐⭐⭐⭐'
  },
  {
    id: 2,
    name: 'Bilal Ahmed',
    role: 'Eco Enthusiast',
    comment: 'EcoMart has made switching to a sustainable lifestyle so easy. I love their stainless steel water bottles!',
    rating: '⭐⭐⭐⭐⭐'
  },
  {
    id: 3,
    name: 'Saima Raza',
    role: 'Regular Customer',
    comment: 'The natural herbal soaps are extremely gentle on skin and smell amazing. Highly recommended!',
    rating: '⭐⭐⭐⭐⭐'
  }
];

const Testimonials = () => {
  return (
    <section id="reviews" className="py-5 bg-white">
      <div className="container py-4">
        {/* Section Heading */}
        <div className="text-center mb-5">
          <span className="badge bg-success-subtle text-success px-3 py-2 rounded-pill fw-semibold mb-2">
            Customer Reviews
          </span>
          <h2 className="display-6 fw-bold text-dark">What Our Community Says</h2>
          <p className="text-muted col-lg-6 mx-auto">
            Read real feedback from happy customers who made the switch to sustainable living with EcoMart.
          </p>
        </div>

        {/* Reviews Cards */}
        <div className="row g-4">
          {reviewsList.map((item) => (
            <div key={item.id} className="col-md-4">
              <div className="card h-100 border-0 shadow-sm p-4 rounded-4 bg-light">
                <div className="card-body d-flex flex-column">
                  <div className="mb-3 fs-5">{item.rating}</div>
                  <p className="card-text text-dark fst-italic mb-4">"{item.comment}"</p>
                  <div className="mt-auto d-flex align-items-center">
                    <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center fw-bold me-3" style={{ width: '45px', height: '45px' }}>
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <h6 className="fw-bold mb-0 text-dark">{item.name}</h6>
                      <small className="text-muted">{item.role}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;