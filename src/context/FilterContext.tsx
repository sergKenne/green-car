import React, { ReactNode, createContext, useReducer, useState } from 'react'
import filterReducer from './reducers/filterReducer'
import { IState } from './reducers/filterReducer/types'


type IMake = {
  make: string
}

// const initialState:IState = {
//   filtered: []
// }

export const FilterContext = createContext<unknown>(null)

export const AppFilterContext = ({ children }:{children: ReactNode}) => {
  
  //const [state, dispatch] = useReducer<any>(filterReducer, initialState )
  const [filtering, setFiltering] = useState<IMake[]>([])

  return (
    <FilterContext.Provider value={{ filtering, setFiltering }}>
      {children}
    </FilterContext.Provider>
  )
}
