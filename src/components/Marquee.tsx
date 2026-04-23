export default function Marquee() {
  const items = [
    'Butter Chicken', 'Biryani', 'Rogan Josh', 'Palak Paneer', 'Tandoori',
    'Dal Makhani', 'Gulab Jamun', 'Kulfi', 'Seekh Kebab', 'Naan'
  ];
  
  // Triple the items for smooth continuous scrolling
  const marqueeItems = [...items, ...items, ...items];

  return (
    <div className="marquee-section">
      <div className="marquee-track" id="marqueeTrack">
        {marqueeItems.map((item, index) => (
          <div key={index} className="marquee-item">
            <em>{item}</em>
            <div className="marquee-dot"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
