import React from 'react';

import painting from "../../assets/painting.png"
import "./style.scss"
import Menu from '../Menu/Menu';
import MobileDrawer from '../MobileDrawer/MobileDrawer';
import { data } from "../../lib/data"
import Footer from '../Footer/Footer';

const Coaching = () => {
  return (
    <div className="Coaching">
      <Menu dark title="Coaching" />
      <MobileDrawer dark />
      <div className="Coaching-content">
        <h1 className="Coaching-header">Coaching</h1>
        <h2 className="Coaching-quote">{data.quote2}</h2>
        <img className="Coaching-painting" src={painting} alt="painting" />
        <div className='Coaching-text'>
          <p className="Coaching-topSection">{data.coaching1}<strong>{data.coaching1Pt1}</strong>{data.coaching1Pt2}</p>
          <p className="Coaching-topSection">{data.coaching2}</p>
          <div className="Coaching-descAndRates">
            <h3>{data.listHeader}</h3>
            <ul>
              <li>{data.list1}</li>
              <li>{data.list2}</li>
              <li>{data.list3}</li>
              <li>{data.list4}</li>
            </ul>
            <h3>Wick's rates:</h3>
            <ul>
              <li>Introductory 60-minute consultation - $60 (new clients only</li>
              <p className="Coaching-intro">In this session, you will get the opportunity to share what brings you to coaching. Wick will introduce you to their coaching philosophy and style. If you decide to you would like to move forward together, your $60 consultation fee is applicable to the purchase of a package of sessions.</p>
              <li>Individual 75-minute session - $140</li>
              <li>Discounted package of six 75-minute sessions - $700</li>
              <li>A limited number of sliding scale sessions are available. Please contact Wick to learn more about the availability of sliding scale sessions.</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Coaching