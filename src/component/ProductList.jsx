import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    const apiUrl = "https://fakestoreapi.com/products";

    axios
      .get(apiUrl)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  const categoryFilter = (type) => {
    console.log("hhhh");
    if (category) {
      setProducts((prev) => {
        prev?.filter((i) => i?.category == type);
      });
    }
  };
  return (
    <>
      <div className='flex flex-row mt-9'>
        <div className=' product-List flex flex-col w-[16%] text-[18px] font-normal cursor-pointer '>
          {categories?.map((item, index) => (
            <span
              className='hover:text-[1.6rem]  pb-6 transition-all '
              key={index}
              onClick={() => setCategory(item)}
            >
              {item}
            </span>
          ))}
        </div>
        <div className='product-list flex flex-row  w-[84%] overflow-x-auto overflow-hidden' id="style-4">
          {category
            ? products
                ?.filter((i) => i?.category == category)
                .map((item, index) => <ProductCard key={index} data={item} />)
            : products.map((item, index) => (
                <ProductCard key={index} data={item} />
              ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
