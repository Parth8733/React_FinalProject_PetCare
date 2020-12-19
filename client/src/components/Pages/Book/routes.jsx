import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import { UserContext } from '../../Authentication/UserProvider';

import Book from './index'; // Select 
import Create from './Create'; //Create
import Edit from './Edit'; //Update
import Destroy  from './Destroy'; //Delete

const Routes = () => {
  const { user } = useContext(UserContext);
  
  return (
    <Switch>
      <></>

      {user && user.token ? (
        <>
          <Route exact path="/booking" component={Book}/>
          <Route exact path="/booking" component={Create}/>
          <Route exact path="/booking/edit" component={Edit}/>
          <Route exact path="/booking/destroy" component={Destroy}/>
          </>
      ) : null}
    </Switch>
  );
}
 
export default Routes;