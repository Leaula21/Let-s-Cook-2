import recettes from '../../recettes.json';
import Favoris from './Favoris.jsx';

const DIFFICULTY = ['', 'Facile', 'Moyen', 'Intermédiaire', 'Difficile'];
const DIFFICULTY_COLOR = ['', 'text-green-600', 'text-yellow-600', 'text-orange-500', 'text-red-600'];
const DIFFICULTY_DOT = ['', 'bg-green-500', 'bg-yellow-500', 'bg-orange-500', 'bg-red-500'];

function StarRating({ count = 4 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={`w-3.5 h-3.5 ${i < count ? 'text-yellow-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function Body({ searchTerm, showFavorites, favorites, toggleFavorite }) {
  const filtered = recettes.filter((item) => {
    const term = searchTerm.toLowerCase();
    const matchSearch =
      !term ||
      item.title.toLowerCase().includes(term) ||
      item.category.toLowerCase().includes(term) ||
      item.description.toLowerCase().includes(term);
    const matchFav = !showFavorites || favorites.has(item.id);
    return matchSearch && matchFav;
  });

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-10">

      <div className="flex items-center justify-between mb-6">
        <h2 className="font-heading text-3xl text-red-900">
          {showFavorites ? '❤️ Mes favoris' : 'Toutes les recettes'}
        </h2>
        <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full shadow-sm border border-red-100">
          {filtered.length} recette{filtered.length !== 1 ? 's' : ''}
        </span>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <div className="text-6xl mb-4">{showFavorites ? '💔' : '🔍'}</div>
          <p className="text-xl font-semibold text-gray-500">
            {showFavorites ? 'Aucun favori pour l\'instant' : 'Aucune recette trouvée'}
          </p>
          <p className="text-sm mt-2">
            {showFavorites
              ? 'Cliquez sur le ❤️ d\'une recette pour l\'ajouter'
              : 'Essayez un autre terme de recherche'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.imageUrl}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                  alt={item.title}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                <div className="absolute top-3 right-3">
                  <Favoris recipeId={item.id} favorites={favorites} toggleFavorite={toggleFavorite} />
                </div>

                <span className="absolute bottom-3 left-3 bg-red-700 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                  {item.category}
                </span>

                {item.difficulty && (
                  <span className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-white/90 text-xs font-semibold px-2.5 py-1 rounded-full shadow">
                    <span className={`w-2 h-2 rounded-full ${DIFFICULTY_DOT[item.difficulty]}`} />
                    <span className={DIFFICULTY_COLOR[item.difficulty]}>
                      {DIFFICULTY[item.difficulty]}
                    </span>
                  </span>
                )}
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-heading text-xl text-red-900 mb-1 leading-snug">
                  {item.title || 'Recette sans titre'}
                </h3>

                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-red-700" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-500 capitalize">{item.author}</span>
                  <span className="ml-auto">
                    <StarRating count={item.difficulty + 1} />
                  </span>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed flex-1">{item.description}</p>

                <button className="mt-4 w-full bg-red-700 hover:bg-red-800 active:bg-red-900 text-white text-sm font-semibold py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2">
                  Voir la recette
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default Body;
