import React from "react";
import "./Loader.css";
const Loader = () => {
  return (
    <div className="w-[100%] h-[100vh] fixed z-[100] flex justify-center items-center bg-purple-600">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
