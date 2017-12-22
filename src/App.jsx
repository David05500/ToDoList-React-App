import React from 'react';
import Header from './components/Header'
import {
    Route,
    Switch
} from "react-router-dom";
import Tasks from './containers/Tasks';
import Add from './containers/Add';

const App = () => (
    <div className="container">
        <Header subtitle="Best list app ever"> To Do List </Header> 
        <Add />
        <Tasks />
    </div>  
);



export default App;
