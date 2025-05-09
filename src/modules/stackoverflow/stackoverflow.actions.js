import { FETCH_QUESTIONS_REQUEST, FETCH_QUESTIONS_SUCCESS, FETCH_QUESTIONS_FAILURE, SET_SORT_ORDER } from './stackoverflow.types';
import StackOverflowAPI from './stackoverflow.api';

const api = new StackOverFlowAPI();

export const fetchQuestions = (query) => async(dispatch) => {
    dispatch({ type: FETCH_QUESTIONS_REQUEST });

    try {
        const questions = await api.getQuestions(query);
    }
}