export default function Gallery() {
  const galleryData = [
    { type: 'tall', caption: 'Grand Dining Hall', img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&q=80', dClass: '' },
    { type: 'normal', caption: 'Biryani Royal', img: 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&w=400&q=80', dClass: 'reveal-d1' },
    { type: 'wide', caption: 'Candlelit Evening', img: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80', dClass: 'reveal-d2' },
    { type: 'normal', caption: 'Tandoori Selection', img: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=400&q=80', dClass: 'reveal-d1' },
    { type: 'normal', caption: 'Dessert Artistry', img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=400&q=80', dClass: 'reveal-d2' },
    { type: 'normal', caption: 'Garden Terrace', img: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=400&q=80', dClass: 'reveal-d3' },
  ];

  return (
    <>
      <section id="gallery">
        <div className="gallery-header">
          <div className="section-eyebrow reveal">Our Ambiance</div>
          <h2 className="section-title reveal">The <em>Gallery</em></h2>
        </div>
        <div className="gallery-grid">
          {galleryData.map((item, index) => (
            <div key={index} className={`gallery-item ${item.type === 'normal' ? '' : item.type} reveal ${item.dClass}`}>
              <img src={item.img} alt={item.caption} style={{ display: 'block' }} />
              <div className="gallery-item-overlay">
                <div className="g-caption">{item.caption}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="section-divider"></div>
    </>
  );
}
