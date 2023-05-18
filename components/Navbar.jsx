"use client";
import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

import { Cart } from "./";
import { useStateContext } from "@/context/stateContext";
const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  // const { showCart, setShowCart } = useState();

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Perry Luscious</Link>
      </p>

      <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
