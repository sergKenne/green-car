import React, { useContext, useState } from 'react'
import RangeFilter from './RangeFilter'
import { getMakes, getFuels, getLocations, getDates } from '../utils';
import products from "../data.json"
import { FilterContext } from '../context/FilterContext';




const Aside = () => {

  const {filtering, setFiltering} = useContext<any>(FilterContext)

  console.log("Filtering:", filtering);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked);

    if (e.target.name === "make") {
      if (e.target.checked === true) {
        setFiltering((prevState: any) => [...prevState, { [e.target.name]: e.target.value }])
      } else {
        setFiltering((prevState:any) => prevState.filter((item:any) => item.make !== e.target.value))
      }
    } else if (e.target.name === "fuel") {
      if (e.target.checked === true) {
        setFiltering((prevState: any) => [...prevState, { [e.target.name]: e.target.value }])
      } else {
        setFiltering((prevState:any) => prevState.filter((item:any) => item.make !== e.target.value))
      }
    } else {
      console.log("object");
    }
  }

  return (
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
          {getMakes(products).map((make) => (
            <label key={make} htmlFor={make} className="aside__input-wrap">
              <input
                className='aside__input-check'
                id={make}
                type="checkbox"
                name="make"
                value={make}
                onChange={handleChange}
              />
              <span className="aside__input-btn">
                <img src="img/check.svg" alt={make} className="aside__input-icon" />
              </span>
              <span>{make}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="aside__box">
        <div className="aside__header-box">
          <span className="aside__header-name">Price</span>
          <span className="aside__header-filter">Clear</span>
        </div>
        <RangeFilter device='$' />
      </div>
      <div className="aside__box">
        <div className="aside__header-box">
          <span className="aside__header-name">Mileage</span>
          <span className="aside__header-filter">Clear</span>
        </div>
        <RangeFilter />
      </div>
      <div className="aside__box">
        <div className="aside__header-box">
          <span className="aside__header-name">Year</span>
          <span className="aside__header-filter">Clear</span>
        </div>
        <select name="" id="" className='aside__select'>
          <option value="all">Select year</option>
          {getDates(products).sort().map(date => (
            <option key={date} value={date}>{date}</option>
          ))}
        </select>
      </div>
      <div className="aside__box">
        <div className="aside__header-box">
          <span className="aside__header-name">Fuel type</span>
          <span className="aside__header-filter">Clear</span>
        </div>
        <div className="aside__content-box">
          {getFuels(products).map((fuel) => (
            <label key={fuel} htmlFor={fuel} className="aside__input-wrap">
              <input
                className='aside__input-check'
                id={fuel}
                type="checkbox"
                name="fuel"
                value={fuel}
                onChange={handleChange}
              />
              <span className="aside__input-btn">
                <img src="img/check.svg" alt={fuel} className="aside__input-icon" />
              </span>
              <span>{fuel}</span>
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
          {getLocations(products).map((location) => (
            <label key={location} htmlFor={location} className="aside__input-wrap">
              <input className='aside__input-check' id={location} type="radio" name="location" />
              <span className="aside__input-btn aside__input-btn--radio">
              </span>
              <span>{location}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Aside