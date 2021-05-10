import React from 'react';
import ReactDOM from 'react-dom';
import './react/index.css';
import App from './react/App';
import reportWebVitals from './react/reportWebVitals';
import {createStore, combineReducers} from 'redux'
import allReducers from './react/reducers/index'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
const store = createStore(allReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
    <BrowserRouter >
      <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
