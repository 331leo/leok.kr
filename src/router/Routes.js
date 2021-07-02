import React from 'react';
import Preview from "../views/Preview"
import HomeLight from "../views/all-home-version/HomeLight"
import HomeDark from "../views/all-home-version/HomeDark"
import NotFound from "../views/NotFound";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const Routes = () => {
    return (
      <>
         <Router>
            <Switch>
              <Route  exact path="/" component={Preview}/>
              <Route path="/home-light" component={HomeLight}/>
              <Route path="/home-dark" component={HomeDark}/>
              <Route  component={NotFound}/>
            </Switch>
          </Router>
      </>
    );
}

export default Routes;