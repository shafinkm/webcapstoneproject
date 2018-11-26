/** IMPORTING CORE REACT MODULES */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import { browserHistory } from 'react-router';
/** IMPORTING BOOTSTRAP MODULE */
import 'bootstrap/dist/css/bootstrap.css';

//** IMPORTING ALL USER COMPONENTS HERE */
import Header from './components/header';
import Dashboard from './components/dashboard';
import Heroes from './components/heroes';
import Details from './components/details';
import Navigation from  './components/navigation';

class App extends Component {
  render() {
    return (

      <div className="container">
        <Header />
        <Router>
          <React.Fragment>
            <Navigation />

            <Route path="/" exact strict component={Dashboard} />
            <Route path="/dashboard" exact strict component={Dashboard} />
            <Route path="/heroes" exact strict component={Heroes} />

            <Route path="/details/:id" exact strict render={({ match }) => {
                return <Details id={match.params.id}/>
            }} />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
