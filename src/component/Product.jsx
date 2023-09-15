import React from "react";
import RightArrow from "../svg/RightArrow";
import LeftArrow from "../svg/LeftArrow";
import ProductList from "./ProductList";

const Product = () => {
  return (
    <>
      <div className='container mx-auto mt-20'>
        <div className='heading flex  justify-between'>
            <div>
          <span className='text-[5.6rem] underline-md '>NEW PRODUCTS</span>
          <hr className="bg-black h-[1px] p-0" />
          </div>
          <div className=' flex justify-center items-center'>
            <LeftArrow className='cursor-pointer' width={"6.2rem"} />
            <RightArrow className='cursor-pointer' width={"6.2rem"} />
          </div>
        </div>
        

        <ProductList />
      </div>
    </>
  );
};

export default Product;
