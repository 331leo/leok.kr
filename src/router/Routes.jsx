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
          <Route exact path="/"> <HomeView tabIndex={0} /> </Route>
          <Route exact path="/about"><HomeView tabIndex={1}/></Route>
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
