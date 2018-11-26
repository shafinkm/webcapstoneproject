import React, { Component } from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class SearchList extends Component {
    render() { 
        return (
            <ul className="list-group">
                {this.props.filteredHeroList.map(hero => {
                    return (
                        <NavLink to={`/details/${hero.id}`} key={hero.id} className="list-group-item" style={{ width:"172px" }}>{hero.name}</NavLink>
                        
                    );
                })}
            </ul>
        );
    }
}
 
const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps)(SearchList);