import Typography from '@mui/material/Typography';

import "./style.scss"
import Menu from '../Menu/Menu';
import MobileDrawer from '../MobileDrawer/MobileDrawer';

import { data } from '../../lib/data';

const Home = () => {

  return (
    <div className="HeroContainer">
      <div className="HeroContainer-title">
        <div className="HeroContainer-header">
          <Typography variant="h4" color="secondary">Wick Lawson</Typography>
          <Typography variant="h4" color="secondary">Coaching</Typography>
        </div>
        <Menu />
      </div>
      <MobileDrawer />
      <div className="HeroContainer-quote" >
        <Typography variant="h4" color="secondary">{data.quote1}</Typography>
      </div>
    </div>
  )
}

export default Home