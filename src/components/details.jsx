import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createBrowserHistory } from "history";
const history = createBrowserHistory();

export class Details extends Component {

    componentDidMount(){
        this.props.handleLoadHeroName(this.props.id); 
    }

    render() {
        return (
            <div>
                <h2>{this.props.updatedHeroName.name} Details</h2>
                <p>id: {this.props.id}</p>
                <label className="m-2">name:</label><br/>
                <input id="update_hero" type="text" value={this.props.updatedHeroName.name} onChange={(event) => { this.props.handleChange(event, this.props.id) }}/><br/>
                
                <button id="back-button" className="btn btn-secondary m-2" onClick={ this.props.handleGoBack }>go back</button>
                <button id="save-hero" className="btn btn-secondary m-2" onClick={ this.props.handleUpdateHero }>save</button>
            </div>
        );
    }
}

export const mapFunctionToProps = dispatch => {
    return {
        handleUpdateHero : e => {
            //const updateValue = document.getElementById("update_hero").value;
            const updateValue = e.target.value;


            if(updateValue !== ""){
                dispatch({
                    type: "UPDATE_HERO_LIST"
                });
                dispatch({
                    type: "RESET_UPDATE_VALUE"
                });
                history.goBack();
            } 
        },
        handleChange: (e, id) => {
            dispatch({
                type: "SET_HERO_NAME",
                payload: { id: parseInt(id), name: e.target.value }
            }); 
        },
        handleLoadHeroName: id => {
            dispatch({
                type: "LOAD_HERO_NAME",
                payload: parseInt(id)
            });
        },
        handleGoBack: _ => {
            history.goBack();
        }
    }
}

export const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps, mapFunctionToProps)(Details);