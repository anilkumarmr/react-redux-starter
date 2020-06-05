import React from "react";
import {
   BrowserRouter as Router,
   Redirect,
   Route,
   Switch,
   withRouter,
} from "react-router-dom";
import Welcome from "../components/Welcome";

const Routes = () => {
   return (
      <Router>
         <Switch>
            <Route path="/" exact component={Welcome} />
         </Switch>
      </Router>
   );
};

export default Routes;
