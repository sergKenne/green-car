import React, { useState } from 'react';
import './App.scss';
import RangeFilter from './components/RangeFilter';
import Card from "./components/Card"
import Pagination from './components/Pagination';

function App() {

  const [dropdown, setDropdown] = useState(false)

  const makes:string[] = [
    "Volkswagen",
    "Toyota",
    "Tesla",
    "Nissan",
    "Mitsubishi",
    "Mazda3",
    "Lexus",
    "Kia", "Hyundai", "Honda", "Ford", "Chevrolet", "BMW"]
  
  const fuel: string[] = ["Gasoline", "Plug - In Hybrid", "Hybrid", "Electric"];
  const locations: string[] = ["AK", "CA", "FL", "HI", "ID", "IA", "MT", "ND", "NJ", "NY", "OR", "PA", "TX", "WA"]

  return (
    <div className="page">
      <div className="container">
        <div className="header">
          <img src="img/logo.svg" alt="logo" className="header__logo" />
        </div>
        <div className="content">
          <div className="aside content__aside">
            <form className="aside__search">
                <img src="img/search-icon.svg" alt="search icon" className="aside__search-icon" />
                <input type="text" className="aside__search-input" placeholder='Search here...' />
            </form>
            <div className="aside__box">
              <div className="aside__header-box">
                <span className="aside__header-name aside__header-name--desc">Showing 511 results of 511 items.</span>
                <span className="aside__header-filter">reset all</span>
              </div>
            </div>
            <div className="aside__box">
              <div className="aside__header-box">
                <span className="aside__header-name">Makes</span>    
                <span className="aside__header-filter">Clear</span>
              </div>
              <div className="aside__content-box">
                {makes.map((make, ind) => (
                  <label key={make+ind} htmlFor={make+ind} className="aside__input-wrap">
                    <input className='aside__input-check' id={make+ind} type="checkbox" />
                    <span className="aside__input-btn">
                      <img src="img/check.svg" alt="" className="aside__input-icon" />
                    </span>
                    <span>{ make }</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="aside__box">
              <div className="aside__header-box">
                <span className="aside__header-name">Price</span>
                <span className="aside__header-filter">Clear</span>
              </div>
              <RangeFilter device='$'/>
            </div>
            <div className="aside__box">
              <div className="aside__header-box">
                <span className="aside__header-name">Mileage</span>
                <span className="aside__header-filter">Clear</span>
              </div>
              <RangeFilter  />
            </div>
            <div className="aside__box">
              <div className="aside__header-box">
                <span className="aside__header-name">Year</span>
                <span className="aside__header-filter">Clear</span>
              </div>
              <select name="" id="" className='aside__select'>
                <option value="2000">2000</option>
                <option value="2000">2000</option>
                <option value="2000">2000</option>
                <option value="2000">2000</option>
                <option value="2000">2000</option>
                <option value="2000">2000</option>
                <option value="2000">2000</option>
                <option value="2000">2000</option>
                <option value="2000">2000</option>
              </select>
            </div>
            <div className="aside__box">
              <div className="aside__header-box">
                <span className="aside__header-name">Fuel type</span>
                <span className="aside__header-filter">Clear</span>
              </div>
              <div className="aside__content-box">
                {fuel.map((make, ind) => (
                  <label key={make + ind} htmlFor={make + ind} className="aside__input-wrap">
                    <input className='aside__input-check' id={make + ind} type="checkbox" />
                    <span className="aside__input-btn">
                      <img src="img/check.svg" alt="" className="aside__input-icon" />
                    </span>
                    <span>{make}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="aside__box">
              <div className="aside__header-box">
                <span className="aside__header-name">Location</span>
                <span className="aside__header-filter">Clear</span>
              </div>
              <div className="aside__content-box">
                {locations.map((make) => (
                  <label key={make} htmlFor={make} className="aside__input-wrap">
                    <input className='aside__input-check' id={make} type="radio" name="location" />
                    <span className="aside__input-btn aside__input-btn--radio">
                      
                    </span>
                    <span>{make}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
          <div className="main content__main">
            <div className="main__top">
              <ul className="main__top-list">
                <li className="main__top-list-item main__top-list-item--first">
                  <span>Filtering by:</span>
                </li>
                <li className="main__top-list-item">
                  <span>Make: Volkswagen</span>
                  <img src="img/close.svg" alt="" className="main__top-list-close" />
                </li>
                <li className="main__top-list-item">
                  <span>Make: Volkswagen</span>
                  <img src="img/close.svg" alt="" className="main__top-list-close" />
                </li>
                <li className="main__top-list-item">
                  <span>Make: Volkswagen</span>
                  <img src="img/close.svg" alt="" className="main__top-list-close" />
                </li>
                <li className="main__top-list-item">
                  <span>Make: Volkswagen</span>
                  <img src="img/close.svg" alt="" className="main__top-list-close" />
                </li>
                <li className="main__top-list-item">
                  <span>Make: Volkswagen</span>
                  <img src="img/close.svg" alt="" className="main__top-list-close" />
                </li>
                <li className="main__top-list-item">
                  <span>Make: swagen</span>
                  <img src="img/close.svg" alt="" className="main__top-list-close" />
                </li>
              </ul>
              <div className="main__top-sort">
                <div className="main__top-inner-sort" onClick={()=>setDropdown(!dropdown)}>
                  <span>Sort by</span>
                  <img className="main__top-icon-sort" src="img/arrow.png" alt="" />
                </div>
                <nav className={dropdown ? 'main__top-dropdown' : 'main__top-dropdown hide'}>
                  <div className="main__top-drop-item">Name (A/Z)</div>
                  <div className="main__top-drop-item">Name (Z/A)</div>
                  <div className="main__top-drop-item">Lowest price</div>
                  <div className="main__top-drop-item">Highest price</div>
                  <div className="main__top-drop-item">Lowest mileage</div>
                  <div className="main__top-drop-item">Highest mileage</div>
                  <div className="main__top-drop-item">Year (Asc)</div>
                  <div className="main__top-drop-item">Year (Desc)</div>
                </nav>
              </div>
            </div>
            <div className="main__products">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
            <Pagination/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
