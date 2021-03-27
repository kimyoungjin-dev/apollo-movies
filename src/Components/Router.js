import { HashRouter as Router, Route } from "react-router-dom";
import Home from "Routes/Home";
import Detail from "Routes/Detail";

export default () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/:id" component={Detail} />
    </Router>
  );
};
