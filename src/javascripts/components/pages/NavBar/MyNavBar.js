import React from 'react';

import Auth from '../Auth/Auth';

class Navbar extends React.Component {
  render() {
    return (
      <div className="MyNavbar">
        <h1>My Navbar</h1>
        <button className="btn btn-danger" onClick={this.logMeOut}>Logout</button>
      </div>
    );
  }
}

export default Navbar;
