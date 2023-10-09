import React, { ReactNode, createContext, useState, useRef, useEffect } from 'react'
import { ILocation } from '../types'
import { getDataFromStorage, getLocations, setDataToStorage } from '../utils'
import products from '../data.json'


type IMake = {
  make: string
}

export const FilterContext = createContext<unknown>(null)

export const AppFilterContext = ({ children }:{children: ReactNode}) => {
  
  const [currentSort, setCurrentSort] = useState(JSON.parse(getDataFromStorage("currentSort")) || "Sort by")
  const [filtering, setFiltering] = useState<IMake[]>(JSON.parse(getDataFromStorage("filtering")) || [])
  const [rangePrice, setRangePrice] = useState(JSON.parse(getDataFromStorage("rangePrice")) || [0, 90000]);
  const [rangeMileage, setRangeMileage] = useState(JSON.parse(getDataFromStorage("rangeMileage")) || [0, 60000]);
  const [locations, setLocations] = useState<ILocation[]>(JSON.parse(getDataFromStorage("locations")) || getLocations(products))
  const [search, setSearch] = useState("")
  const selectRef = useRef<any>() 

  useEffect(() => {
    setDataToStorage("filtering", filtering);
    setDataToStorage("rangePrice", rangePrice);
    setDataToStorage("rangeMileage", rangeMileage);
    setDataToStorage("currentSort", currentSort);
  }, [filtering, rangePrice, rangeMileage, currentSort])

  return (
    <FilterContext.Provider
      value={{
        filtering,
        setFiltering,
        rangePrice,
        setRangePrice,
        rangeMileage,
        setRangeMileage,
        locations,
        setLocations,
        selectRef,
        currentSort,
        setCurrentSort,
        search,
        setSearch
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}
