import IngredientsList from "./IngredientsList"
import Instructions from "./Instructions"
import {Summary} from "./Summary"

const Recipe = ({ name, ingredients, steps }) =>
	<section id={name.toLowerCase().replace(/ /g, "-")}>
		<h1>{name}</h1>
		<IngredientsList list={ingredients} />
		<Instructions title="cooking Instructions"
			steps={steps} />			
		<Summary ingredients={ingredients} steps={steps} title={name} />		
	</section>	


export default Recipe