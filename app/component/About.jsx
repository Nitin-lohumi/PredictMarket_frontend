import React from "react";

function About() {
  return (
    <>
      <div>
        <h1 className="text-white p-3">
          This project utilizes machine learning to forecast the Nifty 50 Close
          Price based on key economic factors like:
        </h1>
        <ul className="flex p-3 gap-3 font-bold">
          <li className="text-blue-700 shadowtext">Bank Rate ,</li>
          <li className="text-blue-700 shadowtext">LAF Rates ,</li>
          <li className="text-blue-700 shadowtext">CRR, SLR , </li>
          <li className="text-blue-700 shadowtext">Market Volumes ,</li>
          <li className="text-blue-700 shadowtext">Open ,</li>
          <li className="text-blue-700 shadowtext">High ,</li>
          <li className="text-blue-700 shadowtext">Low Prices</li>
        </ul>
      </div>
    </>
  );
}

export default About;
