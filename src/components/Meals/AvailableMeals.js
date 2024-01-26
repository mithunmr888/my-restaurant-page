import classes from "./AvailableMeals.module.css";
import MealList from "./MealList";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealList = DUMMY_MEALS.map((meal) => (
    <MealList>
      <h3>{meal.name}</h3>
      
        <i>{meal.description}</i>
      
      <p>₹{meal.price}</p>
    </MealList>
  ));

  return (
    <section className={classes.meals}>
      <ul>{mealList}</ul>
    </section>
  );
};

export default AvailableMeals;
