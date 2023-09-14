import React from "react";

const RightArrow = ({ width, height, fillColor, ...restProps }) => {
  return (
    <svg
      width={width || "21"}
      height={height || "13"}
      viewBox='0 0 21 13'
      fill={fillColor || "none"}
      xmlns='http://www.w3.org/2000/svg'
      {...restProps}
    >
<path d="M1 2.5H0.5L0.5 3.5H1L1 2.5ZM56 3L51 0.113249V5.88675L56 3ZM1 3.5L51.5 3.5V2.5L1 2.5L1 3.5Z" fill="#161615"/>
    </svg>
  );
};

export default RightArrow;
