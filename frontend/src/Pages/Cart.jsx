import React, { useState, useEffect } from "react";
import { CartState } from "../Context/Context";
import { Header } from "../Components/Header";
import { AiFillDelete } from "react-icons/ai";

export const Cart = () => {
  const [total, setTotal] = useState(0);
  const {
    state: { cart },
    dispatch,
  } = CartState();

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + parseInt(curr.price), 0));
  }, [cart]);

  return (
    <section className="container mx-auto">
      <Header />
      <h1 className="my-5 text-lg font-semibold">Your Order Details</h1>
      <div className="my-5 mainContainer flex justify-start items-start gap-2">
        <div className="left w-[50%] h-auto">
          {cart.map((item, index) => {
            return (
              <>
                <article
                  key={index}
                  className="flex items-start gap-4 border mb-4 p-3 rounded-md shadow-md"
                >
                  <div className="w-[150px] h-[150px]">
                    <img
                      className="w-full h-auto object-cover"
                      src={item.img}
                      alt="Image"
                    />
                  </div>
                  <h4 className="my-2 text-md">{item.productName}</h4>
                  <div className="flex justify-between items-center gap-4">
                    <p className="font-semibold">Rs. {item.price}</p>
                    <p>{item.department}</p>
                  </div>
                  <button
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: item,
                      })
                    }
                    className="bg-red-600 text-white p-2 rounded-md"
                  >
                    <AiFillDelete />
                  </button>
                </article>
              </>
            );
          })}
        </div>
        <div className="rightCartSection border bg-[white] relative p-3">
          <div>
            <div className="flex justify-between items-center p-2 gap-4">
              <h2 className="text-xl font-bold">Order Summary</h2>
              <button
                onClick={() =>
                  dispatch({
                    type: "CLEAR_CART",
                    dispatch: cart,
                  })
                }
                className="bg-red-500 text-white p-1 text-xl my-0"
              >
                Clear Cart
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <h4>Items {cart.length}</h4>
          </div>

          <div className="w-full">
            <p className="text-black text-xl font-bold">
              Total Price = Rs. {total}
            </p>
            <button
              type="button"
              className="bg-blue-400 border p-3 text-white text-md font-bold w-full"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
