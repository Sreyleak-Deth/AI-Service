import React from 'react';

function CategoryList({ services, selectedCategory, onCategorySelect }) {
  const categories = [...new Set(services.map((service) => service.category))];

  return (
    <div className="category-list">
      <div className="category-buttons">
        <button
          onClick={() => onCategorySelect(null)}
          className={!selectedCategory ? 'active' : ''}
        >
          All
        </button>
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => onCategorySelect(category)}
            className={selectedCategory === category ? 'active' : ''}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
