import React from "react";

function Ploting({ plotSrc }) {
  return (
    <>
      <img
        src={plotSrc}
        alt="Prediction Plot"
        className="rounded shadow-md w-4/4 m-auto max-w-2xl h-80 "
      />
    </>
  );
}

export default Ploting;
