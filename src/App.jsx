import React from 'react';
import Header from './components/Header'
import {
    Route,
    Switch
} from "react-router-dom";
import Tasks from './containers/Tasks';

const App = () => (
    <div className="container">
        <Header subtitle="Best list app ever"> To Do List </Header> 
        <Switch>
        	<Route exact path="/" component={ Tasks } />

        </Switch>
    </div>  
);



export default App;
