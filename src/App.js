import "./App.css";
import React, { Fragment } from "react";
import MainHeader from "./components/Layout/MainHeader";
import SummaryCard from "./components/Layout/SummaryCard";

function App() {
  return (
    <Fragment>
      <MainHeader></MainHeader>
      <SummaryCard></SummaryCard>
    </Fragment>
  );
}

export default App;
