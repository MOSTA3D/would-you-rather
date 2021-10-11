import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./login";
import Navbar from "./navbar";
import New from "./new";
import Home from "./home";
import Pull from "./pull";
import LeaderBoard from "./leaderboard";
import { connect } from "react-redux";

import { handleRecieveQuestions } from "../actions/question";
import { handleRecieveUsers } from "../actions/user";

import "../App.css";

class App extends React.Component {
  componentDidMount(){
    const { dispatch } = this.props;
    dispatch(handleRecieveQuestions());
    dispatch(handleRecieveUsers());
  }
  render(){
    let {login}= this.props;
    return (
      <div className="App">
        <Navbar />
        {!login? (<Login />)
        :(<Switch>
          <Route exact path="/">
            {login && <Redirect to="/home" />}
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/new">
            <New />
          </Route>
          <Route exact path="/pull/:id">
            <Pull />
          </Route>
          <Route exact path="/leaderboard">
            <LeaderBoard />
          </Route>
        </Switch>)}
      </div>
    );
  }
}
function mapStateToProps({login}){
  return{
    login,
  }
}
export default connect(mapStateToProps)(App);