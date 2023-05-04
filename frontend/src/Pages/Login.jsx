import React, { useState } from "react";
import axios from "axios";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CartState } from "../Context/Context";

export const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { currentUser, login, logout } = CartState();

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(inputs);
      alert("Login Successfull");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <section className="flex flex-col justify-between items-center min-h-[100vh]">
      <Header />
      <div className="my-5 border rounded-lg bg-teal-400 p-6 flex flex-col justify-center items-center gap-4">
        <h2 className="text-center font-semibold text-lg">Login Page</h2>
        <div className="InputGroup">
          <label>Email</label>
          <br />
          <input
            required
            type="text"
            name="email"
            onChange={handleChange}
            placeholder="Enter Email"
            className="p-3 text-semibold bg-0 border-none rounded-lg"
          />
        </div>
        <div className="InputGroup">
          <label>Password</label>
          <br />
          <input
            required
            type="password"
            onChange={handleChange}
            name="password"
            placeholder="Enter password"
            className="p-3 text-semibold bg-0 border-none rounded-lg"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="p-2 w-full bg-blue-700 text-white rounded-md"
        >
          Login
        </button>
        <p>
          Already a member?{" "}
          <Link to="/register" className="text-blue-700 underline">
            Register
          </Link>
        </p>
      </div>
      <Footer />
    </section>
  );
};
