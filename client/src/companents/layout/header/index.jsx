import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./index.scss"
const Header = (props) => {
    
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                props.setHeader(true);
            } else {
                props.setHeader(false);
            }
        });
    }, []);
  return (
   <div className={props.header?"header":"header2"}>
      <Link to={"/"}><h2>One School</h2></Link>
      <i className="fa-solid fa-bars"></i>
      <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/courses"}>Courses</NavLink>
        <NavLink to={"/programs"}>Programs</NavLink>
        <NavLink to={"/teachers"}>Teachers</NavLink>
        <NavLink to={"/add"}>Add Teacher</NavLink>
      </nav>
      <button className='contactus'>Contact us</button>
    </div>

  )
}

export default Header
