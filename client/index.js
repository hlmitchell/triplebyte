import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { rootReducer } from './reducers/combineReducers';
import { createStore } from'redux';

const store = createStore(rootReducer);

render(<Provider store={store}><App/></Provider>, document.getElementById('root'));