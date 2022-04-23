import { useState } from 'react';

import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

import { Link } from "react-router-dom"

import "./style.scss"


const Home = () => {
  const [openDrawer, setOpenDrawer] = useState(false)

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer)
  }

  return (
    <div className="HeroContainer">
      <div className="HeroContainer-title">
        <div>
          <Typography variant="h3" color="secondary">Wick Lawson</Typography>
          <Typography variant="h3" color="secondary">Coaching</Typography>
        </div>
        <div className="HeroContainer-menu">
          <Link to="/about">
            <Typography color="secondary">About</Typography></Link>
          <Link to="/Coaching">
            <Typography color="secondary">Coaching</Typography>
          </Link>
          <Link to="/contact">
            <Typography color="secondary">Contact</Typography>
          </Link>
        </div>
      </div>
      <div className="HeroContainer-buttonAndDrawer">
        <IconButton color="secondary" onClick={toggleDrawer} size='large'>
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor="left"
          open={openDrawer}
          onClose={toggleDrawer}
          className="HeroContainer-drawer"
        >
          <div className="HeroContainer-drawerContent">
            <IconButton onClick={toggleDrawer} size='large'><CloseIcon /></IconButton>
            <ul>
              <Link to="/about"><li>About</li></Link>
              <Link to="/coaching"><li>Coaching</li></Link>
              <Link to="/contact"><li>Contact</li></Link>
            </ul>
          </div>
        </Drawer>
      </div>

      <div className="HeroContainer-quote" >
        <Typography variant="h4" color="secondary">"Growth flows from our ability to accept fully.”</Typography>
      </div>
    </div>
  )
}

export default Home