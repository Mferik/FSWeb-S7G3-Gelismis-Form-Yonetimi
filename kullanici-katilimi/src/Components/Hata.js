import React from 'react'

const Hata = ({errors}) => {
    let errorArr = Object.values(errors);
  return (
    errorArr.map((item,index) => <h3 key={index}></h3>)
  );
}

export default Hata