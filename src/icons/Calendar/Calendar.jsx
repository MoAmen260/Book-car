/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Calendar = ({ className }) => {
  return (
    <svg
      className={`calendar ${className}`}
      fill="none"
      height="15"
      viewBox="0 0 14 15"
      width="14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M12.25 6.33335H1.75M9.33333 1.66669V4.00002M4.66667 1.66669V4.00002M4.55 13.3334H9.45C10.4301 13.3334 10.9201 13.3334 11.2945 13.1426C11.6238 12.9748 11.8915 12.7071 12.0593 12.3778C12.25 12.0035 12.25 11.5134 12.25 10.5334V5.63335C12.25 4.65326 12.25 4.16322 12.0593 3.78887C11.8915 3.45959 11.6238 3.19187 11.2945 3.02409C10.9201 2.83335 10.4301 2.83335 9.45 2.83335H4.55C3.56991 2.83335 3.07986 2.83335 2.70552 3.02409C2.37623 3.19187 2.10852 3.45959 1.94074 3.78887C1.75 4.16322 1.75 4.65326 1.75 5.63335V10.5334C1.75 11.5134 1.75 12.0035 1.94074 12.3778C2.10852 12.7071 2.37623 12.9748 2.70552 13.1426C3.07986 13.3334 3.56991 13.3334 4.55 13.3334Z"
        stroke="#0A20E6"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.16667"
      />
    </svg>
  );
};
