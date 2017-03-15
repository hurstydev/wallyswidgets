import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-custom">
        <div className="container">
          <div className="navbar-header">
            <div className="navbar-brand" href="#">Wally's Widgets</div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
