import './App.css';
import { AppBar, Toolbar, Button } from '@mui/material';

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
          <div>
          <Repeat numTimes={listBuyOffers.length}>
              {(index) => <TCard className="card-type" USDamount={listBuyOffers[index].usd_amount}
                rate={listBuyOffers[index].rate}
                date={listBuyOffers[index].added_date.substring(0, 10)}
                usd_to_lbp={listBuyOffers[index].usd_to_lbp}
                phone={listBuyOffers[index].phone}
                id={listBuyOffers[index].id}
              ></TCard>}
            </Repeat>
          </div>
    </div>
  );
}

export default App;
