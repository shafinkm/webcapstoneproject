import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {
    render() { 
        return (
            <React.Fragment>
                <h1 className="h4">Top Heros</h1>
                { this.props.herosList.slice(1, 5).map(hero => {
                    return <a key={hero.id} href={`/details/${hero.id}`} className="badge badge-secondary m-3 p-5">{hero.name}</a>
                })}
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        herosList: state.herosList
    };
};


 
export default connect(mapStateToProps)(Dashboard);