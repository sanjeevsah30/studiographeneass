import React, { useState } from "react";
import TranportSvg from "../svg/TranportSvg";
import FacebookSvg from "../svg/FacebookSvg";
import LinkedinSvg from "../svg/LinkedinSvg";
import TwitterSvg from "../svg/TwitterSvg";
import InstagramSvg from "../svg/InstagramSvg";
import "../style/navbar.scss";

const Navbar = () => {
  const [isResponsive, setIsResponsive] = useState(false);

  const toggleResponsive = () => {
    setIsResponsive(!isResponsive);
  };
  const navbarData = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    {
      name: "Our Products",
      id: "product",
      child: [
        { name: "Product 1", id: "p1" },
        { name: "Product 2", id: "p2" },
        { name: "Product 3", id: "p3" },
        { name: "Product 4", id: "p4" },
      ],
    },
    { name: "Contact Us", id: "contact" },
  ];

  return (
    <>
      <div className='top-navabar bg-[#1A1A1A] text-[#626262] font-normal mx-auto pb-3'>
        <div className='container mx-auto  flex justify-between'>
          <div className='flex items-center justify-center text-xs'>
            <TranportSvg className='mr-2 ' />
            <nav>Free delivery</nav>
            <span className='mx-2'>|</span>
            <nav>Return policy</nav>
          </div>

          <div className='flex items-center justify-center text-[10px] '>
            <nav
              className='pr-5 cursor-pointer hover:text-blue-500'
            >
              Login
            </nav>
            <nav className="cursor-pointer hover:text-blue-500">Follow us</nav>
            <div className='flex pl-4 mt-1.5'>
              <nav>
                <FacebookSvg />
              </nav>
              <nav>
                <LinkedinSvg />
              </nav>

              <nav>
                <TwitterSvg />
              </nav>
              <nav>
                <InstagramSvg />
              </nav>
            </div>
          </div>
        </div>

        <div className='secondNvabar container mx-auto  flex justify-between items-end pt-2 pb-1 text-[#FFFFFF]'>
          <div>
            <span className='text-[2.5rem] font-extralight '>ShopKart</span>
          </div>

          <div className=' text-sm font-normal mb-1 cart'>
            <span className=' pr-2'>WISHLIST (0)</span>
            <span>BAG (0)</span>
          </div>
        </div>
        <hr className='container mx-auto ' />

        <div
          className={`topnav${
            isResponsive ? " responsive" : ""
          } container mx-auto font-semibold `}
          id='myTopnav'
        >
          {navbarData?.map((item, index) => (
            <div className='dropdown mr-10' key={index}>
              <button className='dropbtn'>
                {item.name}
                <i className='fa fa-caret-down'></i>
              </button>

              <div className='dropdown-content flex justify-center items-center'>
                {item?.child?.map((item, index) => (
                  <a href='#' key={index}>
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          ))}

          <a
            href='javascript:void(0);'
            style={{ fontSize: "15px" }}
            className='icon'
            onClick={toggleResponsive}
          >
            &#9776;
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
