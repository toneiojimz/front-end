import React from 'react';

import { Route, Switch } from "react-router-dom";

import AddAssignment from "./pages/AddAssignment";
import Assignments from "./pages/Assignments";
import CreateStudent from "./pages/CreateStudent";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Reminders from "./pages/Reminders";
import Signup from "./pages/Signup";


function App() {
  return (
    <div >
      <Switch>
          <Route path='/signup' component={Signup}/>
          <Route path='/login' component={Login}/>
          <Route exact path='/' component={Dashboard}/>
          <Route path='/addassignment' component={AddAssignment}/>
          <Route path='/assignments' component={Assignments}/>
          <Route path='/createstudent' component={CreateStudent}/>
          <Route path='/reminders' component={Reminders}/>
      </Switch>
    </div>
  );
}

export default App;
