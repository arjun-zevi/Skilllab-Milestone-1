
import React from 'react';
import CakeCard from './CakeCard';

const Home = ({ featuredCakes }) => {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Casa Rasa</h1>
        <p>Delicious Foods for you</p>
      </header>

      <section className="featured-cakes">
        <h2>Featured Items</h2>
        <div className="cake-cards">
          {featuredCakes.map(cake => (
            <CakeCard key={cake.id} cake={cake} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
