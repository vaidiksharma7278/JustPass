import React from 'react'
import avatar from '../Images/avatar.png'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div>
        <div className="navbar bg-base-100 bg-primary">
  <div className="flex-1">
    <Link to="/">
    <a className="btn btn-ghost normal-case text-xl">JustPass</a>
    </Link>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered" />
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={avatar} />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
            <Link to="/profile">
          <a className="justify-between" >
            Profile
          </a>
          </Link>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
    </div>
  )
}

export default Navbar