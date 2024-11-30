import React from 'react';

const About = () => {
  return (
    <div className="about">
      <h2>About Us</h2>
      <p>Welcome to CasaRasa, your go-to destination for fresh, delicious, and high-quality food delivered right to your doorstep. We are passionate about bringing the finest ingredients and mouthwatering dishes to your table, ensuring every bite is a delightful experience..</p>
      <h3>Contact Us</h3>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Your Message" />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default About;
