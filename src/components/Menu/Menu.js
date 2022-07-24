import React from 'react'
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom"


import "./style.scss"

const Menu = () => {
  return (
    <div className="Menu">
      <div className="Menu-menuItems">
          <Link to="/about">
            <Typography color="secondary">About</Typography></Link>
            <Typography color="secondary">|</Typography>
          <Link to="/Coaching">
            <Typography color="secondary">Coaching</Typography>
          </Link>
          <Typography color="secondary">|</Typography>
          <Link to="/contact">
            <Typography color="secondary">Contact</Typography>
          </Link>
        </div>
    </div>
  )
}

export default Menu