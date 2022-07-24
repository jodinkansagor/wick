import React from 'react';

import "./style.scss"
import Menu from '../Menu/Menu';
import MobileDrawer from '../MobileDrawer/MobileDrawer';

const Contact = () => {
  return (
    <div className="Contact">
      <Menu dark title="Contact Wick" />
      <MobileDrawer dark/>
    </div>
    )
}

export default Contact