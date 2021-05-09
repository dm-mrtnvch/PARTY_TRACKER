import {combineReducers, createStore, applyMiddleware} from 'redux';
import {statisticsReducer} from './statistics/statistics-reducer';
import { requestsReducer, requestsMiddleware } from './requests'

const rootReducer = combineReducers({
    requests: requestsReducer,
    statistics: statisticsReducer,
})
// непосредственно создаём store
export const store = createStore(
    rootReducer,
    applyMiddleware(...requestsMiddleware)
);

