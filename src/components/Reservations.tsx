import BookingForm from './BookingForm';

export default function Reservations() {
  return (
    <>
      <section id="reservations">
        <div className="res-container">
          {/* LEFT INFO PANEL */}
          <div className="res-left reveal">
            <div className="res-badge"><span>Book Your Table</span></div>
            <div className="res-main-title">Reserve<em>A Royal Table</em></div>
            <p className="res-tagline">Experience the Real Taste of Malabar — every visit, a memory.</p>

            {/* Hours */}
            <div className="res-info-card">
              <div className="res-card-header">
                <span className="res-card-icon">🕐</span>
                <span className="res-card-title">Opening Hours</span>
              </div>
              <div className="res-card-rows">
                <div className="res-card-row"><strong>Mon–Fri</strong> 12:00 PM – 11:00 PM</div>
                <div className="res-card-row"><strong>Sat–Sun</strong> 11:00 AM – 11:30 PM</div>
                <div className="res-card-row"><strong>Kitchen</strong> closes 30 min before closing</div>
              </div>
            </div>

            {/* Location */}
            <div className="res-info-card">
              <div className="res-card-header">
                <span className="res-card-icon">📍</span>
                <span className="res-card-title">Find Us</span>
              </div>
              <div className="res-card-rows">
                <div className="res-card-row">Building 894, Global Village Back Gate, Mylasandra, RR Nagar, Bengaluru – 560059</div>
                <div className="res-card-row"><strong>📞</strong> 9036 345 101 / 9036 515 101</div>
                <div className="res-card-row"><strong>✉️</strong> foodpalace77@gmail.com</div>
              </div>
            </div>

            {/* Private Dining */}
            <div className="res-info-card">
              <div className="res-card-header">
                <span className="res-card-icon">👑</span>
                <span className="res-card-title">Private Dining</span>
              </div>
              <div className="res-private-grid">
                <div className="res-private-item">
                  <span className="p-icon">🏛️</span>
                  <span className="p-name">Royal Hall</span>
                  <span className="p-cap">Up to 80 guests</span>
                </div>
                <div className="res-private-item">
                  <span className="p-icon">🕯️</span>
                  <span className="p-name">Maharaja Suite</span>
                  <span className="p-cap">Up to 12 guests</span>
                </div>
                <div className="res-private-item">
                  <span className="p-icon">🌿</span>
                  <span className="p-name">Garden Terrace</span>
                  <span className="p-cap">Up to 40 guests</span>
                </div>
                <div className="res-private-item">
                  <span className="p-icon">🍽️</span>
                  <span className="p-name">Catering</span>
                  <span className="p-cap">All party sizes</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FORM PANEL */}
          <div className="res-right reveal reveal-d2 flex items-center justify-center">
            <BookingForm />
          </div>
        </div>
      </section>
      <div className="section-divider"></div>
    </>
  );
}
