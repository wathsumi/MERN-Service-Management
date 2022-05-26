import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component"
import EditService from "./components/edit-Service.component";
import CreateService from "./components/create-Service.component";
import ServiceList from "./components/Service-list.component";
import Report from "./components/Report";


function App() {

    return ( <
        Router >
        <
        div className = "container" >
        <Navbar / >
        <br / >
        <Route path = "/" exact component = { ServiceList }/>
        <Route path = "/update/:id" component = { EditService }/> 
        <Route path = "/create" component = { CreateService }/>
        <Route path = "/Report" component = { Report }/> 
        
        </
        div > </Router>
    );
}

export default App;

