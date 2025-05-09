import { FETCH_REPOS_REQUEST, FETCH_REPOS_SUCCESS, FETCH_REPOS_FAILURE, SET_FILTER } from './github.types';
import GitHubAPI from './github.api';

const api = new GitHubAPI();

export const fetchRepos = (userName) => async(dispatch) => {
    dispatch({ type: FETCH_REPOS_REQUEST });

    try {
        const repos = await api.getRepos(userName);
        dispatch({ type: FETCH_REPOS_SUCCESS, payload: repos });
    } catch (error) {
        dispatch({ type: FETCH_REPOS_FAILURE, payload: error.message });
    }
};

export const setFilter = (filter) => ({
    type: SET_FILTER,
    payload: filter,
});