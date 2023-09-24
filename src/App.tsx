import React from 'react';
import './App.scss';
import RangeFilter from './components/RangeFilter';

function App() {

  const makes:string[] = [
    "Volkswagen",
    "Toyota",
    "Tesla",
    "Nissan",
    "Mitsubishi",
    "Mazda3",
    "Lexus",
    "Kia", "Hyundai", "Honda", "Ford", "Chevrolet", "BMW"]



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
              <RangeFilter/>
            </div>
          </div>
          <div className="content__main">

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
