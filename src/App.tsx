import React, { useContext, useState } from 'react';
import './App.scss';
import RangeFilter from './components/RangeFilter';
import Card from "./components/Card"
import Pagination from './components/Pagination';
import products from "./data.json"
import Dropdown from './components/Dropdown';
import Aside from './components/Aside';
import { FilterContext } from './context/FilterContext';

function App() {

 const {filtering} = useContext<any>(FilterContext)
  
 
  return (
    <div className="page">
      <div className="container">
        <div className="header">
          <img src="img/logo.svg" alt="logo" className="header__logo" />
        </div>
        <div className="content">
          <Aside/>
          <div className="main content__main">
            <div className="main__top">
              <ul className="main__top-list">
                <li className="main__top-list-item main__top-list-item--first">
                  <span>Filtering by:</span>
                </li>
                {filtering.map((elt:any) => (
                  <li className="main__top-list-item">
                    <span>{Object.keys(elt)[0]}:{" "} {elt[Object.keys(elt)[0]]} </span>
                    <label htmlFor={elt[Object.keys(elt)[0]]}>
                      <img src="img/close.svg" alt="" className="main__top-list-close" />
                    </label>
                  </li>
                ))}
              </ul>
              <Dropdown/>
            </div>
            <div className="main__products">
              {products.map(product => <Card product={ product } key={product.id} />)}
              
            </div>
            <Pagination/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
