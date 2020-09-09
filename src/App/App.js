import React from 'react';
import './App.scss';
import {
  Switch,
  BrowserRouter,
  Redirect,
  Route,
} from 'react-router-dom';

import firebase from 'firebase/app';
import 'firebase/auth';
import fbConnection from '../javascripts/helpers/data/connection';

import MyNavBar from '../javascripts/components/pages/NavBar/MyNavBar';
import Home from '../javascripts/components/pages/Home/Home';
import Stuff from '../javascripts/components/pages/Stuff/Stuff';
import NewStuff from '../javascripts/components/pages/Stuff/New';
import Edit from '../javascripts/components/pages/Stuff/Edit';
import Auth from '../javascripts/components/pages/Auth/Auth';
import Single from '../javascripts/components/pages/Stuff/Single';

fbConnection();

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === false
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/home', state: { from: props.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};
const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === true
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/auth', state: { from: props.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};
class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <MyNavBar authed={authed} />
            <div className="container">
              <Switch>
                <PrivateRoute path="/home" component={Home} authed={authed}/>
                <PrivateRoute path="/stuff" component={Stuff} authed={authed}/>
                <PrivateRoute path="/edit/:itemId" component={Edit} authed={authed}/>
                <PrivateRoute path="/new" component={NewStuff} authed={authed}/>
                <PrivateRoute path="/single/:itemId" component={Single} authed={authed}/>
                <PublicRoute path="/auth" component={Auth} authed={authed}/>
                <Redirect from="*" to="/home" />
              </Switch>
            </div>
          </React.Fragment>
        </BrowserRouter>
        {/* <MyNavBar />
        <Home />
        <Stuff />
        <NewStuff />
        <Edit /> */}
      </div>
    );
  }
}

export default App;
