import React, { useState } from 'react'

const Dropdown = () => {

  const sorts = ["Name (A/Z)", "Name (Z/A)", "Lowest price", "Highest price", "Lowest mileage", "Highest mileage", "Year (Asc)", "Year (Desc)"]
  const [dropdown, setDropdown] = useState(false);
  const [currentSort, setCurrentSort] = useState("Sort by")

  const handleClick = (sort:string) => {
    setDropdown(false)
    setCurrentSort(sort)
  }
  return (
    <div className="main__top-sort">
      <div className="main__top-inner-sort" onClick={() => setDropdown(!dropdown)}>
        <span>{ currentSort}</span>
        <img className="main__top-icon-sort" src="img/arrow.png" alt="" />
      </div>
      <nav className={dropdown ? 'main__top-dropdown' : 'main__top-dropdown hide'}>
        {sorts.map(sort => (
          <div
            className="main__top-drop-item"
            key={sort}
            onClick={() => handleClick(sort)}
          >{sort}</div>
        ))}
        
      </nav>
    </div>
  )
}

export default Dropdown