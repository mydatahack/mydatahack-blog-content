// (1) redux-thunk source code - https://github.com/reduxjs

function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument);
    }

    return next(action);
  };
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;

// (2) redux action does not take function by default -https://github.com/reduxjs/redux/blob/master/src/createStore.js
// in the dispatch function definition in the createStore.js, it throw an error if you try to pass function.

function dispatch(action) {
  if (!isPlainObject(action)) {
    throw new Error(
      'Actions must be plain objects. ' +
        'Use custom middleware for async actions.'
    )
  }
  ...

  // (3) Example in Action

  export const setPersonalData = (personalData) => {
    return {
      type: UPDATE_PesonalData,
      personalData
    }
  }

  export const getPersonalData = (payload) =>  (dispatch) => {
    // Update the store on the status of API call (optional)
    dispatch(apiCallInProgress())
    // Make AJAX call 
    return postRequest(payload)
      .then((response) => {
        // Once AJAX call is successful, update the store
        dispatch(setPersonalData(response))
        // Then indicate apiCall was successful (optional)
        dispatch(apiCallSuccess())
      })
      .catch(err => dispatch(apiCallNotSuccess()))
  }

  export const getPersonalData = (payload) =>  (dispatch, getState) => {
    // Update the store on the status of API call (optional)
    dispatch(apiCallInProgress())
    // Make AJAX call 
    return postRequest(payload)
      .then((response) => {
        // we can transform response data with current state retrived with getState
        // with fictitious transformData function takes response and current state.
        const newState = transformData(response, getState)
        // Once AJAX call is successful, update the store
        dispatch(setPersonalData(newState))
        // Then indicate apiCall was successful (optional)
        dispatch(apiCallSuccess())
      })
      .catch(err => dispatch(apiCallNotSuccess()))
  }

// (4) Setting up middleware
import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import '../public/css/bootstrap.css'
import '../public/css/custom.css'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import reducer from './reducers'
import thunk from 'redux-thunk'

let composeEnhancers
composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

let store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
)

ReactDom.render (
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);