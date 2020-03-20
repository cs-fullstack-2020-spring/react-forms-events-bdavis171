import React, { Component, Fragment } from 'react';
import '../App.css';

class RecipeForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: '',
            time: 0,
            size: 0,
            recipeList: []
         }
    }

    // handle changes to fields
    handleChanges = (event) => {
        if (event.target.name ===  'title'){
            this.setState({title: event.target.value});
        }
        else if (event.target.name ===  'time'){
            this.setState({time: event.target.value});
        }
        else if (event.target.name ===  'size'){
            this.setState({size: event.target.value});
        }
    }

    // handle submission
    handleSubmission = (event) => {
        event.preventDefault();
        let recipe = {title:this.state.title, time:this.state.time, size:this.state.size};
        this.state.recipeList.push(recipe);
        this.setState({recipeList: this.state.recipeList});
        this.props.updateRecipeList(this.state.recipeList);
        this.setState({
            title: '',
            time: 0,
            size: 0
        })
    }

    render() { 
        return ( 
            <Fragment>
                <form action="">
                    <fieldset>
                        <legend>Recipe Form</legend>
                        <div className="formGroup">
                            <label htmlFor="title">Title:</label>
                            <input type="text" name="title" id="title" onChange={this.handleChanges} value={this.state.title}/>
                        </div>

                        <div className="formGroup">
                            <label htmlFor="time">Cooking Time:</label>
                            <input type="number" name="time" id="time" onChange={this.handleChanges} value={this.state.time}/>
                        </div>

                        <div className="formGroup">
                            <label htmlFor="size">Serving Size:</label>
                            <input type="number" name="size" id="size" onChange={this.handleChanges} value={this.state.size}/>
                        </div>

                        <div className="formGroup">
                            <button onClick={this.handleSubmission}>Submit</button>
                        </div>
                    </fieldset>
                </form>
            </Fragment>
         );
    }
}
 
export default RecipeForm;