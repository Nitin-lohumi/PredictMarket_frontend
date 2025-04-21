"use client";
import React from "react";
import Header from "./component/Header";
import About from "./component/About";
import Prediction from "./component/Prediction";
import OutputPrediction from "./component/OutputPrediction";
import { createContext } from "react";
import { useState } from "react";
export const context = createContext();
function page() {
  const [prediction, setPridiction] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <>
      <context.Provider value={{ setPridiction, setLoading, loading }}>
        <div className="background min-h-screen z-5">
          <div className="overlay"></div>
          <Header />
          <br />
          <About />
          <br />
          <h1 className="text-green-600 text-2xl pb-4 text-center font-extrabold">
            Make Prediction
          </h1>
          <p className="text-xl p-1  text-green-500 shadowtext-bold font-extrabold text-center">
            Enter today's market data to predict the closing price
          </p>
          <div className="flex  w-full min-h-full">
            <div className="w-full">
              <Prediction />
            </div>
            {prediction&& (
              <>
                {" "}
                <div className="w-full border">
                  <OutputPrediction prediction={prediction} />
                </div>
              </>
            )}
          </div>
        </div>
      </context.Provider>
    </>
  );
}

export default page;
