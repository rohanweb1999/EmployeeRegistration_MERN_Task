import React from 'react';

import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,

} from "react-router-dom";
import Home from './Home.jsx';
import Signup from './Signup.jsx';
import Signin from './Signin.jsx';
import PagenotFound from './PagenotFound';
import Navbar from './Navbar';
import Dashboard from './Dashboard';
// import { Button } from '@material-ui/icons/Button'
// import '../node_modules/@material-ui/icons';
function App() {


  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/"  ><Home></Home></Route>
          <Route path="/signUp"  ><Signup></Signup></Route>
          <Route path="/signUp/:id"  ><Signup></Signup></Route>
          <Route path="/signin"  ><Signin></Signin></Route>
          <Route path="/dashboard"  ><Dashboard></Dashboard></Route>
          <Route path="*"  ><PagenotFound></PagenotFound></Route>


        </Switch>
      </Router>
    </>
  )
}

export default App;
