import React, { useContext, useEffect, useState } from 'react';
import './App.scss';
import Card, { IProduct } from "./components/Card"
import Pagination from './components/Pagination';
import products from "./data.json"
import Dropdown from './components/Dropdown';
import Aside from './components/Aside';
import { FilterContext } from './context/FilterContext';
import { filterBySearch, filterBySort, getProductsFiltered } from './utils';
import NoFound from './components/NoFound';

function App() {

  const { filtering, setFiltering, setRangePrice, setRangeMileage, setLocations, locations, selectRef, currentSort, search } = useContext<any>(FilterContext)

  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;
  
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
    if (item.location) {
      setFiltering(filtering.filter((elt: any) => !elt.location))
      setLocations(locations.map((elt: any) => ({ ...elt, checked: false })))
    }
    if (item.year) {
      setFiltering(filtering.filter((elt: any) => !elt.year))
      selectRef.current.value = "Select year"
    }
  }

  const capitalize = (word:string) => {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }

  const productsFiltered = (filtering.length === 0) ? products : getProductsFiltered(filtering, products)

  const productsAfterSort = filterBySort(currentSort, productsFiltered)

  const productsAfterSearch = filterBySearch(search, productsAfterSort)

  useEffect(() => {
    
  },[filtering])

  return (
    <div className="page">
      <div className="container">
        <div className="header">
          <img src="img/logo.svg" alt="logo" className="header__logo" />
        </div>
        <div className="content">
          <Aside productsFiltered={productsFiltered} />
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
              {productsAfterSearch.slice(pagesVisited, pagesVisited + usersPerPage).map((product:IProduct) => <Card product={ product } key={product.id} />)}
            </div>
            {(productsAfterSearch.length === 0)  && <NoFound/>}
            <Pagination
              products={productsAfterSearch}
              usersPerPage={usersPerPage} 
              setPageNumber={setPageNumber}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
