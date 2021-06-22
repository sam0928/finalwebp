import './App.css';
import React from 'react';
// import Home from './pages/home';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Calendar from './pages/calendar';
import TodoMain from './pages/Todomain';
import Reference from './pages/reference'

import {BrowserRouter as Router, Route, Link, NavLink, Switch} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className = "App">
        <h2>Web Programming</h2>

        <Link exact to = "/login">Login</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {/* <NavLink activeClassName = "active" to = "/dashboard">Dashboard</NavLink> */}
        <NavLink activeClassName = "active" to = "/calendar">Calendar</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink activeClassName = "active" to = "/TodoMain">Todolist</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink activeClassName = "active" to = "/reference">Reference</NavLink>
       
        <hr />

        <Switch>
          <Route exact path = "/login" component ={Login} />
          <Route path = "/dashboard" component ={Dashboard} />
          <Route path = "/calendar" component ={Calendar} />
          <Route path = "/TodoMain" component ={TodoMain} />
          <Route path = "/reference" component ={Reference} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
