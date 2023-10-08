import React from 'react'
import { FilterContext } from '../context/FilterContext';

const Search = () => {
  const { search, setSearch } = React.useContext<any>(FilterContext)
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    console.log("search:", search);
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
      />
    </form>
  )
}

export default Search