import { useState } from 'react';
import Navbar from './Navbar.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import HeartButton from './components/SearchBar/HeartButton.jsx';
import ResetButton from './components/SearchBar/ResetButton.jsx';
import Body from './components/Body/body.jsx';
import Footer from './components/Footer/Footer.jsx';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFavorites, setShowFavorites] = useState(false);
  const [favorites, setFavorites] = useState(new Set());

  const toggleFavorite = (id) => {
    setFavorites(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleReset = () => {
    setSearchTerm('');
    setShowFavorites(false);
  };

  return (
    <div className="min-h-screen bg-red-50 flex flex-col">
      <Navbar />

      <div className="bg-gradient-to-br from-red-800 via-red-700 to-red-600 py-14 px-4 text-center">
        <h1 className="hero-title text-5xl md:text-7xl text-white mb-3 drop-shadow-lg">
          Let's Cook
        </h1>
        <p className="text-red-100 text-lg mb-8">
          Découvrez nos meilleures recettes du monde entier
        </p>
        <div className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-3">
          <div className="flex-1">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </div>
          <HeartButton showFavorites={showFavorites} setShowFavorites={setShowFavorites} favCount={favorites.size} />
          <ResetButton onReset={handleReset} />
        </div>
      </div>

      <main className="flex-1">
        <Body
          searchTerm={searchTerm}
          showFavorites={showFavorites}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
      </main>

      <Footer />
    </div>
  );
}
