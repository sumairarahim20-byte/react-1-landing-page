import React from 'react';

const productsList = [
  {
    id: 1,
    name: 'Bamboo Toothbrush Set',
    category: 'Personal Care',
    price: '$12.99',
    rating: '⭐ 4.9',
    image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 2,
    name: 'Organic Cotton Tote Bag',
    category: 'Lifestyle',
    price: '$18.50',
    rating: '⭐ 4.8',
    image: 'https://images.unsplash.com/photo-1597484661643-2f5fef640dd1?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 3,
    name: 'Stainless Steel Water Bottle',
    category: 'Accessories',
    price: '$24.00',
    rating: '⭐ 5.0',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 4,
    name: 'Natural Herbal Soap Bar',
    category: 'Skincare',
    price: '$8.99',
    rating: '⭐ 4.7',
    image: 'https://images.unsplash.com/photo-1607006344380-b6775a0824a7?auto=format&fit=crop&w=500&q=80'
  }
];

const Products = () => {
  return (
    <section id="products" className="py-5 bg-light">
      <div className="container py-4">
        {/* Section Heading */}
        <div className="text-center mb-5">
          <span className="badge bg-success-subtle text-success px-3 py-2 rounded-pill fw-semibold mb-2">
            Our Collection
          </span>
          <h2 className="display-6 fw-bold text-dark">Trending Eco Products</h2>
          <p className="text-muted col-lg-6 mx-auto">
            Explore our bestselling sustainable items designed for daily use without harming the environment.
          </p>
        </div>

        {/* Products Grid */}
        <div className="row g-4">
          {productsList.map((product) => (
            <div key={product.id} className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="card-img-top"
                  style={{ height: '220px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column p-4">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="badge bg-light text-success fw-semibold border border-success-subtle">
                      {product.category}
                    </span>
                    <small className="fw-bold text-warning">{product.rating}</small>
                  </div>
                  <h5 className="card-title fw-bold text-dark mb-2 fs-6">{product.name}</h5>
                  <div className="mt-auto pt-3 d-flex justify-content-between align-items-center">
                    <span className="fw-bold fs-5 text-success">{product.price}</span>
                    <button className="btn btn-outline-success btn-sm rounded-pill px-3 fw-semibold">
                      Add to Cart
                    </button>
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

export default Products;