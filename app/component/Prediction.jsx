"use client";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import axios from "axios";
import { context } from "../page";
import { useContext } from "react";
function Prediction() {
  const contextVal = useContext(context);
  const [load,setLoad] =useState(false);
  const [filledData, setfilledData] = useState({
    open: "",
    High: "",
    Volume: "",
    low: "",
    BankRate: "",
    LAFRates: "",
    SDFRate: "",
    MSFRate: "",
  });
  function handlechange(e) {
    e.preventDefault();
    let name = e.target.name;
    let value = e.target.value;
    setfilledData({ ...filledData, [name]: value });
  }

  async function handlePredict() {
    try {
      setLoad(true)
      const res = await axios.post("http://127.0.0.1:5000/predict", filledData);
      contextVal.setPridiction(res.data.predicted_value);
      setLoad(false)
    } catch (error) {
      console.log(error);
      setLoad(false)
    }
  }
  return (
    <>
      <div className="p-3 z-10 ">
        <div className="p-2 w-96 m-auto">
          <label htmlFor="open" className="text-white p-2 mt-4">
            Open prize
          </label>
          <input
            type="number"
            id="open"
            placeholder="Opening price of Nifty"
            inputMode="decimal"
            style={{color:load?"grey":""}}
            disabled={load}
            value={filledData.open}
            name="open"
            onChange={handlechange}
            className="no-spinner w-full mb-4 mt-2 pl-4 pr-4 py-2 rounded-xl border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-300 placeholder-gray-500 transition-all duration-200"
          />
          <label htmlFor="open" className="text-white p-2 mt-4">
            High prize
          </label>
          <input
            type="number"
            id="open"
            placeholder="Enter High price of Market"
            inputMode="decimal"
            value={filledData.High}
            name="High"
            style={{color:load?"grey":""}}
            disabled={load}
            onChange={handlechange}
            className="no-spinner w-full mb-4 mt-2  pl-4 pr-4 py-2 rounded-xl border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-300 placeholder-gray-500 transition-all duration-200"
          />
          <label htmlFor="open" className="text-white p-2 mt-4">
            Low prize
          </label>
          <input
            type="number"
            id="open"
            placeholder="Enter low price of Market"
            inputMode="decimal"
            style={{color:load?"grey":""}}
            disabled={load}
            value={filledData.low}
            name="low"
            onChange={handlechange}
            className="no-spinner w-full mb-4 mt-2 pl-4 pr-4 py-2 rounded-xl border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-300 placeholder-gray-500 transition-all duration-200"
          />
          <label htmlFor="open" className="text-white p-2 mt-4">
            Volume
          </label>
          <input
            type="number"
            id="open"
            style={{color:load?"grey":""}}
            disabled={load}
            placeholder=" Enter Volume of Market"
            inputMode="decimal"
            value={filledData.Volume}
            name="Volume"
            onChange={handlechange}
            className="no-spinner w-full mb-4 mt-2 pl-4 pr-4 py-2 rounded-xl border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-300 placeholder-gray-500 transition-all duration-200"
          />
          <label htmlFor="open" className="text-white p-2 mt-4">
            Bank Rate
          </label>
          <input
            type="number"
            id="open"
            style={{color:load?"grey":""}}
            disabled={load}
            placeholder="Enter Bank rate"
            inputMode="decimal"
            value={filledData.BankRate}
            name="BankRate"
            onChange={handlechange}
            className="no-spinner w-full mb-4 mt-2 pl-4 pr-4 py-2 rounded-xl border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-300 placeholder-gray-500 transition-all duration-200"
          />
          <label htmlFor="open" className="text-white p-2 mt-4">
            Fix Range LAF Rate
          </label>
          <input
            type="number"
            id="open"
            style={{color:load?"grey":""}}
            disabled={load}
            placeholder="Fix Range LAF Rate price of Market"
            inputMode="decimal"
            value={filledData.LAFRates}
            name="LAFRates"
            onChange={handlechange}
            className="no-spinner w-full mb-4 mt-2 pl-4 pr-4 py-2 rounded-xl border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-300 placeholder-gray-500 transition-all duration-200"
          />
          <label htmlFor="open" className="text-white p-2 mt-4">
            Standing Deposit Facility (SDF) Rate
          </label>
          <input
            type="number"
            id="open"
            style={{color:load?"grey":""}}
            disabled={load}
            placeholder="Standing Deposit Facility Rate of market"
            inputMode="decimal"
            value={filledData.SDFRate}
            name="SDFRate"
            onChange={handlechange}
            className="no-spinner w-full mb-4 mt-2 pl-4 pr-4 py-2 rounded-xl border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-300 placeholder-gray-500 transition-all duration-200"
          />
          <label htmlFor="open" className="text-white p-2 mt-4">
            Marginal Standing Facility (MSF) Rate
          </label>
          <input
            type="number"
            id="open"
            style={{color:load?"grey":""}}
            disabled={load}
            placeholder="Enter Marginal Standing Facility Rate of market"
            inputMode="decimal"
            value={filledData.MSFRate}
            name="MSFRate"
            onChange={handlechange}
            className="no-spinner w-full mb-4 mt-2 pl-4 pr-4 py-2 rounded-xl border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-300 placeholder-gray-500 transition-all duration-200"
          />
          <div className="flex  justify-end w-full">
            <Button
              variant="contained"
              color="primary"
              className="pl-3 pr-3"
              onClick={handlePredict}
              disabled={load}
            >
              Predict
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Prediction;
