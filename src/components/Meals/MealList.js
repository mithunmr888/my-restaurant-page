import classes from "./MealList.module.css";

const MealList = (props) => {
  return <li className={classes.meallist}>{props.children}</li>;
};

export default MealList;
