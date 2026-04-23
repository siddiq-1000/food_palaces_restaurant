import { useState } from 'react';

type MenuItem = {
  name: string;
  type: string;
  badge?: string;
  price: string;
  desc: string;
  icon: string;
};

const menuData: Record<string, MenuItem[]> = {
  starters: [
    { name: 'Paneer Tikka', type: 'veg', price: '₹340', desc: 'Cottage cheese marinated in spiced yoghurt, grilled in the tandoor until charred and smoky.', icon: '🥗' },
    { name: 'Chicken 65', type: 'nonveg', badge: 'Spicy', price: '₹380', desc: 'Crispy deep-fried chicken with curry leaves, green chillies, and South Indian spices.', icon: '🍗' },
    { name: 'Onion Bhaji', type: 'veg', price: '₹220', desc: 'Golden-fried onion fritters with cumin, coriander and green chilli. Served with mint chutney.', icon: '🧅' },
    { name: 'Prawn Koliwada', type: 'nonveg', price: '₹520', desc: 'Mumbai-style spiced prawns in a crunchy chickpea batter. A coastal classic.', icon: '🦐' },
    { name: 'Dahi Kebab', type: 'veg', price: '₹300', desc: 'Hung curd patties with cheese, herbs and a crispy breadcrumb crust.', icon: '🌯' },
    { name: 'Seekh Kebab', type: 'nonveg', badge: "Chef's Pick", price: '₹440', desc: 'Minced lamb skewers with ginger, garlic, raw papaya and aromatic whole spices.', icon: '🍢' },
  ],
  mains: [
    { name: 'Butter Chicken', type: 'nonveg', badge: 'Bestseller', price: '₹480', desc: 'Tandoori chicken simmered in a velvety tomato-cream sauce with fenugreek leaves.', icon: '🍛' },
    { name: 'Paneer Lababdar', type: 'veg', price: '₹420', desc: 'Cottage cheese cubes in a rich onion-tomato gravy with capsicum and cream.', icon: '🥘' },
    { name: 'Lamb Rogan Josh', type: 'nonveg', price: '₹680', desc: 'Slow-braised Kashmiri lamb with Ratan jot, whole spices and caramelised onions.', icon: '🍖' },
    { name: 'Dal Makhani', type: 'veg', price: '₹320', desc: 'Slow-simmered black lentils in rich butter-cream sauce. Cooked for 48 hours.', icon: '🌱' },
    { name: 'Kerala Fish Curry', type: 'nonveg', price: '₹560', desc: 'Sea fish cooked in tangy coconut milk curry with Kodampuli and curry leaves.', icon: '🐟' },
    { name: 'Palak Paneer', type: 'veg', badge: "Chef's Pick", price: '₹370', desc: 'Fresh cottage cheese in a silky spinach-cream sauce with whole spices and ginger.', icon: '🥬' },
    { name: 'Chicken Chettinad', type: 'nonveg', price: '₹520', desc: 'Fiery Chettinad spiced chicken with kalpasi, marathi mokku and coconut.', icon: '🍗' },
    { name: 'Rajma Masala', type: 'veg', price: '₹280', desc: 'Red kidney beans in a thick, tangy tomato masala. A Punjabi home comfort classic.', icon: '🫘' },
  ],
  breads: [
    { name: 'Butter Naan', type: 'veg', price: '₹80', desc: 'Soft leavened flatbread baked in the tandoor, finished with butter and nigella seeds.', icon: '🫓' },
    { name: 'Garlic Naan', type: 'veg', price: '₹100', desc: 'Tandoor naan topped generously with roasted garlic, butter and fresh coriander.', icon: '🥙' },
    { name: 'Hyderabadi Biryani', type: 'nonveg', badge: 'Bestseller', price: '₹580', desc: 'Dum-cooked Basmati rice layered with spiced meat, caramelised onions, saffron and rose water.', icon: '🍚' },
    { name: 'Veg Biryani', type: 'veg', price: '₹380', desc: 'Fragrant saffron Basmati rice with seasonal vegetables and whole spices cooked in dum style.', icon: '🌾' },
    { name: 'Peshwari Naan', type: 'veg', price: '₹120', desc: 'Sweet naan filled with coconut, almond and sultanas. A North-West Frontier indulgence.', icon: '🧁' },
    { name: 'Laccha Paratha', type: 'veg', price: '₹90', desc: 'Layered whole wheat flatbread cooked on a griddle with ghee. Flaky and fragrant.', icon: '🌀' },
  ],
  desserts: [
    { name: 'Gulab Jamun', type: 'veg', badge: 'Bestseller', price: '₹180', desc: 'Khoya dumplings soaked in rose-saffron sugar syrup. Served warm with vanilla ice cream.', icon: '🍮' },
    { name: 'Kulfi Falooda', type: 'veg', price: '₹220', desc: 'Traditional Indian ice cream with vermicelli, rose syrup, basil seeds and fresh cream.', icon: '🍨' },
    { name: 'Phirni', type: 'veg', price: '₹160', desc: 'Ground rice pudding with saffron, cardamom and rose water, set in a clay matki.', icon: '🍚' },
    { name: 'Shahi Tukda', type: 'veg', badge: "Chef's Pick", price: '₹200', desc: 'Fried bread soaked in saffron milk, topped with thickened rabri and silver varq.', icon: '🥣' },
  ],
  drinks: [
    { name: 'Mango Lassi', type: 'veg', price: '₹160', desc: 'Alphonso mango blended with thick yoghurt, sugar and a pinch of cardamom.', icon: '🥛' },
    { name: 'Rose Sharbat', type: 'veg', price: '₹120', desc: 'Chilled rose petal syrup with basil seeds, lemon and a hint of saffron.', icon: '🌹' },
    { name: 'Masala Chai', type: 'veg', price: '₹80', desc: 'Spiced tea with ginger, cardamom, cinnamon and tulsi. Brewed to perfection.', icon: '🍵' },
    { name: 'Royal Nimbu Pani', type: 'veg', price: '₹100', desc: 'Fresh squeezed lemon with black salt, roasted cumin and fresh mint.', icon: '🥤' },
  ],
};

const categoryInfo: Record<string, { image: string, title: string, subtitle: string, description: string }> = {
  starters: {
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=1200&auto=format&fit=crop",
    title: "The Starters",
    subtitle: "A Prelude to Flavor",
    description: "Begin your culinary journey with our handcrafted starters. From the smoky notes of our tandoor to golden-fried coastal delicacies, each bite provides a perfect opening act to stimulate your palate."
  },
  mains: {
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=1200&auto=format&fit=crop",
    title: "Main Course",
    subtitle: "The Heart of the Feast",
    description: "Our main courses represent the soul of Indian cooking. We offer slow-braised meats, rich velvety curries, and comforting vegetarian classics—prepared exactly as they have been for generations."
  },
  breads: {
    image: "https://images.unsplash.com/photo-1626082896492-766af4eb65ed?q=80&w=1200&auto=format&fit=crop",
    title: "Breads & Rice",
    subtitle: "The Perfect Accompaniments",
    description: "No feast is complete without our foundational grains. We serve freshly baked artisanal breads straight from the glowing embers of our clay oven, alongside fragrant, slow-cooked Dum biryanis."
  },
  desserts: {
    image: "https://images.unsplash.com/photo-1515037893149-de7f840978e2?q=80&w=1200&auto=format&fit=crop",
    title: "Desserts",
    subtitle: "A Sweet Symphony",
    description: "Conclude your meal with indulgence. From rich milk-based classics dripping with saffron syrup to refreshing cultural treats, our desserts bring authentic sweetness to your table."
  },
  drinks: {
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1200&auto=format&fit=crop",
    title: "Beverages",
    subtitle: "Refreshing Elixirs",
    description: "Quench your thirst with our careful selection of drinks. Whether it's a thick, creamy fruit lassi, a floral rose sharbat, or a perfectly brewed masala chai, our beverages offer true refreshment."
  }
};

type TabKey = keyof typeof menuData;

export default function FoodMenu() {
  const [activeTab, setActiveTab] = useState<TabKey>('starters');

  const tabs: { key: TabKey; label: string }[] = [
    { key: 'starters', label: 'Starters' },
    { key: 'mains', label: 'Main Course' },
    { key: 'breads', label: 'Breads & Rice' },
    { key: 'desserts', label: 'Desserts' },
    { key: 'drinks', label: 'Drinks' }
  ];

  const currentCategory = categoryInfo[activeTab];

  return (
    <>
      <section id="menu">
        <div className="menu-header">
          <div className="section-eyebrow reveal">Crafted With Passion</div>
          <h2 className="section-title reveal">Our <em>Menu</em></h2>
        </div>

        <div className="menu-tabs">
          {tabs.map(tab => (
            <button
              key={tab.key}
              className={`menu-tab ${activeTab === tab.key ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="menu-panel active">
          <div className="menu-category-banner reveal">
            <div className="menu-cat-img-wrap">
              <img src={currentCategory.image} alt={currentCategory.title} className="menu-cat-img" />
              <div className="menu-cat-overlay"></div>
            </div>
            <div className="menu-cat-content">
              <h3 className="menu-cat-subtitle">{currentCategory.subtitle}</h3>
              <h2 className="menu-cat-title">{currentCategory.title}</h2>
              <p className="menu-cat-desc">{currentCategory.description}</p>
            </div>
          </div>

          <div className="menu-grid">
            {menuData[activeTab].map((item, idx) => (
              <div key={idx} className={`menu-item reveal ${idx % 2 !== 0 ? 'reveal-d1' : ''}`}>
                <div className="menu-item-icon">{item.icon}</div>
                <div className="menu-item-info">
                  <div className="menu-item-top">
                    <span className="menu-item-name">
                      <span className={`menu-${item.type}`}></span>
                      {item.name}
                      {item.badge && <span className="menu-item-badge">{item.badge}</span>}
                    </span>
                    <div className="menu-item-dots"></div>
                    <span className="menu-item-price">{item.price}</span>
                  </div>
                  <div className="menu-item-desc">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="section-divider"></div>
    </>
  );
}
