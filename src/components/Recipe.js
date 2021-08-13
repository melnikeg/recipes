/* const data = [
			"steps": [
			"Cook the fish on the grill until hot.",
			"Place the fish on the 3 tortillas.",
			"Top them with lettuce, tomatoes, and cheese."
		]
	}
] */
import IngredientsList from "./IngredientsList"
import Instructions from "./Instructions"

const Recipe = ({ name, ingredients, steps }) =>
	<section id={name.toLowerCase().replace(/ /g, "-")}>
		<h1>{name}</h1>
		<IngredientsList list={ingredients} />
		<Instructions title="cooking Instructions"
			steps={steps} />			
	</section>

export default Recipe