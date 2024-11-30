
import React from 'react';

const CakeCategories = ({ categories, selectCategory }) => {
  return (
    <div className="cake-categories">
      <h2>Select Cake Category</h2>
      <div className="category-list">
        {categories.map(category => (
          <button key={category} onClick={() => selectCategory(category)}>
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CakeCategories;
