import React, { Component } from 'react';
import { connect } from 'react-redux';

export class AddHero extends Component {

    render() { 
        return (
            <div>
                <label className="m-2">Hero Name:</label>
                <input id="hero_input" className="m-2" type="text" value={this.props.newHeroValue} onChange={this.props.handleChange}/>
                <button id="add-hero" className="btn btn-secondary m-3" onClick={this.props.handleAddNewUser.bind(this)}>add</button>
            </div>
        );
    }
}
 
export const mapStateToProps = state => {
    return state;
};

export const mapFunctionToProps = dispatch => {
    return {
        handleAddNewUser : (e) => {
            //clear the input field
            document.querySelector("#hero_input").value = "";

            //dispatch the action to add a new hero
            dispatch({ 
                type: 'ADD_HERO'
            });
        },
        handleChange: e => {
            const newHeroValue = e.target.value;
            dispatch({ 
                type: 'ADD_NEW_HERO_VALUE', 
                payload: {
                    newHeroValue
                }
            });   
        }
    }
}

export default connect(mapStateToProps, mapFunctionToProps)(AddHero);