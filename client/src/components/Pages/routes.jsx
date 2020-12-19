import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Book from './Book';
import Edit from './Book/Edit'
import Create from './Book/Create'
import Destroy from './Book/Destroy'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/About" component={About}/>
      <Route exact path="/booking" component={Book}/>
      <Route exact path="/booking/edit/:id" component={Edit}/>
      <Route exact path="/booking/create" component={Create}/>
      <Route exact path="/booking/destroy/:id" component={Destroy}/>
    </Switch>
  );
}





export default Routes;