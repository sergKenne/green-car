import React, { ReactNode, createContext, useState } from 'react'
import products from '../data.json'
import { getMakes } from '../utils'

type IMake = {
  make: string
}

export const FilterContext = createContext<unknown>(null)

export const AppFilterContext = ({ children }:{children: ReactNode}) => {
  
  const [filtering, setFiltering] = useState<IMake[]>([])
  const [rangePrice, setRangePrice] = useState([]);
  const [rangeMileage, setRangeMileage] = useState([]);
  //const [productsMake, setProductsMake] = useState(getMakes(products))

  return (
    <FilterContext.Provider
      value={{ filtering, setFiltering, rangePrice, setRangePrice, rangeMileage, setRangeMileage }}
    >
      {children}
    </FilterContext.Provider>
  )
}
