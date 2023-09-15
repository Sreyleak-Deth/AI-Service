import React, { useState } from 'react';
import '../styles/Service.css';
import CategoryList from './CategoryList';
import CategoryCard from './CategoryCard';
import { sampleData } from '../constants';


function AIService() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const services = selectedCategory
    ? sampleData.filter((service) => service.category === selectedCategory)
    : sampleData;

  return (
    <div className="ai-service">
      <CategoryList
        services={sampleData}
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
      />
      <div className="ai-cards">
        {services.map((service, index) => (
          <CategoryCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
}

export default AIService;
