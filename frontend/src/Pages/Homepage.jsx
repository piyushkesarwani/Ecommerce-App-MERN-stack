import React from "react";
import { Header } from "../Components/Header";
import img1 from "../assets/img1.jpg";
import { data } from "../Data";
import { SingleProduct } from "../Components/SingleProduct";
import { EnquiryForm } from "../Components/EnquiryForm";
import { Footer } from "../Components/Footer";

export const Homepage = () => {
  return (
    <section className="container mx-auto">
      <Header />
      <div className="heroSection w-[100%] border h-[70%] my-9">
        <img className="w-full h-full object-cover" src={img1} alt="Image" />
      </div>
      <div className="secondSection w-full h-auto p-4 flex justify-around items-center gap-1 flex-wrap">
        <h2>Browse from 100+ Women Clothes And Casuals at affordable price.</h2>
        {data.map((item, index) => {
          return <SingleProduct item={item} key={index} />;
        })}
      </div>
      <EnquiryForm />
      <Footer />
    </section>
  );
};
