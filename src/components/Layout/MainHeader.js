import classes from "./MainHeader.module.css";
import CartUpdater from "./CartUpdater";

const MainHeader = () => {
  return (
    <header className={classes["mainheader"]}>
      <h1>ReactMeals</h1>
    <CartUpdater></CartUpdater>
    </header>
  );
};

export default MainHeader;
