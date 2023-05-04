import React from "react";
import { CartState } from "../Context/Context";

export const SingleProduct = ({ item }) => {
  const {
    id,
    department,
    price,
    product,
    productAdjective,
    productDescription,
    productName,
    img,
  } = item;

  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <article className="w-[300px] h-auto p-3 border mx-4 my-3">
      <div className="w-[250px] h-[auto]">
        <img src={img} alt="image" className="w-full h-full object-ceover" />
      </div>
      <h4 className="my-2 text-md">{productName}</h4>
      <p className="font-semibold">{product}</p>
      <p className="font-regular">{productDescription}</p>
      <div className="flex justify-between items-center">
        <p className="font-semibold">Rs. {price}</p>
        <p>{department}</p>
      </div>
      {cart.some((p) => p.id === item.id) ? (
        <button
          onClick={() =>
            dispatch({
              type: "REMOVE_FROM_CART",
              payload: item,
            })
          }
          className="bg-red-600 text-white p-2 w-full rounded-md"
        >
          remove from Cart
        </button>
      ) : (
        <button
          onClick={() =>
            dispatch({
              type: "ADD_TO_CART",
              payload: item,
            })
          }
          className="bg-blue-600 text-white p-2 w-full rounded-md"
        >
          Add To Cart
        </button>
      )}
    </article>
  );
};
