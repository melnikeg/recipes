export const Summary = (props) => 
        <div className="summary">
            <h1>{props.title}</h1>
            <p>
                <span>{props.ingredients.length} Ingredients</span> |
                <span>{props.steps.length} Steps</span>
            </p>
        </div>  
         