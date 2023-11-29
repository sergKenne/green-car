import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { AppFilterContext } from './context/FilterContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppFilterContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppFilterContext>
  </React.StrictMode>
);
