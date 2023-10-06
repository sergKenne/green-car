import React, { useContext } from 'react';
import './App.scss';
import Card, { IProduct } from "./components/Card"
import Pagination from './components/Pagination';
import products from "./data.json"
import Dropdown from './components/Dropdown';
import Aside from './components/Aside';
import { FilterContext } from './context/FilterContext';
import { getObjFiltering } from './utils';

function App() {

  const { filtering, setFiltering, setRangePrice, setRangeMileage } = useContext<any>(FilterContext)
  
  const removeFromFilter = (item: any) => {
    console.log("item:", item);
    console.log("filtering:", filtering);
    if (item.price) {
      setFiltering(filtering.filter((el: any) => !el.price))
      setRangePrice([0, 100000]);
    }
    if (item.mileage) {
      setFiltering(filtering.filter((el: any) => !el.mileage))
      setRangeMileage([0, 600000]);
    }
  }

  const capitalize = (word:string) => {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }

  const ProductsFilter = (filtering.length === 0) ? products : getObjFiltering(filtering, products)
  
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
                  <li className="main__top-list-item" key={elt[Object.keys(elt)[0]]}>
                    <span>
                      {capitalize(Object.keys(elt)[0])}
                      {((Object.keys(elt)[0] === "price") || (Object.keys(elt)[0] === "mileage")) && " Range"}
                      {(Object.keys(elt)[0] === "fuel") && " Type"}:{" "}
                      {(Object.keys(elt)[0] === "price") || (Object.keys(elt)[0] === "mileage") ?
                        `[ ${elt[Object.keys(elt)[0]][0]}, ${elt[Object.keys(elt)[0]][1]}]`
                        : elt[Object.keys(elt)[0]]} </span>
                    <label htmlFor={elt[Object.keys(elt)[0]]}>
                      <img src="img/close.svg"
                        alt="icon"
                        className="main__top-list-close"
                        onClick={() => removeFromFilter(elt)}
                      />
                    </label>
                  </li>
                ))}
              </ul>
              <Dropdown/>
            </div>
            <div className="main__products">
              {ProductsFilter.map((product:IProduct) => <Card product={ product } key={product.id} />)}
            </div>
            <Pagination/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
