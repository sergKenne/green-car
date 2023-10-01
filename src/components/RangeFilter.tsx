//import React from 'react'
import * as React from 'react';
import Slider from "@mui/material/Slider";
import { FilterContext } from '../context/FilterContext';

type IRange = {
  device?: string,
  filterName?: string,
  minmaxVal: number[],
  range: number[],
  setRange: any
}

const RangeFilter = ({ device, filterName, minmaxVal, range, setRange }:IRange ) => {
  
  const { filtering, setFiltering } = React.useContext<any>(FilterContext)

  //const [range, setRange] = React.useState(minmaxVal);

  function handleChanges(event: any, newValue: any) {
    console.log("newValue:", newValue);

    const formatValue = `[${newValue[0]}, ${newValue[1]}]`

    setRange(newValue);

    if (filterName === "mileage") {
      const isCheck = filtering.find((el: any) => el.mileage);
      if (!isCheck) {
        setFiltering((prevState: any) => [...prevState, { mileage: newValue }])
      } else {
        setFiltering(filtering.map((item: any) => {
          if (item.mileage) {
            item.mileage = newValue;
            return item;
          } else {
            return item
          }
        }))
      }
    } else if (filterName==="price") {
      const isCheck = filtering.find((el: any) => el.price);
      if (!isCheck) {
        setFiltering((prevState: any) => [...prevState, { price: newValue }, ])
      } else {
        setFiltering(filtering.map((item: any) => {
          if (item.price) {
            item.price = newValue;
            return item;
          } else {
            return item
          }
        }))
      }
    }

  }

  React.useEffect(() => {
    setRange(minmaxVal)
  },[])
  
  return (
    <div className='range-slider'>
      <Slider value={range}
        onChange={handleChanges}
        valueLabelDisplay="auto"
        min={ minmaxVal[0] }
        max={ minmaxVal[1] }
      />
      <div className="range-slider__description">
        <span>{device}{range[0]}</span>
        <span>{device}{range[1]}</span>
      </div>
    </div>
  )
}

export default RangeFilter;