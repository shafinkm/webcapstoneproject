import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class Dashboard extends Component {
    render() { 
        return (
            <React.Fragment>
                <h1 className="h4">Top Heros</h1>
                { this.props.herosList.slice(0, 5).map(hero => {
                    return <NavLink key={hero.id} to={`/details/${hero.id}`} className="badge badge-secondary m-3 p-5">{hero.name}</NavLink>
                })}
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return state;
};


 
export default connect(mapStateToProps)(Dashboard);