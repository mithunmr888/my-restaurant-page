import "./App.css";
import React, { Fragment } from "react";
import MainHeader from "./components/Layout/MainHeader";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";


function App() {
  return (
    <Fragment>
      <Cart></Cart>
      <MainHeader></MainHeader>
      <main>
        <Meals></Meals>
      </main>
    </Fragment>
  );
}

export default App;
