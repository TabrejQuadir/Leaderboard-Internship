// src/redux/actions.js
export const ADD_SCORE = 'ADD_SCORE';

export const addScore = (score) => ({
    type: ADD_SCORE,
    payload: score,
});
