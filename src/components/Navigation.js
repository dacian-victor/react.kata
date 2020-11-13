import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          <NavLink className="main-nav" to="/">Home</NavLink>
          <NavLink className="main-nav" to="/find">Find</NavLink>
          <NavLink className="main-nav" to="/create">Create</NavLink>
          <NavLink className="main-nav" to="/update">Update</NavLink>
          <NavLink className="main-nav" to="/delete">Delete</NavLink>
       </div>
    );
}
 
export default Navigation;