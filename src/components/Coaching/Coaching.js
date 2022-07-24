import React from 'react';

import "./style.scss"
import Menu from '../Menu/Menu';
import MobileDrawer from '../MobileDrawer/MobileDrawer';

const Coaching = () => {
  return (
    <div className="Coaching">
      <Menu dark title="Coaching Options" />
      <MobileDrawer dark/>
    </div>
    )
}

export default Coaching