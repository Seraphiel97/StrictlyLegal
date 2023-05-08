import React from 'react'
import { Link } from 'react-router-dom'
import * as usersService from '../../utilities/users-service';

export default function Nav({user, updateUser}) {

  function handleLogout() {
    usersService.logOut();
    updateUser(null);
  }
  
  return (
    <nav className="bg-charcoal text-white h-10 text-sm sm:flex justify-center items-center">
      { user ?
      <div className="">
        <Link to="/">Home</Link>
        &nbsp; | &nbsp;
        <Link to="/laws">Browse Laws</Link>
        &nbsp; | &nbsp;
        <Link to="/laws/add">Add Law</Link>
        &nbsp; | &nbsp;
        <Link to="/">Welcome, {user.name}</Link>
        &nbsp; | &nbsp;
        <Link to="" onClick={handleLogout}>Logout</Link>
      </div>
      :
      <div>
        <Link to="/">Home</Link>
        &nbsp; | &nbsp;
        <Link to="/laws">Browse Laws</Link>
        &nbsp; | &nbsp;
        <Link to="/auth">Add Law</Link>
        &nbsp; | &nbsp;
        <Link to="/auth">Login</Link>
      </div>
      }
    </nav>
  )
}
