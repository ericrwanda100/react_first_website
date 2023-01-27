import React from 'react';
import logo from "../images/logo.png";


export default function Navbar() {
  return (
   
<nav className="navbar navbar-expand-lg bg-dark">
  <div className="container">
    <a className="navbar-brand" href="#"> <img src={logo} alt="" className='logo' /> </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Sevices</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">How work</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contacts</a>
        </li>
       
      </ul>
     
    </div>
  </div>
</nav>

    
  )
}
