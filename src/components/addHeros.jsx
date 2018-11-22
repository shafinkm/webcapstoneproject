import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddHero extends Component {

    render() { 
        return (
            <div>
                <label className="m-2">Hero Name:</label>
                <input className="m-2" type="text" value=""/>
                <button className="btn btn-secondary m-3">add</button>
            </div>
        );
    }
}
 
const mapStateToProps = state => {
    return {
        state: state.heroList
    };
};

const mapFunctionToProps = dispatch => {
    return {
        handleAddNewUser : () => {
           //get the value from the input field 

           //dispatch and action with the new name
        }
    }
}

export default connect(mapStateToProps)(AddHero);