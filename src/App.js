import "./App.css";
import React, { Fragment } from "react";
import MainHeader from "./components/Layout/MainHeader";
import Meals from "./components/Meals/Meals";


function App() {
  return (
    <Fragment>
      <MainHeader></MainHeader>
      <main>
        <Meals></Meals>
      </main>
    </Fragment>
  );
}

export default App;
