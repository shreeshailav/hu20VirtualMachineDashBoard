import * as React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { Store } from "redux";
import { History } from "history";

import Routes from "./routes";
import { ApplicationState } from "./store";

interface AppProps {
  store: Store<ApplicationState>;
  history: History;
}

  const App = ({ store, history }:AppProps) =>{
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </Provider>
  );
};
 
export default App;
