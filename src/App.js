import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import EditImages from './Components/EditImages/EditImages';
import UploadImages from './Components/UploadImages/UploadImages';

function App() {
  return (
       <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/uploadimages">
            <UploadImages></UploadImages>
          </Route>
          <Route path="/editimage">
            <EditImages></EditImages>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
