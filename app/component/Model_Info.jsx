import React from "react";
function Model_Info({ modelinfo }) {
  return (
    <>
      <div className="flex text-2xl gap-3">
          <ul className="flex flex-col gap-4">
            <li className="text-white">library_used - {modelinfo.library_used}</li>
            <li className="text-green-600">model_type - {modelinfo.model_type}</li>
            <li className="text-yellow-500"> prediction_target - {modelinfo.prediction_target}</li>
          </ul>
          <div>
            <h1 className="text-gray-400">Expected_features</h1>
            {(modelinfo.trained_on_features).map((v, i) => {
              return <div key={i}>
                <li className="text-white">{v}</li>
               </div>
            })}
          </div>
      </div>
    </>
  );
}

export default Model_Info;
