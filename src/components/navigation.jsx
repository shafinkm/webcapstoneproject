import React, { Component } from 'react';

class Navigation extends Component {
    render() { 
        return ( 
            <ul>
            <li className="btn btn-warning m-3">
              <a href="/dashboard">Dashboard</a>
            </li>
            <li className="btn btn-warning m-3">
              <a href="/heroes">Heroes</a>
            </li>
          </ul> 
        );
    }
}
 
export default Navigation;