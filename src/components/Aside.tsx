import React, { useContext, useEffect, useState } from 'react'
import RangeMileage from './RangeMileage'
import RangePrice from './RangePrice'
import { getMakes, getFuels, getYears, setDataToStorage, getDataFromStorage } from '../utils';
import products from "../data.json"
import { FilterContext } from '../context/FilterContext';
import {IFuel, IMake } from '../types';
import { IProduct } from './Card';
import Search from './Search';

const Aside = ({ productsFiltered }: { productsFiltered: IProduct[]}) => {
  const {
    filtering,
    setFiltering,
    rangePrice,
    setRangePrice,
    rangeMileage,
    setRangeMileage,
    locations,
    setLocations, 
    selectRef,
    setCurrentSort
  } = useContext<any>(FilterContext)

  const [makes, setMakes] = useState<IMake[]>(JSON.parse(getDataFromStorage("makes")) || getMakes(products))
  const [fuels, setFuels] = useState<IFuel[]>(JSON.parse(getDataFromStorage("fuels")) || getFuels(products))

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "make") {
      if (e.target.checked) {
        setFiltering((prevState: any[]) => [...prevState, { [e.target.name]: e.target.value }])
        setMakes(prevMakes => prevMakes.map(elt => elt.make === e.target.value ? {...elt, checked:true} : elt))
      } else {
        setFiltering((prevState: any) => prevState.filter((item: any) => item.make !== e.target.value))
        setMakes(prevMakes => prevMakes.map(elt => elt.make === e.target.value ? { ...elt, checked: false } : elt))
      }
    } else if (e.target.name === "fuel") {
      if (e.target.checked) {
        setFiltering((prevState: any) => [...prevState, { [e.target.name]: e.target.value }])
        setFuels(prevFuels => prevFuels.map(elt => elt.fuel === e.target.value ? { ...elt, checked: true } : elt))
      } else {
        setFiltering((prevState: any) => prevState.filter((item: any) => item.fuel !== e.target.value))
        setFuels(prevFuels => prevFuels.map(elt => elt.fuel === e.target.value ? { ...elt, checked: false } : elt))
      }
    } else if (e.target.type === 'radio') {
      const isCheck = filtering.find((el: any) => el.location)
      if (e.target.checked) {
        if (!isCheck) {
          setFiltering((prevState: any) => [...prevState, { [e.target.name]: e.target.value }])
        } else {
          setFiltering(filtering.map((item:any) => {
            if (item.location) {
              item.location = e.target.value;
              return item;
            } else {
              return item
            }
          }))
        }
        setLocations(locations.map((elt:any) => (elt.location === e.target.value) ? ({...elt, checked: true}) : ({...elt, checked: false})))
      } 
    }
  }

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDataToStorage("year", e.target.value)
    if (e.target.value === "Select year") {
      setFiltering((prevState: any) => [...prevState.filter((el: any) => !el.year)])
    } else {
      setFiltering((prevState: any) => [...prevState.filter((el:any) => !el.year), { year: Number(e.target.value)}])
    }
  }

  const clearMakesFilter = () => {
    setMakes(makes.map(elt => ({...elt, checked: false})))
    setFiltering(filtering.filter((elt:any) => Object.keys(elt)[0] !== "make"))
  }

  const clearFuelsFilter = () => {
    setFuels(fuels.map(elt => ({ ...elt, checked: false })))
    setFiltering(filtering.filter((elt: any) => Object.keys(elt)[0] !== "fuel"))
  }

  const clearPriceFilter = () => {
    setFiltering(filtering.filter((elt: any) => Object.keys(elt)[0] !== "price"))
    setRangePrice([0, 90000])
  }

  const clearMileageFilter = () => {
    setFiltering(filtering.filter((elt: any) => Object.keys(elt)[0] !== "mileage"))
    setRangeMileage([0, 60000])
  }

  const clearLocationFilter = () => {
    setFiltering(filtering.filter((elt: any) => Object.keys(elt)[0] !== "location"))
    setLocations(locations.map((elt:any) => ({ ...elt, checked: false })))
  }

  const clearYearFilter = () => {
    selectRef.current.value = "Select year"
  }

  const clearAllFilter = () => {
    clearMakesFilter()
    clearFuelsFilter()
    clearPriceFilter()
    clearMileageFilter()
    clearLocationFilter()
    selectRef.current.value = "Select year"
    setCurrentSort("Sort by")
    setFiltering([])
  }

  useEffect(() => {
    setDataToStorage("makes", makes)
    setDataToStorage("fuels", fuels)
    setDataToStorage("locations", locations)
  }, [makes, fuels, locations])
  
  return (
    <div className="aside content__aside">
      <Search/>
      <div className="aside__box">
        <div className="aside__header-box">
          <span className="aside__header-name aside__header-name--desc">Showing {productsFiltered.length} results of {products.length} items.</span>
          <span
            className="aside__header-filter"
            onClick={clearAllFilter}
          >reset all</span>
        </div>
      </div>
      <div className="aside__box">
        <div className="aside__header-box">
          <span className="aside__header-name">Makes</span>
          <span
            className="aside__header-filter"
            onClick={clearMakesFilter}
          >Clear</span>
        </div>
        <div className="aside__content-box">
          {makes.map((item:any) => (
            <label key={item.make} htmlFor={item.make} className="aside__input-wrap">
              <input
                className='aside__input-check'
                id={item.make}
                type="checkbox"
                name="make"
                value={item.make}
                checked={item.checked}
                onChange={handleChange}
              />
              <span className="aside__input-btn">
                <img src="img/check.svg" alt={item.make} className="aside__input-icon" />
              </span>
              <span>{item.make}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="aside__box">
        <div className="aside__header-box">
          <span className="aside__header-name">Price</span>
          <span
            className="aside__header-filter"
            onClick={clearPriceFilter}
          >Clear</span>
        </div>
        <RangePrice
          device='$'
          minmaxVal={[0, 90000]}
          range={rangePrice }
          setRange={setRangePrice}
        />
      </div>
      <div className="aside__box">
        <div className="aside__header-box">
          <span className="aside__header-name">Mileage</span>
          <span
            className="aside__header-filter"
            onClick={clearMileageFilter}
          >Clear</span>
        </div>
        <RangeMileage
          minmaxVal={[0, 60000]}
          range={ rangeMileage }
          setRange={ setRangeMileage }
        />
      </div>
      <div className="aside__box">
        <div className="aside__header-box">
          <span className="aside__header-name">Year</span>
          <span
            className="aside__header-filter"
            onClick={clearYearFilter}
          >Clear</span>
        </div>
        <select
          className='aside__select'
          onChange={handleSelect}
          ref={selectRef}
        >
          {["Select year",...getYears(products).sort()].map((date:any) => (
            <option
              key={date}
              value={date}
            >{date}</option>
          ))}
        </select>
      </div>
      <div className="aside__box">
        <div className="aside__header-box">
          <span className="aside__header-name">Fuel type</span>
          <span
            className="aside__header-filter"
            onClick={clearFuelsFilter}
          >Clear</span>
        </div>
        <div className="aside__content-box">
          {fuels.map((item) => (
            <label key={item.fuel} htmlFor={item.fuel} className="aside__input-wrap">
              <input
                className='aside__input-check'
                id={item.fuel}
                type="checkbox"
                name="fuel"
                value={item.fuel}
                checked={item.checked}
                onChange={handleChange}
              />
              <span className="aside__input-btn">
                <img src="img/check.svg" alt={item.fuel} className="aside__input-icon" />
              </span>
              <span>{item.fuel}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="aside__box">
        <div className="aside__header-box">
          <span className="aside__header-name">Location</span>
          <span
            className="aside__header-filter"
            onClick={clearLocationFilter}
          >Clear</span>
        </div>
        <div className="aside__content-box">
          {locations.map((item:any) => (
            <label key={item.location} htmlFor={item.location} className="aside__input-wrap">
              <input
                className='aside__input-check'
                id={item.location}
                value={item.location}
                type="radio"
                name="location"
                checked={item.checked}
                onChange={handleChange}
              />
              <span className="aside__input-btn aside__input-btn--radio">
              </span>
              <span>{item.location}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Aside
