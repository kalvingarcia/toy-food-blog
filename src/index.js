import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/utils/body.css';
import './assets/utils/navbar.css';
import './assets/utils/image-with-captions.css'
import './assets/utils/band.css'
import './assets/utils/layout.css';
import './assets/utils/slide-left.css'
import App from './app';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
