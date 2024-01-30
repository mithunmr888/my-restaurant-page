import "./App.css";
import React, { useState } from "react";
import MainHeader from "./components/Layout/MainHeader";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  //<CartProvider></CartProvider>
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <MainHeader onShowCart={showCartHandler}></MainHeader>
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
  );
}

export default App;
