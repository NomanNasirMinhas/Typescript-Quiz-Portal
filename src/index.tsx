import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ServiceWorkerWrapper from './ServiceWorkerWrapper'
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <React.StrictMode>
    <ServiceWorkerWrapper />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

