// ./src/app.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { githubReducer } from './modules/github';


import App from './components/App';

const store = createStore(githubReducer, applyMiddleware(thunk));
const root = createRoot(document.querySelector('#root'));

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
