import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
 

<nav className="navbar navbar-expand-lg bg-primary navbar-dark">
  <div className="container-fluid container">
    <Link className="navbar-brand" to={"/"}>Intern House</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link "  to={`/`}>Job postings</Link>
        <Link className="nav-link" to={`/post`}>Post a job</Link>
      
        
      </div>
    </div>
  </div>
</nav>
 
  )
}

export default Navbar