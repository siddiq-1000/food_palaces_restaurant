import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalEffects from './components/GlobalEffects';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Gallery from './components/Gallery';
import FoodMenu from './components/FoodMenu';
import Reservations from './components/Reservations';
import Footer from './components/Footer';
import AdminDashboard from './admin/AdminDashboard';

// Custom noise overlay to preserve the luxury ambient texture
const NoiseOverlay = () => (
  <div 
    style={{
      position: 'fixed', inset: 0,
      backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
      opacity: 0.025, pointerEvents: 'none', zIndex: 9997
    }}
  />
);

import Kitchens from './components/Kitchens';

function HomePage() {
  return (
    <>
      <GlobalEffects />
      <div className="cursor" id="cursor"></div>
      <div className="cursor-ring" id="cursorRing"></div>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Gallery />
        <Kitchens />
        <FoodMenu />
        <Reservations />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <NoiseOverlay />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}
