import { useState } from 'react';
import HeroImageSequence from './HeroImageSequence';

export default function Hero() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  return (
    <>
      <section className="hero" style={{ background: '#000000' }}>
        <div className="hero-sticky">
          <HeroImageSequence />

          <div className="hero-content">
            <div className="hero-eyebrow">Est. 1998 · Authentic Indian Cuisine</div>
            <h1 className="hero-title">
              <em>A Taste of</em>
              <strong>Royal India</strong>
            </h1>
            <p className="hero-subtitle">
              Where ancient spices meet modern artistry. Every dish is a journey through India's most treasured culinary traditions, crafted with love and served with grace.
            </p>
            <div className="hero-actions">
              <button className="btn-primary" onClick={() => setIsOrderModalOpen(true)}>
                Order Online
              </button>
              <a href="#menu" className="btn-secondary">Explore Menu</a>
            </div>
          </div>

          <div className="scroll-indicator">
            <div className="scroll-line"></div>
            <div className="scroll-text">Scroll</div>
          </div>

          <div className="stats-bar">
            <div className="stat-item"><div className="stat-icon">⭐</div><div><div className="stat-num">4.9</div><div className="stat-label">Guest Rating</div></div></div>
            <div className="stat-item"><div className="stat-icon">🍽️</div><div><div className="stat-num">120+</div><div className="stat-label">Signature Dishes</div></div></div>
            <div className="stat-item"><div className="stat-icon">👨‍🍳</div><div><div className="stat-num">25yr</div><div className="stat-label">Culinary Heritage</div></div></div>
            <div className="stat-item"><div className="stat-icon">🏆</div><div><div className="stat-num">12</div><div className="stat-label">Awards Won</div></div></div>
          </div>
        </div>
      </section>

      {/* Order Float Window */}
      <div className={`order-modal ${isOrderModalOpen ? 'active' : ''}`} id="orderModal">
        <div className="order-modal-content">
          <button className="order-modal-close" onClick={() => setIsOrderModalOpen(false)}>×</button>
          <div className="order-modal-title">Choose <em>Delivery</em></div>
          <a href="https://www.zomato.com/bangalore/food-palace-family-restaurant-broasted-king-kengeri-bangalore/order" target="_blank" rel="noreferrer" className="order-modal-btn">Order on Zomato</a>
          <a href="https://www.swiggy.com/city/bangalore/food-palace-family-restaurant-rajarajeshwari-nagar-rajarajeshwari-nagar-rest1314012?utm_source=GooglePlaceOrder&utm_campaign=GoogleMap&is_retargeting=true&media_source=GooglePlaceOrder" target="_blank" rel="noreferrer" className="order-modal-btn swiggy">Order on Swiggy</a>
        </div>
      </div>
    </>
  );
}
