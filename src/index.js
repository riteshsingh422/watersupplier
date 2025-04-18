import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.scss'; // Import compiled SCSS
import App from './App';

console.log('Rendering root');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);