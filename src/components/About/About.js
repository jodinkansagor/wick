import React from 'react';
import { Link } from 'react-router-dom';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import wick2 from "../../assets/image1.jpeg"
import "./style.scss"
import { data } from '../../lib/data';
import Footer from '../Footer/Footer';

const About = () => {
  return (
    <div className="About">
      <Link to="/" className="About-link"><ArrowBackIcon className="About-link-icon"/></Link>
      <div className="About-content">
        <h1 className="About-header">About Wick Lawson</h1>
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