import React from 'react'
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom"


import "./style.scss"

const Menu = ({ dark, title }) => {
  return (
    <div className="Menu">
      <div className="Menu-menuItems">
      <Link to="/">
          <Typography color={dark ? "primary" : "secondary"}>Home</Typography></Link>
        <Typography color={dark ? "primary" : "secondary"}>|</Typography>
        <Link to="/about">
          <Typography color={dark ? "primary" : "secondary"}>About</Typography></Link>
        <Typography color={dark ? "primary" : "secondary"}>|</Typography>
        <Link to="/Coaching">
          <Typography color={dark ? "primary" : "secondary"}>Coaching</Typography>
        </Link>
        <Typography color={dark ? "primary" : "secondary"}>|</Typography>
        <Link to="/contact">
          <Typography color={dark ? "primary" : "secondary"}>Contact</Typography>
        </Link>
      </div>
      <Typography variant="h4" color={dark ? "primary" : "secondary"} className="Menu-header">{title}</Typography>
    </div>
  )
}

export default Menu