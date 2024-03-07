import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Gifs } from "./components/Gifs";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Gifs/>
  </React.StrictMode>
);
