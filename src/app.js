import React, { Component } from "react";
import Navbar from "./components/navbar";
import { Route, Switch } from "react-router-dom";
import Ticket from "./screens/ticket";
import chat from "./screens/chat";
import Recived from "./screens/recived";
import Financial from "./screens/financial";

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container mt-3">
          <Switch>
            <Route path="/financial" component={Financial} />
            <Route path="/recived" component={Recived} />
            <Route path="/chat" component={chat} />
            <Route path="/" component={Ticket} />
          </Switch>
        </div>
      </>
    );
  }
}

export default App;
