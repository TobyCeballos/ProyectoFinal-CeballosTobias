import React, { useEffect, useState } from "react";
import ItemListContainer from "../components/ItemListContainer";
import { useParams } from "react-router-dom";
import axios from "axios";
import {IoIosArrowDown} from "react-icons/io"
const Category = () => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [show, setShow] = useState(false);
  function dropdown() {
    setShow(!show);
  }
  const categories = [
    { to: "smartphones", name: "smartphones" },
    { to: "laptops", name: "laptops" },
    { to: "fragrances", name: "fragrances" },
    { to: "skincare", name: "skincare" },
    { to: "groceries", name: "groceries" },
    { to: "home-decoration", name: "home-decoration" },
    { to: "furniture", name: "furniture" },
    { to: "tops", name: "tops" },
    { to: "womens-dresses", name: "womens-dresses" },
    { to: "womens-shoes", name: "womens-shoes" },
    { to: "mens-shirts", name: "mens-shirts" },
    { to: "mens-shoes", name: "mens-shoes" },
    { to: "mens-watches", name: "mens-watches" },
    { to: "womens-watches", name: "womens-watches" },
    { to: "womens-bags", name: "womens-bags" },
    { to: "womens-jewellery", name: "womens-jewellery" },
    { to: "sunglasses", name: "sunglasses" },
    { to: "automotive", name: "automotive" },
    { to: "motorcycle", name: "motorcycle" },
    { to: "lighting", name: "lighting" },
  ];
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/category/${categoryId}`)
      .then((response) => {
        console.log(response.data.products);
        setItems(response.data.products);
      });
  }, []);

  return (
    <div>
      <div className="px-[15%] pt-[80px]">
        <h1 className=" text-3xl text-slate-600 mb-2 ml-2 font-mono font-semibold">
          ¿Que deseas comprar hoy?
        </h1>

        <div className="relative inline-block text-left">
          <div>
            <button
              onClick={() => {
                dropdown();
              }}
              type="button"
              className="flex align-middle text-lg bg-slate-50 py-2 px-6 rounded-full"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
            >
              Filtro
              <IoIosArrowDown
                className={`${
                  show ? "rotate-180" : null
                } transition-all ease-in-out -mr-1 h-7 text-gray-400`}
              />
            </button>
          </div>
          {show ? (
            <div
              className="absolute -left-[50%] z-10 mt-4 w-56 origin-top-right rounded-md bg-slate-200 shadow-lg ring ring-black ring-opacity-5 focus:outline-none"
              aria-orientation="vertical"
            >
              <div className="py-1" role="none">
                {categories.map((category, index) => (
                  <a
                    href={`/category/${category.to}`}
                    className={`${
                      category.separed ? "border-t border-gray-900" : null
                    }text-gray-100 block px-4 py-2 text-lg hover:bg-indigo-400`}
                    role="menuitem"
                    id={`menu-item-${index}`}
                    key={index}
                  >
                    {category.name}
                  </a>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <ItemListContainer productsData={items} />{" "}
    </div>
  );
};

export default Category;
