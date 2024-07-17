// src/redux/reducer.js
import { ADD_SCORE } from './actions';

const initialState = {
    scores: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SCORE:
            return {
                ...state,
                scores: [...state.scores, action.payload].sort((a, b) => b.value - a.value),
            };
        default:
            return state;
    }
};

export default reducer;
