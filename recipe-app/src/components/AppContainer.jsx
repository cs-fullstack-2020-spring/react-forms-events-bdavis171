import React, { Component, Fragment } from 'react';
import Header from './Header';
import RecipeDisplay from './RecipeDisplay';
import RecipeForm from './RecipeForm';
import '../App.css';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            recipeList: []
         }
    }

    // update list of recipes
    updateRecipeList = (newList) => {
        this.setState({recipeList: newList});
    }

    render() { 
        return ( 
            <Fragment>
                <div className="container">
                    <div className="header">
                        <Header/>
                    </div>

                    <div className="recipe-list">
                        <RecipeDisplay recipeList={this.state.recipeList}/>
                    </div>

                    <div className="recipe-form">
                        <RecipeForm updateRecipeList={this.updateRecipeList}/>
                    </div>
                </div>
            </Fragment>
         );
    }
}
 
export default AppContainer;