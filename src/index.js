import React from 'react';
import ReactDOM from 'react-dom/client';
import './utils/body.css';
import './utils/navbar.css';
import './utils/image-with-captions.css'
import './utils/band.css'
import './utils/layout.css';
import './utils/slide-left.css';
import './utils/footer.css'
import './utils/featured-section.css';
import './utils/linked-post.css';
import './utils/posts.css';
import './utils/parallax-banner.css';
import './utils/recipe.css';
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
reportWebVitals(console.log);
