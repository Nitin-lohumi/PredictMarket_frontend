"use client";
import React, { useEffect } from "react";
import { Button } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import Ploting from "./Ploting";
import Model_Info from "./Model_Info";
function OutputPrediction({ prediction }) {
  const [plotSrc, setOpenGraph] = useState(null);
  const [modelinfo, setModelInfo] = useState(null);
  const [load, setload] = useState(false);
  const [aboutload, setaboutload] = useState(false);
  const [modelClosebutton, setmodelClose] = useState(true);
  const [download, setDownload] = useState(null);
  
  useEffect(() => {
    const handleShowGraph = async () => {
      try {
        setload(true);
        const response = await axios.get("http://127.0.0.1:5000/plot", {
          responseType: "blob",
        });
        const blob = response.data;
        const imageUrl = URL.createObjectURL(blob);
        const downloadin = window.URL.createObjectURL(blob);
        setOpenGraph(imageUrl);
        setDownload(downloadin);
        setload(false);
      } catch (error) {
        setload(false);
        console.error("Error fetching plot:", error);
      }
    };
    handleShowGraph();
  }, [prediction,download]);
  async function handlemodelInfo() {
    try {
      if (modelClosebutton) {
        setaboutload(true);
        setmodelClose(false);
        const res = await axios.get("http://127.0.0.1:5000/model-info");
        console.log(res.data);
        setModelInfo(res.data);
        setaboutload(false);
      } else {
        setmodelClose(true);
      }
    } catch (error) {
      console.log(error);
      setaboutload(false);
    }
  }
  return (
    <>
      <div className="border transition-all duration-200 w-full h-full border-amber-50 flex justify-center items-center">
        <div className="flex flex-col gap-3">
          <div></div>
          <div className="font-bold  text-gray-300">
            <h1 className="shadowtext-bold tracking-tight text-4xl">
              Pridected Prize
            </h1>
          </div>
          <h1 className="shadowtextgreen text-3xl font-extrabold text-center text-white  mt-2 mb-4">
            {prediction}
          </h1>

          <div>
            <>{plotSrc && <Ploting plotSrc={plotSrc} />}</>
            {download ? (
              <div className="flex text-xl w-full justify-end ">
                <a href={download} download={true} className="text-white font-bold rounded-xl hover:text-black p-2 mt-1 border
                bg-green-400
                ">
                  {" "}
                  Download Plot
                </a>
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="p-3 w-full">
            {!modelClosebutton ? (
              <>{modelinfo && <Model_Info modelinfo={modelinfo} />}</>
            ) : (
              <></>
            )}
            <Button
              loading={aboutload}
              variant="contained"
              color={modelClosebutton ? "success" : "primary"}
              className="pl-3 pr-3 mt-5 border"
              onClick={handlemodelInfo}
            >
              {modelClosebutton ? "model INFO" : "Close INFO"}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default OutputPrediction;
