/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const NotificationBox = ({ className }) => {
  return (
    <svg
      className={`notification-box ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M7.33333 2.66667H5.2C4.0799 2.66667 3.51984 2.66667 3.09202 2.88465C2.71569 3.0764 2.40973 3.38236 2.21799 3.75869C2 4.18651 2 4.74656 2 5.86667V10.8C2 11.9201 2 12.4802 2.21799 12.908C2.40973 13.2843 2.71569 13.5903 3.09202 13.782C3.51984 14 4.07989 14 5.2 14H10.1333C11.2534 14 11.8135 14 12.2413 13.782C12.6176 13.5903 12.9236 13.2843 13.1153 12.908C13.3333 12.4802 13.3333 11.9201 13.3333 10.8V8.66667M13.4142 2.58579C14.1953 3.36683 14.1953 4.63317 13.4142 5.41421C12.6332 6.19526 11.3668 6.19526 10.5858 5.41421C9.80474 4.63317 9.80474 3.36683 10.5858 2.58579C11.3668 1.80474 12.6332 1.80474 13.4142 2.58579Z"
        stroke="#A6AFBA"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.33333"
      />
    </svg>
  );
};
