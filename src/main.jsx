import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Body from './body.jsx';
import './index.css';
import './App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Body />
  </React.StrictMode>
);
