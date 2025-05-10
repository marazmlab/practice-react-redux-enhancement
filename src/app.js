// ./src/app.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { githubReducer } from './modules/github';
import { stackoverflowReducer } from './modules/stackoverflow';


import App from './components/App';

const rootReducer = combineReducers({
    github: githubReducer,
    stackoverflow: stackoverflowReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
const root = createRoot(document.querySelector('#root'));

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
