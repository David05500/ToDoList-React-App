import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { Map, List } from "immutable";
import reducer from "./data/reducer";

const initial = Map({
	tasks: List(),
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initial, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
	<Provider store={ store }>
		<Router>
			<App />
		</Router> 
	</Provider>,
	document.getElementById('root'),
);
