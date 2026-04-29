function Footer() {
  return (
    <footer className="bg-red-900 text-white mt-8">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">🍳</span>
            <span className="text-xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>Let's Cook</span>
          </div>
          <p className="text-red-200 text-sm leading-relaxed">
            Découvrez des recettes savoureuses pour tous les goûts et tous les niveaux. Cuisinez avec passion.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Catégories</h3>
          <ul className="text-red-200 text-sm space-y-2">
            {['Burgers & Tacos', 'Pizzas & Pâtes', 'Salades & Soupes', 'Sushis & Poissons', 'Desserts & Gâteaux'].map((cat) => (
              <li key={cat}>
                <a href="#" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-red-400 inline-block" />
                  {cat}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Contact</h3>
          <p className="text-red-200 text-sm mb-3">
            Des suggestions de recettes ? On est à l'écoute !
          </p>
          <a href="mailto:contact@letscook.fr" className="text-red-200 text-sm hover:text-white transition-colors flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            contact@letscook.fr
          </a>
          <div className="flex gap-3 mt-4">
            {['Instagram', 'Pinterest', 'YouTube'].map((s) => (
              <a key={s} href="#" className="text-xs bg-red-800 hover:bg-red-700 px-3 py-1.5 rounded-full transition-colors">
                {s}
              </a>
            ))}
          </div>
        </div>

      </div>

      <div className="border-t border-red-800 py-4 text-center text-red-300 text-xs">
        © 2024 Let's Cook — Tous droits réservés · Fait avec ❤️
      </div>
    </footer>
  );
}

export default Footer;
