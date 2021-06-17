import React from 'react';
import ReactDOM from 'react-dom';
import './react/index.css';
import App from './react/App';
import { createStore, compose, applyMiddleware } from 'redux'
import allReducers from './react/reducers/index'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { defaultState } from './react/types';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(allReducers, defaultState, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
