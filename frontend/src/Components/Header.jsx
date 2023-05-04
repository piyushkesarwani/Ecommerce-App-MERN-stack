import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CartState } from "../Context/Context";

export const Header = () => {
  const {
    state: { cart },
    dispatch,
    currentUser,
    logout,
  } = CartState();

  console.log("Current User =", currentUser);

  return (
    <div>
      <Navbar
        bg="light"
        className="bg-white text-black border border-black shadow-md"
        expand="lg"
      >
        <Container>
          <Link to="/">
            <Navbar.Brand href="#home">Womania</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="flex flex-col justify-between items-center w-full">
              <div className="flex justify-center items-center gap-4">
                <Nav.Link href="#home" className="text-black">
                  Men
                </Nav.Link>
                <Nav.Link href="#link" className="text-black">
                  Women
                </Nav.Link>
                <Nav.Link href="#link" className="text-black">
                  Kids
                </Nav.Link>
                <Nav.Link href="#link" className="text-black">
                  Boys
                </Nav.Link>
                <Nav.Link href="#link" className="text-black">
                  Girls
                </Nav.Link>
              </div>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
              <div className="flex justify-center items-center gap-5">
                <p className="my-0">
                  {currentUser && (
                    <span className="font-semibold">
                      Welcome {currentUser?.username}
                    </span>
                  )}
                </p>
                <div className="flex justify-center items-center gap-3">
                  {currentUser ? (
                    <button
                      className="bg-blue-400 text-white p-2 rounded-md text-md"
                      onClick={logout}
                    >
                      Logout
                    </button>
                  ) : (
                    <Link to="/login">
                      <button className="bg-blue-400 text-white p-2 rounded-md text-md">
                        Login
                      </button>
                    </Link>
                  )}
                  <Link to="/register">
                    <button className="bg-blue-400 text-white p-2 rounded-md text-md">
                      Register
                    </button>
                  </Link>
                </div>
                <Link to="/cart">
                  <div className="bg-blue-400 text-white flex justify-center items-center gap-2 p-2">
                    <AiOutlineShoppingCart className="text-2xl" />
                    <p className="my-0">{cart.length}</p>
                  </div>
                </Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
