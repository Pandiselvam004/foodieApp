import { combineReducers } from 'redux';

import BioMetricReducer from './BioMetricReducer'

let reducers = combineReducers({
    BioMetricReducer: BioMetricReducer,
});

const rootReducer = (state, action) => {
    return reducers(state, action)
}

export default rootReducer;