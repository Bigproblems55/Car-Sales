import React from 'react';
import {createRoot} from 'react-dom/client';

//  import Apple from './Apple';
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import rootReducer from "./reducers";
import App from "./Apps";

import 'bulma/css/bulma.css';
import './styles.scss';

const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log(`preve state: `, store.getState());
  console.log(`action: `, action);
  next(action);
  console.log("new state: ", store.getState());
  console.groupEnd();
};

const store = createStore(rootReducer, applyMiddleware(logger));

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
    , rootElement);
