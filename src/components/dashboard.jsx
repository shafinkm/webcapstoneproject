import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import SearchList from './searchlist';

export class Dashboard extends Component {
    componentDidMount(){
        this.props.handleClearSearchQuery();
    }

    render() { 
        return (
            <React.Fragment>
                <h1 className="h4">Top Heros</h1>
                { this.props.herosList.slice(0, 5).map(hero => {
                    return <NavLink key={hero.id} to={`/details/${hero.id}`} className="badge badge-secondary m-3 p-5">{hero.name}</NavLink>
                })}
                <br /><label>Hero Search</label><br />
                
                <input id="search_query" type="text" value={this.props.searchQuery} onChange={this.props.handleChange}/>
                {
                    (this.props.searchQuery)? <SearchList /> : <div></div>
                }
            </React.Fragment>
        );
    }
}

export const mapStateToProps = state => {
    return state;
};

export const mapFunctionToProps = dispatch => {
    return {
        handleChange: e => {
            const searchQuery = e.target.value;
            dispatch({ 
                type: 'FILTER_HERO_LIST', 
                payload: searchQuery
            });   
        },
        handleClearSearchQuery: _ => {
            dispatch({
               type: 'CLEAR_SEARCH_QUERY' 
            });
        }
    }
}
 
export default connect(mapStateToProps, mapFunctionToProps)(Dashboard);