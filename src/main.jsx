import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import SearchBar  from './components/SearchBar/SearchBar.jsx';'./components/SearchBar/SearchBar.jsx';
import HeartButton from './components/SearchBar/HeartButton.jsx';
import Reset from './components/SearchBar/ResetButton.jsx';
import Body from './components/Body/body.jsx';
import Footer from './components/Footer/Footer.jsx';
import './index.css';
import './App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <div className="flex items-center">
      <SearchBar />
      <HeartButton />
      <Reset />
    </div>
    <Body />
    <Footer />
  </React.StrictMode>
);