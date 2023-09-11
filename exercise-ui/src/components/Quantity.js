import React, { useState } from 'react';
import { MdOutlineExposurePlus1, MdOutlineExposureNeg1 } from 'react-icons/md';

function AddOrSub() {
  const [count, setValue] = useState(0);
  const addOne = () => {
    if (count <10 ){
      setValue(count + 1);
    }
  };
  const subOne = () => {
    if (count > 0) {
        setValue(count - 1);
    }
  };
  return (
    <> 
{count}
<MdOutlineExposureNeg1 onClick={subOne} />
<MdOutlineExposurePlus1 onClick={addOne} />
      
    </>

);
}
  

export default AddOrSub;