import classes from "./MainHeader.module.css";
import { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import ButtonHeader from "./ButtonHeader";

const MainHeader = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>RedinnMeals</h1>
        <ButtonHeader></ButtonHeader>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default MainHeader;
