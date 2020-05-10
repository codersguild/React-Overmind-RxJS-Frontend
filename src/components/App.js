import * as React from 'react'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {
  
  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>
          <Route exact path="/home">
            <HomePage />
          </Route> 
      </Switch>
      <ToastContainer />
    </Router>
  );
}

export default App;
