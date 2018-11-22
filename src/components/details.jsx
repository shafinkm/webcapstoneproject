import React, { Component } from 'react';

class Details extends Component {
    state = {  }
    render() { 
        return <h1>Show details of hero with id {this.props.id}</h1>;
    }
}
 
export default Details;