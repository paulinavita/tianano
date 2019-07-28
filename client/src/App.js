import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import DetailArticle from "./views/DetailArticle";

function App() {

  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:id" component={DetailArticle} />
        </Switch>
      </Router>
      </>
  );
}

export default App;