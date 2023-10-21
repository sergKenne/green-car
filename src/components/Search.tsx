import React from 'react'
import { FilterContext } from '../context/FilterContext';

const Search = () => {
  const { search, setSearch, filtering, setFiltering, } = React.useContext<any>(FilterContext)
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    if (e.target.value.trim().length) {
      setFiltering((prevFiltering: any) => [...prevFiltering.filter((el: any) => !el[e.target.name]),{[e.target.name]:e.target.value }])
    } else {
      setFiltering((prevFiltering:any) => prevFiltering.filter((el:any) => !el[e.target.name]))
    }
    
  }

  return (
    <form className="aside__search">
      <img src="img/search-icon.svg" alt="search icon" className="aside__search-icon" />
      <input
        type="text"
        className="aside__search-input"
        placeholder='Search here...'
        onChange={handleChange}
        value={search}
        name="search"
      />
    </form>
  )
}

export default Search