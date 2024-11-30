
import React from 'react';
import { Link } from 'react-router-dom';

const CakeCard = ({ cake }) => {
  return (
    <div className="cake-card">
      <img src={cake.imageUrl} alt={cake.name} />
      <h3>{cake.name}</h3>
      <p>{cake.description}</p>
      <Link to={`/cake/${cake.id}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
};

export default CakeCard;
