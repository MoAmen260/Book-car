/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Check = ({ className }) => {
  return (
    <svg
      className={`check ${className}`}
      fill="none"
      height="13"
      viewBox="0 0 12 13"
      width="12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="path" d="M10 3.5L4.5 9L2 6.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};
