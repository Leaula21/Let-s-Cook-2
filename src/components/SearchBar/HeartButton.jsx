function HeartButton({ showFavorites, setShowFavorites, favCount }) {
  return (
    <button
      type="button"
      onClick={() => setShowFavorites(!showFavorites)}
      className={`relative flex items-center gap-2 px-4 py-3 rounded-lg font-medium text-sm border transition-all whitespace-nowrap ${
        showFavorites
          ? 'bg-white text-red-700 border-white shadow-md'
          : 'bg-white/20 text-white border-white/40 hover:bg-white/30'
      }`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill={showFavorites ? 'currentColor' : 'none'} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
      Favoris
      {favCount > 0 && (
        <span className={`absolute -top-1.5 -right-1.5 w-5 h-5 flex items-center justify-center rounded-full text-xs font-bold ${
          showFavorites ? 'bg-red-600 text-white' : 'bg-white text-red-700'
        }`}>
          {favCount}
        </span>
      )}
    </button>
  );
}

export default HeartButton;
