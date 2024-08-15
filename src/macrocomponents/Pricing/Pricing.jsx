import React from "react";
import pricingCards from "./pricingCards";
import "./pricingCards.css"; // Include a CSS file for styling

const PricingCards = () => {
  return (
    <div className="container pricing-container">
      {pricingCards.map((card, index) => (
        <div key={index} className="pricing-card shadow rounded-4">
          <h3 className="pricing-title">{card.title}</h3>
          <p className="pricing-price">{card.price}</p>
          <ul className="pricing-features">
            {card.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
          <button className="pricing-button">Choose Plan</button>
        </div>
      ))}
    </div>
  );
};

export default PricingCards;
