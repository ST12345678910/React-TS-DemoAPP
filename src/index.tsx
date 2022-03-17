import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Catform from './apiContent'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Catform />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
