import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomepageLeft from "./HomepageLeft";
import HomepageRight from "./HomepageRight";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header active={"home"} />
          <HomepageLeft />
          <HomepageRight />
        </Route>
        <Route exact path="/pages">
          <Header active={"pages"} />
        </Route>
        <Route exact path="/watch">
          <Header active={"watch"} />
        </Route>
        <Route exact path="/store">
          <Header active={"store"} />
        </Route>
        <Route exact path="/groups">
          <Header active={"groups"} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
