import React from 'react';

const featuresList = [
  {
    id: 1,
    icon: '🌱',
    title: '100% Organic',
    description: 'All our products are sourced directly from certified organic farms without any synthetic additives.'
  },
  {
    id: 2,
    icon: '📦',
    title: 'Zero Waste Packaging',
    description: 'We use 100% biodegradable and recyclable materials to make sure zero plastic enters landfills.'
  },
  {
    id: 3,
    icon: '⚡',
    title: 'Carbon-Neutral Delivery',
    description: 'Every shipment is offset with tree plantation initiatives to maintain a zero carbon footprint.'
  },
  {
    id: 4,
    icon: '🛡️',
    title: 'Cruelty Free',
    description: 'Tested on humans, never on animals. Guaranteed ethically produced goods for everyday living.'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-5 bg-white">
      <div className="container py-4">
        {/* Section Heading */}
        <div className="text-center mb-5">
          <span className="badge bg-success-subtle text-success px-3 py-2 rounded-pill fw-semibold mb-2">
            Why Choose Us
          </span>
          <h2 className="display-6 fw-bold text-dark">Making Sustainable Living Easy</h2>
          <p className="text-muted col-lg-6 mx-auto">
            We are on a mission to reduce waste and provide healthier alternatives for your everyday household needs.
          </p>
        </div>

        {/* Features Cards Grid */}
        <div className="row g-4">
          {featuresList.map((item) => (
            <div key={item.id} className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm p-3 text-center rounded-4 hover-top transition">
                <div className="card-body">
                  <div className="fs-1 mb-3 bg-light rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: '70px', height: '70px' }}>
                    {item.icon}
                  </div>
                  <h5 className="card-title fw-bold text-dark mb-2">{item.title}</h5>
                  <p className="card-text text-muted fs-6">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;