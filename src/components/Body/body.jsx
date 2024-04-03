import recettes from '../../recettes.json';
import Favoris from './Favoris.jsx';

function Body() {
  return (
    
    <div className="container my-12 mx-auto px-4 md:px-12">

      {/* card container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recettes.map((item) => (
          <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md">

            {/* Bouton de cœur */}
            <Favoris />

            {/* image*/}
            <img src={item.imageUrl} className="w-full h-64 object-cover object-center" alt={item.title} />
            <div className="p-4">
              <h5 className="text-xl font-bold mb-2 text-green-900">{item.title}</h5>

              {/* Titre + icone + étoiles + desc*/}
              <div className="flex items-center mb-2">
                <span className="inline-flex items-center justify-center w-6 h-6 me-2 text-sm font-semibold text-black-800 bg-black-100 rounded-full dark:bg-white-700 dark:text-black-300">
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                  </svg>
                </span>
                <h6 className="font-semibold me-2">{item.author}</h6>
                <svg className="w-4 h-4 text-yellow-300 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <span className="bg-red-100 text-red-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 text-white">{item.category}</span>
              </div>
              <p className="text-black-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Body;


