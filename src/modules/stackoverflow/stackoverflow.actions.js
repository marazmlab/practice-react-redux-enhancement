import { FETCH_QUESTIONS_REQUEST, FETCH_QUESTIONS_SUCCESS, FETCH_QUESTIONS_FAILURE, SET_SORT_ORDER } from './stackoverflow.types';
import StackOverflowAPI from './stackoverflow.api';

const api = new StackOverflowAPI();

export const fetchQuestions = (query) => async(dispatch) => {
    dispatch({ type: FETCH_QUESTIONS_REQUEST });

    try {
        const questions = await api.getQuestions(query);
        console.log('Fetched questions:', questions);
        dispatch({ type: FETCH_QUESTIONS_SUCCESS, payload: questions });
    } catch (error) {
        dispatch({ type: FETCH_QUESTIONS_FAILURE, payload: error.message });
    }
};

export const setSortOrder = (order) => ({
    type: SET_SORT_ORDER,
    payload: order,
});