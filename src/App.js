import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./components/home/home";
import Header from "./components/header/header";
import Board from "./components/board/board";
import SignInSignUp from "./components/sign-in-sign-up/sign-in-sign-up";
import NotAvailable from "./components/not_available/not_available";

import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header title="Simple Wealth" />
        <Switch>
          <Route exact path="/" render={Home} />
          <Route exact path="/sign-up">
            <SignInSignUp signUp={true} />
          </Route>
          <Route exact path="/sign-in">
            <SignInSignUp signUp={false} />
          </Route>
          <Route path="/dashboard">
            <Board userName="Ming Liang Dai" />
          </Route>
          <Route exact path="/dashboard/buy">
            <Board userName="Ming Liang Dai" />
          </Route>
          <Route exact path="/not-available">
            <NotAvailable />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
