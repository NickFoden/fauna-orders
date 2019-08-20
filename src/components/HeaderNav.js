import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const HeaderNav = () => {
  return (
    <header className="header_nav">
      <Link to="/">Fauna Orders</Link>
    </header>
  );
};

export default HeaderNav;
