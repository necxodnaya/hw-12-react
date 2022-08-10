import React from 'react'
import classes from './AvailabelMeals.module.css'
import MealItem from './MealItem'
import Card from '../UI/Card'
const DUMMY_MEALS = [
	{
		id: 'm1',
		name: 'avocado	',
		description: 'thin green peel',
		price: 33.99,
	},
	{
		id: 'm2',
		name: 'broccoli',
		description: 'Fiesta',
		price: 17.5,
	},
	{
		id: 'm3',
		name: 'potato',
		description: 'ledy fingers',
		price: 18.99,
	},
	{
		id: 'm4',
		name: 'herring fish',
		description: 'sardina pilchardus',
		price: 23.67,
	},
]

function AvailableMeals() {
	const mealsList = DUMMY_MEALS.map((meal) => (
		<MealItem
			id={meal.id}
			key={meal.id}
			price={meal.price}
			description={meal.description}
			name={meal.name}
		/>
	))

	return (
		<section className={classes.meals}>
			<Card>
				<ul>{mealsList}</ul>
			</Card>
		</section>
	)
}

export default AvailableMeals
