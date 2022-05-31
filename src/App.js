import './App.css';
import { AppBar, Toolbar, Button } from '@mui/material';
import OfferCard from './offerCard';

import img from "./abuYoussefLogo.jpg";

function App() {


  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar classes={{ root: "nav" }}>
          <div>
            <Button variant="outlined" > 3assir</Button>
          </div>
        </Toolbar>
      </AppBar>
      <div className='main-page'>
        {/* <OfferCard></OfferCard> */}
        <div className='logo'>
      <img src={img}></img>
        </div>
        <div className='cube-container'>
        <div className="slider">
          <div  className="container">
            <div  className="slide x"></div>
            <div  className="slide y"></div>
            <div  className="slide z"></div>
          </div>
          <div  className="shadow"></div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
