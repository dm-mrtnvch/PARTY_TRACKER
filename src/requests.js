import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import axios from 'axios';
import { handleRequests } from '@redux-requests/core';
import { createDriver } from '@redux-requests/axios';

export const { requestsReducer, requestsMiddleware } = handleRequests({
    driver: createDriver(
        axios.create({
            baseURL: 'http://my-json-server.typicode.com/dm-mrtnvch/PARTY_TRACKER',
        }),
    ),
});
