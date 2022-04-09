import Typography from '@mui/material/Typography';
import heroImage from "../assets/image2.jpeg"
import "./style.scss"

const Home = () => {
  return (
    <div className="HeroContainer">
        <div className="HeroContainer-title">
          <Typography variant="h3" color="secondary">Wick Lawson</Typography>
          <Typography variant="h3" color="secondary">Coaching</Typography>
        </div>
        <div className="HeroContainer-quote" >
          <Typography variant="h4" color="secondary">"Growth flows from our ability to accept fully.”</Typography>
        </div>
      <img className="HeroContainer-wickImage" src={heroImage} alt='Wick Lawson' />
    </div>
  )
}

export default Home