import { FETCH_QUESTIONS_REQUEST, FETCH_QUESTIONS_SUCCESS, FETCH_QUESTIONS_FAILURE, SET_SORT_ORDER } from './stackoverflow.types';

const initialState = {
    questions: [],
    loading: false,
    error: null,
    sortOrder: 'date',
};

const stackoverflowReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_QUESTIONS_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_QUESTIONS_SUCCESS:
            return { ...state, loading: false, questions: action.payload };
        case FETCH_QUESTIONS_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case SET_SORT_ORDER:
            return { ...state, sortOrder: action.payload };
        default:
            return state;
    }
};

export default stackoverflowReducer;