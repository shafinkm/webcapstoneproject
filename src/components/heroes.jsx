import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

/** IMPORTING USER COMPONENTS */
import AddHero from './addHeros';

export class Heroes extends Component {
    render() { 
        return (
            <React.Fragment>
                <AddHero />
                <h1 className="h5 m-3">My Heroes</h1>
                { 
                    this.props.herosList.map(hero => {
                        return (
                            <div key={hero.id}>
                                <NavLink to={`/details/${hero.id}`}className="btn btn-secondary m-2" style={{ width:"200px"}}>
                                    <span className="btn btn-primary">{hero.id}</span>
                                    <span className="m-5">{hero.name}</span>
                                </NavLink>
                                <button onClick={this.props.handleRemoveHero} value={hero.id} className="btn btn-danger">X</button> 
                            </div>
                        );
                    })
                }
            </React.Fragment>
        );
    }
}

export const mapFunctionToProps = dispatch => {
    return {
        handleRemoveHero: (e) => {
            const heroID = e.target.getAttribute('value');
            dispatch({ 
                type: 'REMOVE_HERO', 
                payload: {
                    id: parseInt(heroID)
                }
            });
        }
    }
}

export const mapStateToProps = state => {
    return state;
};
 
export default connect(mapStateToProps, mapFunctionToProps)(Heroes);