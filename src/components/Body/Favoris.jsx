import heartSound from "../../assets/heartSound.mp3";

function Favoris({ recipeId, favorites, toggleFavorite }) {
  const isFavori = favorites.has(recipeId);

  const handleClick = () => {
    toggleFavorite(recipeId);
    if (!isFavori) {
      const audio = new Audio(heartSound);
      audio.play().catch(() => {});
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      title={isFavori ? 'Retirer des favoris' : 'Ajouter aux favoris'}
      className={`w-9 h-9 flex items-center justify-center rounded-full shadow-md transition-all duration-200 ${
        isFavori
          ? 'bg-red-600 text-white scale-110'
          : 'bg-white text-red-500 hover:bg-red-50 hover:scale-110'
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={isFavori ? 'currentColor' : 'none'}
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    </button>
  );
}

export default Favoris;
