import React from 'react'
import Typography from '@mui/material/Typography';
import { NavLink } from "react-router-dom"


import "./style.scss"

const Menu = ({ dark, title }) => {

  const activeStyle = {
    textDecoration: "underline",
    textDecorationColor: '#9A4D3A'
  };

  return (
    <div className="Menu">
      <div className="Menu-menuItems">
        <NavLink to="/"
        >
          <Typography color={dark ? "primary" : "secondary"}>Home</Typography></NavLink>
        <Typography color={dark ? "primary" : "secondary"}>|</Typography>
        <NavLink to="/about" style={({ isActive }) =>
          isActive ? activeStyle : undefined
        }>
          <Typography color={dark ? "primary" : "secondary"}>About</Typography></NavLink>
        <Typography color={dark ? "primary" : "secondary"}>|</Typography>
        <NavLink to="/Coaching" style={({ isActive }) =>
          isActive ? activeStyle : undefined
        }>
          <Typography color={dark ? "primary" : "secondary"}>Coaching</Typography>
        </NavLink>
        <Typography color={dark ? "primary" : "secondary"}>|</Typography>
        <NavLink to="/contact" style={({ isActive }) =>
          isActive ? activeStyle : undefined
        }>
          <Typography color={dark ? "primary" : "secondary"}>Contact</Typography>
        </NavLink>
      </div>
      <Typography variant="h4" color={dark ? "primary" : "secondary"} className="Menu-header">{title}</Typography>
    </div>
  )
}

export default Menu