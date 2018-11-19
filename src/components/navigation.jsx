import React, { Component } from 'react';

class Navigation extends Component {
    render() { 
        return ( 
            <nav>
                <ul>
                    <li><a href="/">Dashboard</a></li>
                    <li><a href="/heros">Heros</a></li>
                </ul>
            </nav> 
        );
    }
}
 
export default Navigation;