import Typography from '@mui/material/Typography';
import heroImage from "../assets/image2.jpeg"
import "./style.scss"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';


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
              <li>About</li>
              <li>Coaching</li>
              <li>Contact</li>
            </ul>
          </div>
        </Drawer>
      </div>
      <div className="HeroContainer-quote" >
        <Typography variant="h4" color="secondary">"Growth flows from our ability to accept fully.”</Typography>
      </div>
      {/* <img className="HeroContainer-wickImage" src={heroImage} alt='Wick Lawson' /> */}
    </div>
  )
}

export default Home