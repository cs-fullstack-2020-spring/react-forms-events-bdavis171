import React, { Component, Fragment } from 'react';

class RecipeDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Fragment>
                <h2>List of Recipes</h2>
                {this.props.recipeList.map(
                    (recipe,inx) => {
                        return(
                        <div key={inx}>
                            <p>{recipe.title}</p>
                            <p>Prep Time: {recipe.time}</p>
                            <p>Serving Size: {recipe.size}</p>
                        </div>
                         ) }
                )}
            </Fragment>
         );
    }
}
 
export default RecipeDisplay;