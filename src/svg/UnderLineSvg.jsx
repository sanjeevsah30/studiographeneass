import React from "react";

const UnderLineSvg = ({ width, height, fillColor, ...restProps }) => {
  return (
    <svg
      width={width || "21"}
      height={height || "13"}
      viewBox='0 0 21 13'
      fill={fillColor || "none"}
      xmlns='http://www.w3.org/2000/svg'
      {...restProps}
    >
<line x1="11" y1="10.5" x2="659" y2="10.4999" stroke="#161615"/>
<path d="M11 0L12.789 9.21102L22 11L12.789 12.789L11 22L9.21102 12.789L0 11L9.21102 9.21102L11 0Z" fill="black"/>

    </svg>
  );
};

export default UnderLineSvg;
