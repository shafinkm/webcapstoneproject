import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
    render() { 
        return ( 
            <ul>
              <li className="btn btn-warning m-3">
                <NavLink to="/dashboard">Dashboard</NavLink>
              </li>
              <li className="btn btn-warning m-3">
                <NavLink to="/heroes">Heroes</NavLink>
              </li>
          </ul> 
        );
    }
}
 
export default Navigation;