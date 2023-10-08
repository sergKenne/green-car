import React, { ReactNode, createContext, useState, useRef } from 'react'
import { ILocation } from '../types'

type IMake = {
  make: string
}

export const FilterContext = createContext<unknown>(null)

export const AppFilterContext = ({ children }:{children: ReactNode}) => {
  
  const [currentSort, setCurrentSort] = useState("Sort by")
  const [filtering, setFiltering] = useState<IMake[]>([])
  const [rangePrice, setRangePrice] = useState([]);
  const [rangeMileage, setRangeMileage] = useState([]);
  const [locations, setLocations] = useState<ILocation[]>([])
  const [search, setSearch] = useState("")
  const selectRef = useRef<any>()

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
