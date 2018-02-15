import React, {PureComponent} from "react";
import {Switch, Route} from "react-router-dom";

import Header from "../../components/Header";
import Home from "../Home";
import Job from "../Job";

const PostJob = () => <h1>Post Job</h1>;

class App extends PureComponent {
  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/job/:id" component={Job}/>
          <Route path="/job/post" component={PostJob}/>
        </Switch>
      </div>
    );
  }
}

export default App;
