import React, { useContext } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import { Link } from "react-router-dom"
import { WickContext } from '../context/ContextProvider';

import "./style.scss"

const MobileDrawer = ({ dark }) => {
  const { openDrawer, toggleDrawer } = useContext(WickContext)
  console.log(openDrawer)

  return (
    <div className="MobileDrawer-buttonAndDrawer">
        <IconButton color={dark ? "primary" : "secondary"} onClick={toggleDrawer} size='large'>
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor="left"
          open={openDrawer}
          onClose={toggleDrawer}
          className="MobileDrawer-drawer"
        >
          <div className="MobileDrawer-drawerContent">
            <IconButton onClick={toggleDrawer} size='large'><CloseIcon /></IconButton>
            <ul>
              <Link to="/"><li>Home</li></Link>
              <Link to="/about"><li>About</li></Link>
              <Link to="/coaching"><li>Coaching</li></Link>
              <Link to="/contact"><li>Contact</li></Link>
            </ul>
          </div>
        </Drawer>
      </div>
  )
}

export default MobileDrawer