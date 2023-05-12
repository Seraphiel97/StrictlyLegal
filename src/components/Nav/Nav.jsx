import React from 'react'
import { Link } from 'react-router-dom'
import * as usersService from '../../utilities/users-service';

export default function Nav({user, setUser}) {

  function handleLogout() {
    usersService.logOut();
    setUser(null);
  }
  
  return (
    <nav className="bg-black text-white h-10 text-xs font-header sm:text-xl flex justify-center items-center ">
      { user ?
      <div className="">
        <Link to="/">Home</Link>
        &nbsp; | &nbsp;
        <Link to="/laws">Browse Laws</Link>
        &nbsp; | &nbsp;
        <Link to="/laws/add">Add Law</Link>
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
