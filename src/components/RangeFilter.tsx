//import React from 'react'
import * as React from 'react';
import Slider from 'reactrangeslider';


// export interface SliderProps {
//   disabled?: boolean | undefined;
//   format?: ((value: number) => string | number | undefined) | undefined;
//   handleLabel?: string | undefined;
//   labels?: { [value: number]: string } | undefined;
//   max?: number | undefined;
//   min?: number | undefined;
//   onChange?(value: number): void;
//   onChangeComplete?(value: number): void;
//   onChangeStart?(value: number): void;
//   orientation?: string | undefined;
//   reverse?: boolean | undefined;
//   step?: number | undefined;
//   tooltip?: boolean | undefined;
//   className?: string | undefined;
//   value: number;
// }


const RangeFilter = () => {
  
  return (
    
    <div>
      <Slider defaultValue={20} step={5} />
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