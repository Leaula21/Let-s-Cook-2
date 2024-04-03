import { useState } from 'react';
import heartSound from "../../assets/heartSound.mp3"; 


function Favoris() {
  const [isFavori, setIsFavori] = useState(false);

  const toggleFavori = () => {
    setIsFavori(!isFavori);
    playSound(); // Appel de la fonction playSound lorsque le bouton est cliqué
  };

  // Fonction pour jouer un son
  const playSound = () => {
    const audio = new Audio(heartSound);
    audio.play();
  };

  return (
    <button
      type="button"
      className={`focus:outline-none text-red-700 bg-white hover:bg-white-500 hover:text-red-600 rounded-full w-10 h-10 flex items-center justify-center ${
        isFavori ? 'bg-white text-red-700' : ''
      }`}
      onClick={toggleFavori}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={isFavori ? 'currentColor' : 'none'}
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke={isFavori ? 'none' : 'currentColor'}
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
        />
      </svg>
    </button>
  );
}

export default Favoris;

