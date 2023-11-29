import React, { useContext, useEffect, useState } from 'react';
import { Routes, Route, Navigate, useSearchParams, useNavigate } from "react-router-dom";
import './App.scss';
import Card, { IProduct } from "./components/Card"
import Pagination from './components/Pagination';
import products from "./data.json"
import Dropdown from './components/Dropdown';
import Aside from './components/Aside';
import { FilterContext } from './context/FilterContext';
import { filterBySort, getProductsFiltered, setDataToStorage } from './utils';
import NoFound from './components/NoFound';

function App() {
  
  const { filtering, setFiltering, setRangePrice, setRangeMileage, setLocations, locations, selectRef, currentSort, search, setSearch} = useContext<any>(FilterContext)
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [productsFiltered, setProductsFiltered] = useState<IProduct[]>([]);

  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;
  
  const removeFromFilter = (item: any) => {
    if (item.price) {
      setFiltering(filtering.filter((el:any) => !el.price))
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
      setDataToStorage("year", "Select year")
    }
    if (item.search) {
      setFiltering(filtering.filter((elt: any) => !elt.search))
      setSearch("")
      setDataToStorage("search", "")
    }
  }

  const capitalize = (word:string) => {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }

  const getObjectSearchParams = (arrFiltering: any) => {
    const objSearchParams: any = {};
    arrFiltering.forEach((elt: any) => {
      const key = Object.keys(elt)[0];
      if (key === "make" || key === "fuel" || key === "location" || key === "year" || key === "search") {
        if (objSearchParams[key]) {
          objSearchParams[key] = `${objSearchParams[key]}%${elt[key]}`
        } else {
          objSearchParams[key] = elt[key]
        }
      } else if (key === "price" || key === "mileage") {
        objSearchParams[key] = `${elt[key][0]}%${elt[key][1]}`
      }
    });
    return objSearchParams
  }

  useEffect(() => {
    const productsAfterFiltered = (filtering.length === 0) ? products : getProductsFiltered(filtering, products)
    setProductsFiltered(productsAfterFiltered)
    setSearchParams(getObjectSearchParams(filtering))
  }, [filtering,])

  useEffect(() => {
    navigate("/seller/cars-store")
  },[])
  
  const productsAfterSort = filterBySort(currentSort, productsFiltered)

  return (
    <div className="page">
      <div className="container">
        <div className="header">
          <img src="/img/logo.svg" alt="logo" className="header__logo" />
        </div>
        <div className="content">
          <Aside productsAfterSort={productsAfterSort} />
          <Routes>
            <Route path='/seller/cars-store' element={
              <div className="main content__main">
                <div className="main__top">
                  <ul className="main__top-list">
                    <li className="main__top-list-item main__top-list-item--first">
                      <span>Filtering by:</span>
                    </li>
                    {filtering.map((elt: any) => (
                      <li className="main__top-list-item" key={elt[Object.keys(elt)[0]]}>
                        <span>
                          {capitalize(Object.keys(elt)[0])}
                          {((Object.keys(elt)[0] === "price") || (Object.keys(elt)[0] === "mileage")) && " Range"}
                          {(Object.keys(elt)[0] === "fuel") && " Type"}:{" "}
                          {(Object.keys(elt)[0] === "price") || (Object.keys(elt)[0] === "mileage") ?
                            `[ ${elt[Object.keys(elt)[0]][0]}, ${elt[Object.keys(elt)[0]][1]}]`
                            : elt[Object.keys(elt)[0]]} </span>
                        <label htmlFor={elt[Object.keys(elt)[0]]}>
                          <img src="/img/close.svg"
                            alt="icon"
                            className="main__top-list-close"
                            onClick={() => removeFromFilter(elt)}
                          />
                        </label>
                      </li>
                    ))}
                  </ul>
                  <Dropdown />
                </div>
                <div className="main__products">
                  {productsAfterSort.slice(pagesVisited, pagesVisited + usersPerPage).map((product: IProduct) => <Card product={product} key={product.id} />)}
                </div>
                {(productsAfterSort.length === 0) && <NoFound />}
                <Pagination
                  products={productsAfterSort}
                  usersPerPage={usersPerPage}
                  setPageNumber={setPageNumber}
                />
              </div>
             } />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
