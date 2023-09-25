import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { FilterContext } from './context/FilterContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <FilterContext>
      <App />
    </FilterContext>
  </React.StrictMode>
);
