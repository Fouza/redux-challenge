import React from 'react';
import logo from './logo.svg';
import './App.css';
import Screen from './screens/screen';
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import store from './store/index';
import { getListing } from './actions/index';

window.store = store;
window.getListing = getListing;

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route path="/review" exact component={Screen}></Route>
        <Redirect to="/review"></Redirect>
      </Switch>
    </Router>
  );
}

export default App;
