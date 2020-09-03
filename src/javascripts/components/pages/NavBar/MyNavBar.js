import React from 'react';

import Auth from '../Auth/Auth';

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <nav className="navbar navbar-light bg-light justify-content-between">
          <h4 className="navbar-brand">React Hoarder</h4>
            <Auth authed={this.props.authed}/>
        </nav>
      </div>
    );
  }
}

export default Navbar;
