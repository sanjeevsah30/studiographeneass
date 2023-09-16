import React from "react";

const FacebookSvg = ({ width, height, fillColor, ...restProps }) => {
    return (
      <svg
        width={width || "21"}
        height={height || "13"}
        viewBox="0 0 21 13"
        fill={"#626262" || "none"}
        xmlns="http://www.w3.org/2000/svg"
        {...restProps}
        className="cursor-pointer hover:fill-blue-500"

      >
<path d="M4.20514 4.24272L4.43836 2.87767H2.97945V1.99223C2.97945 1.61869 3.18288 1.25437 3.8363 1.25437H4.5V0.092233C4.5 0.092233 3.89795 0 3.3226 0C2.12055 0 1.33562 0.653932 1.33562 1.83728V2.87767H0V4.24272H1.33562V7.54282C1.60377 7.58063 1.87808 7.6 2.15753 7.6C2.43699 7.6 2.7113 7.58063 2.97945 7.54282V4.24272H4.20514Z" />

      </svg>
    );
  };
  
  export default FacebookSvg;