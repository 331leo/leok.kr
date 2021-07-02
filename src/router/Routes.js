import React from 'react';
import HomeViews from '../views/Home';
import NotFound from '../views/NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          {/* <Route exact path="/" component={Preview} />*/}
          <Route exact path="/" component={HomeViews} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
