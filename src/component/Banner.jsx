import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const Banner = () => {
  return (
    <>
      <div className='banner  bg-[#1A1A1A] pb-3 text-white '>
        <div className='background  container mx-auto '>
          <div className='banner-text font-extrabold text-[8.4rem] text-white pt-[9.3rem]   '>
            <p className=''>Fresh</p>
            <p className='texttransparent flex justify-center mr-6'>2022</p>
            <p>Looks</p>
          </div>
          <p className='mt-24  border inline-flex border-white p-0.5 '>
            see more <FiArrowUpRight className='mt-1 ml-1' />
          </p>
        </div>
      </div>
    </>
  );
};

export default Banner;
