import {success} from '@redux-requests/core';

import {LOAD_STATISTICS} from './statistics-constants';


const initialState = {
    data: null
};

export const statisticsReducer = (state = initialState, action) => {
    switch (action.type) {
        case success(LOAD_STATISTICS): {
            return {
                ...state,
                data: action.response.data,
            }
        }
        default: {
            return state
        }
    }
}

