import React from 'react';

import painting from "../../assets/painting.png"
import "./style.scss"
import Menu from '../Menu/Menu';
import MobileDrawer from '../MobileDrawer/MobileDrawer';
import {data} from "../../lib/data"
import Footer from '../Footer/Footer';

const Coaching = () => {
  return (
    <div className="Coaching">
      <Menu dark title="Coaching" />
      <MobileDrawer dark/>
      <div className="Coaching-content">
        <h1 className="Coaching-header">Coaching</h1>
        <h2 className="Coaching-quote">{data.quote2}</h2>
        <img className="Coaching-painting" src={painting} alt="painting" />
        <div className='Coaching-text'>
          <p>{data.coaching1}<strong>{data.coaching1Pt1}</strong>{data.coaching1Pt2}</p>
          <p >{data.coaching2}</p>
          <h2>{data.listHeader}</h2>
          <ul>
            <li>{data.list1}</li>
            <li>{data.list2}</li>
            <li>{data.list3}</li>
            <li>{data.list4}</li>
          </ul>
          <h2>{data.listFooter}</h2>
        </div>
      </div>
      <Footer />
    </div>
    )
}

export default Coaching