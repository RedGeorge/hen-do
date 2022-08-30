import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "../Navbar";
import "../App.css";

const Layout = () => {
  return (
    <>
      <Navbar />
      <p className="navbarWarning">Only use the navbar if the QR codes do not work! Don't cheat like a loser!</p>
      <Outlet />
    </>
  );
};

export default Layout;