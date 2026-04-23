export default function Kitchens() {
  const kitchensInfo = [
    {
      title: "Sweet Juice & Coffee",
      description: "Artisanal brews, freshly pressed vibrant juices, and decadent desserts catering to your sweet cravings.",
      image: "https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Open Shawarma Area",
      description: "Experience the lively rotisserie action. Perfect golden-roasted cuts prepared right before your eyes.",
      image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "The Main Kitchen",
      description: "Our culinary heart. Where heritage recipes and modern gastronomy harmonize under expert chefs.",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="kitchens" className="kitchens-section">
      <div className="kitchens-header reveal">
        <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Behind The Scenes</div>
        <h2 className="section-title">The <em>Kitchens</em></h2>
      </div>

      <div className="kitchens-grid reveal reveal-d1">
        {kitchensInfo.map((kit, idx) => (
          <div key={idx} className="kitchen-card">
            <div className="kitchen-img-wrap">
              <img src={kit.image} alt={kit.title} className="kitchen-img" />
              <div className="kitchen-overlay"></div>
            </div>
            <div className="kitchen-info">
              <h3 className="kitchen-name">{kit.title}</h3>
              <p className="kitchen-desc">{kit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
