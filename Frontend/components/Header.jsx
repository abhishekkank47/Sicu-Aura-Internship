import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import { GiCaduceus } from "react-icons/gi";

const Header = () => {
  return (
    <>
    <div className="header"style={{minHeight:'10vh'}}>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarTogglerDemo01"
      aria-controls="navbarTogglerDemo01"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <Link to='/'className="navbar-brand" ><GiCaduceus /> Sicu aura !</Link>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to='/'className="nav-link" aria-current="page" >
            SIGIN  UP
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/sign-in'className="nav-link" >
            SIGN IN
          </NavLink>
        </li>
       
       {/* {!auth.user ? (
          <>
          <li className="nav-item">
          <NavLink to='/register'className="nav-link" >Register</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/login'className="nav-link" >Login</NavLink>
        </li>
          </> ) : (<>
            <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
            {auth?.user?.name}
          </NavLink>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" to={`/dashboard/${auth?.user?.role === 1 ? "admin":"user"}`}>Dashboard</NavLink></li>
            <li>
          <NavLink onClick={handleLogout} to='/login'className="dropdown-item" >Logout</NavLink>
            </li>
          </ul>
            </li>
       </>)} */}
      </ul>
      
    </div>
  </div>
</nav>
    </div>


    </>
  )
}

export default Header