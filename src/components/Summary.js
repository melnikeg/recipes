import React from "react";
import { PropTypes } from "react";

export class Summary extends React.Component {
    
    propTypes: {
        ingredients: PropTypes.array.isRequired,
        steps: PropTypes.array.isRequired        
    }

    getDefaultProps() {
        return {
            ingredients: 0,
            steps: 0,
            title: ["recipe"]
        }
    }
    
    render() {
        return (
            <div className="summary">
                <h1>{this.props.title}</h1>
                <p>
                    <span>{this.props.ingredients.length} Ingredients</span> |
                    <span>{this.props.steps.length} Steps</span>
                </p>
            </div>
        )
    }
}