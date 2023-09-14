import React from "react";

const LeftArrow = ({ width, height, fillColor, ...restProps }) => {
  return (
    <svg
      width={width || "21"}
      height={height || "13"}
      viewBox='0 0 21 13'
      fill={fillColor || "none"}
      xmlns='http://www.w3.org/2000/svg'
      {...restProps}
    >
     <path d="M55 3.5H55.5V2.5H55V3.5ZM0 3L5 5.88675V0.113249L0 3ZM55 2.5L4.5 2.5V3.5L55 3.5V2.5Z" fill="#161615"/>

    </svg>
  );
};

export default LeftArrow;
