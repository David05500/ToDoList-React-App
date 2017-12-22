import React from 'react';
import Header from './components/Header'
import {
    Route,
    Switch
} from "react-router-dom";
import Tasks from './containers/Tasks';
import Add from './containers/Add';
import Task from './containers/Task';

const App = () => (
    <div style={ divStyle } className="container">
        <Header subtitle="Best list app ever"> Frosty the Postman </Header> 
        <Add />
        <Tasks />


    </div>  
);



export default App;


let divStyle = {

}