import React from 'react';

function CategoryCard({ service }) {
  return (
    <div className="category-card">
      <img src={service.imageUrl} alt={service.name} className="card-image" />
      <h3>{service.name}</h3>
      <p>{service.description}</p>
      <button>Learn More</button>
    </div>
  );
}

export default CategoryCard;
