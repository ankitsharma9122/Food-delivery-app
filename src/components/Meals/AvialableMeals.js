import classes from './AvialableMeals.module.css';
import MealItem from './MealItem/MealItem';
import Card from '../UI/Card';
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Maggi',
      description: '2 minutes for education',
      price: 20,
    },
    {
      id: 'm2',
      name: 'soup',
      description: 'A indian specialty!',
      price: 200,
    },
    {
      id: 'm3',
      name: 'Pizza',
      description: 'American, raw, meaty',
      price: 100,
    },
    {
      id: 'm4',
      name: 'Rosogulla',
      description: 'Healthy...and yummy',
      price: 18,
    },
  ];

  const AvailableMeals = () =>{
      const mealsList =DUMMY_MEALS.map(meal => <MealItem 
        key={meal.id} 
        id={meal.id}
        name={meal.name} 
        description={meal.description} 
        price={meal.price}/>);

      return (
          <section className={classes.meals}>
            <Card>
              <ul>{mealsList}</ul>
              </Card>
          </section>
      );
  };

  export default AvailableMeals;