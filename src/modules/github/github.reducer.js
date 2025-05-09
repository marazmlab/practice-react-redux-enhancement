import { FETCH_REPOS_REQUEST, FETCH_REPOS_SUCCESS, FETCH_REPOS_FAILURE, SET_FILTER } from './github.types';

const initialState = {
    repos: [],
    loading: false,
    error: null,
    filter: '',
};

const githubReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REPOS_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_REPOS_SUCCESS: 
            return { ...state, loading: false, repos: action.payload };
        case FETCH_REPOS_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default: 
            return state;
    }
};

export default githubReducer;