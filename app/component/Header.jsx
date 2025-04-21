import React from 'react'
function Header() {
  return (
    <>
    <div className='sticky top-0 left-0 bg-black p-2 z-20'>
        <h1 className="capitalize text-3xl text-white text-center p-2">interest Rate Impact Prediction on Indian Stock Market</h1>
        <p className='font-semibold text-left capitalize leading-1 p-2 text-white'>Predict market reactions using macroeconomic indicators and Random Forest Regression</p>
    </div>
    </>
  )
}
export default Header;