import React, { ReactNode, createContext, useState, useRef } from 'react'
import products from '../data.json'
import { getMakes } from '../utils'
import { ILocation } from '../types'

type IMake = {
  make: string
}

export const FilterContext = createContext<unknown>(null)

export const AppFilterContext = ({ children }:{children: ReactNode}) => {
  
  const [filtering, setFiltering] = useState<IMake[]>([])
  const [rangePrice, setRangePrice] = useState([]);
  const [rangeMileage, setRangeMileage] = useState([]);
  const [locations, setLocations] = useState<ILocation[]>([])
  const selectRef = useRef<any>()

  return (
    <FilterContext.Provider
      value={{ filtering, setFiltering, rangePrice, setRangePrice, rangeMileage, setRangeMileage, locations, setLocations, selectRef }}
    >
      {children}
    </FilterContext.Provider>
  )
}
