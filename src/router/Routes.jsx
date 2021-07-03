import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeView from '../views/Home';
import NotFound from '../views/NotFound';
import DarkModeController from '../utils/darkmode';
const Routes = () => {
  return (
    <>
      <DarkModeController />
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          {/* <Route exact path="/" component={Preview} /> */}
          <Route exact path="/" component={HomeView} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
