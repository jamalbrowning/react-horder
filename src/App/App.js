import React from 'react';
import './App.scss';

import 'firebase/auth';
import fbConnection from '../javascripts/helpers/data/connection';

import MyNavBar from '../javascripts/components/pages/NavBar/MyNavBar';
import Home from '../javascripts/components/pages/Home/Home';
import Stuff from '../javascripts/components/pages/Stuff/Stuff';
import NewStuff from '../javascripts/components/pages/Stuff/New';

fbConnection();

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MyNavBar />
        <Home />
        <Stuff />
        <NewStuff />
      </div>
    );
  }
}

export default App;
