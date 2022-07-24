import React from 'react';

import wick2 from "../../assets/image1.jpeg"
import "./style.scss"
import { data } from '../../lib/data';
import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';
import MobileDrawer from '../MobileDrawer/MobileDrawer';

const About = () => {

  return (
    <div className="About">
      <Menu dark title="About Wick Lawson" />
      <MobileDrawer dark/>
      <div className="About-content">
        <img className="About-wickImage" src={wick2} alt="wick photo" />
        <div className='About-text'>
          <p>{data.bio1}</p>
          <p >{data.bio2}</p>
          <p>{data.bio3}</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About