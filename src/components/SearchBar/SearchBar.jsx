import { useState } from 'react';
import recettes from '../../recettes.json';

function SearchBar({ setSearchTerm }) {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchClick = () => {
    setSearchTerm(searchValue);
  };

  return (
    <div className='Search'>
      <h1 style={{
        color: '#9B1C1C',
        fontFamily: 'Helvetica',
        fontSize: "50px",
      }}>Let's Cook</h1>
      <label className="relative block">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2" onClick={handleSearchClick}>
          {/* loupe icone */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#CD1500" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </span>
        <input 
          className="placeholder-italic placeholder-red-500 block bg-white w-full border border-red-700 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-red-500 focus:ring-2 sm:text-sm" 
          placeholder="Rechercher des recettes" 
          type="text" 
          name="search"
          value={searchValue}
          onChange={handleSearchChange}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSearchClick();
            }
          }}
        />
      </label>
    </div>
  );
}

export default SearchBar;


