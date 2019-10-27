import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Home } from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
