import { combineReducers } from  'redux';

import ActionReducer from './actionreducer';

const rootReducer = combineReducers({

    action: ActionReducer

});

export default rootReducer;