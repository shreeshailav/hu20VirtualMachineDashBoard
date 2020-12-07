import * as React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import IndexPage from "./pages/index";

const Routes: React.FC = () => (
  <Router>
    <Route exact path="/" component={IndexPage} />
  </Router>
);

export default Routes;
