import React, { createContext, useReducer } from 'react'

const useFilterContext = createContext<unknown>(null)

export const FilterContext = ({ children }:any) => {
  
  //const [state, dispatch] = useReducer(filterReducer, initialState )


  return (
    <useFilterContext.Provider value={{ name: true }}>
      {children}
    </useFilterContext.Provider>
  )
}

//export default FilterContext