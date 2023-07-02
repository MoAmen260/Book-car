/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Clock = ({ className }) => {
  return (
    <svg
      className={`clock ${className}`}
      fill="none"
      height="15"
      viewBox="0 0 14 15"
      width="14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M7.00002 4.00002V7.50002L9.33335 8.66669M12.8334 7.50002C12.8334 10.7217 10.2217 13.3334 7.00002 13.3334C3.77836 13.3334 1.16669 10.7217 1.16669 7.50002C1.16669 4.27836 3.77836 1.66669 7.00002 1.66669C10.2217 1.66669 12.8334 4.27836 12.8334 7.50002Z"
        stroke="#0A20E6"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.16667"
      />
    </svg>
  );
};
