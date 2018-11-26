import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {

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
                
                <button className="btn btn-secondary m-2">go back</button>
                <button className="btn btn-secondary m-2" onClick={this.props.handleUpdateHero.bind(this)}>save</button>
            </div>
        );
    }
}
 


const mapFunctionToProps = dispatch => {
    return {
        handleUpdateHero : (e) => {
            const updateValue = document.getElementById("update_hero").value;

            //clear the input field
            document.getElementById("update_hero").value = "";

            if(updateValue !== ""){
                dispatch({
                    type: "UPDATE_HERO_LIST"
                });
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
        }
    }
}

const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps, mapFunctionToProps)(Details);