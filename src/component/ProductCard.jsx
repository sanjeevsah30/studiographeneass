import React from "react";

const ProductCard = ({ data }) => {

  return (
    <>
      <div className='flex flex-col items-center justify-center  mx-5 cursor-pointer '>
        <img src={data?.image} alt='no pic'  className="w-60 h-60 " />
        <div className='content text-[1.6rem] font-semibold pt-3 '>
          <p className='  w-60 text-ellipsis overflow-hidden ... pb-2'>{data?.title.slice(0,15)}</p>
          <p className='text-[14px] text-[#16161580] font-normal text-ellipsis overflow-hidden ... pb-2 '>
            {data?.description.slice(0,100)}
          </p>
          <p className="pb-2">${data?.price}</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
