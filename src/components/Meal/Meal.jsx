import React from 'react'
import './Meal.css'
import MealItem from './MealItem/MealItem';

const MEALS = [
    {
      id: "1",
      name: "Hamburger",
      description: "The Classic Burger",
      price: 12.99,
    },
    {
      id: "2",
      name: "Fried chicken",
      description: "Special crispy chicken.",
      price: 16.49,
    },
    {
      id: "3",
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
    },
    {
      id: "4",
      name: "Green Bowl",
      description: "Healthy...and green...",
      price: 11.99,
    },
  ];
  

const Meal = () => {

    const mealsList = MEALS.map((meal) => (
        <MealItem
            id={meal.id}
            key={meal.key}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
            
    ));
  return (
    <>
        <div className="meals">
            <ul>{ mealsList }</ul>
        </div>
    </>
  )
}

export default Meal;