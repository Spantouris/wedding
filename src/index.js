import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import main from "./assets/Μain.jpg";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

document.head.getElementsByClassName("ogImage")[0].setAttribute("content", main)