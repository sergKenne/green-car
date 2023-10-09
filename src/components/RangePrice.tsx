import * as React from 'react';
import Slider from "@mui/material/Slider";
import { FilterContext } from '../context/FilterContext';
import { getDataFromStorage } from '../utils';
import { IRange } from '../types';

const RangePrice = ({ device, minmaxVal, range, setRange }: IRange) => {

  const { filtering, setFiltering } = React.useContext<any>(FilterContext)

  function handleChanges(event: any, newValue: any) {
    setRange(newValue);
    
    const isCheck = filtering.find((el: any) => el.price);
    if (!isCheck) {
      setFiltering((prevState: any) => [...prevState, { price: newValue },])
    } else {
      if ((newValue[0] === 0) && (newValue[1] === 90000)) {
        setFiltering(filtering.filter((el: any) => !el.price))
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
    setRange(JSON.parse(getDataFromStorage("rangePrice")) || minmaxVal)
  }, [])

  return (
    <div className='range-slider'>
      <Slider value={range}
        onChange={handleChanges}
        valueLabelDisplay="auto"
        min={minmaxVal[0]}
        max={minmaxVal[1]}
      />
      <div className="range-slider__description">
        <span>{device}{range[0]}</span>
        <span>{device}{range[1]}</span>
      </div>
    </div>
  )
}

export default RangePrice;