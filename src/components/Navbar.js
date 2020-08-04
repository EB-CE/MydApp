import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class Navbar extends Component {

  render() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top bg-dark flex-md-nowrap p-0 shadow">
  <span className="navbar-brand col-sm-3 col-md-2 mr-0">       
          <span className="title1">Secure Software Ecosystem</span>
        </span>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText">
 
    <span className="navbar-text">
     
    </span>
  </div>
</nav>
    );
  }
}

export default Navbar;
