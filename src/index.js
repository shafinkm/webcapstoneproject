/** IMPORTING REACT MODULES  */
import React from 'react';
import ReactDOM from 'react-dom';

/** IMPORTING USER DEPENDENCIES */
import App from './App';
import * as serviceWorker from './serviceWorker';

/** IMPORTING REDUX CORE LIBS */
import { Provider } from 'react-redux';

/** IMPORTING STORE */
import store from './store/store';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
