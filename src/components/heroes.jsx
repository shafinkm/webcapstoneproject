import React, { Component } from 'react';
import { connect } from 'react-redux';

/** IMPORTING USER COMPONENTS */
import AddHero from './addHeros';

class Heroes extends Component {
    render() { 
        return (
            <React.Fragment>
                <AddHero />
                <h1 className="h5 m-3">My Heroes</h1>
                {
                    this.props.herosList.map(hero => {
                        return <a  href={`/details/${hero.id}`}className="btn btn-secondary m-2"><span className="btn btn-primary">{hero.id}</span><span className="m-5">{hero.name}</span><a className="btn btn-danger">X</a></a>
                    })
                }
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        herosList: state.herosList
    };
};
 
export default connect(mapStateToProps)(Heroes);