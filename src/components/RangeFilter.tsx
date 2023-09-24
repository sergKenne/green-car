//import React from 'react'
import * as React from 'react';
import Slider from "@mui/material/Slider";

const RangeFilter = ({ device }: { device?:string }) => {

  const [range, setRange] = React.useState([0, 100]);
  function handleChanges(event: any, newValue: any) {
    setRange(newValue);
  }
  
  return (
    <div className='range-slider'>
      <Slider value={range} onChange={handleChanges} valueLabelDisplay="auto" />
      <div className="range-slider__description">
        <span>{device}{range[0]}</span>
        <span>{device}{range[1]}</span>
      </div>
    </div>
  )
}

export default RangeFilter


// import React from 'react';
// import RangeSlider from 'reactrangeslider';

// const MyPage = () =>
//   <div>
//     <Slider defaultValue={20} step={5} />
//   </div>;