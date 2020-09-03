import React from 'react';
import './App.scss';

import 'firebase/auth';
import fbConnection from '../javascripts/helpers/data/connection';

import MyNavBar from '../javascripts/components/pages/NavBar/MyNavBar';

fbConnection();

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MyNavBar />
      </div>
    );
  }
}

export default App;
