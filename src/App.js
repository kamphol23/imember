import React, {Component,} from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Link } from "react-router-dom";
import LandingPage from './landingPage/Landingpage';
import CharacterSelaction from './characterSelaction/CharacterSelaction';
import ExistedHeros from './characterSelaction/existedHero/ExistedHeros';
import Hub from './hub/Hub';
import ScoreBoard from './hub/ScoreBoard';
import Inventory from './hub/inventory/Inventory';
import  ToHub from './characterSelaction/existedHero/ToHub'
import UserData from './UserData'
import { Redirect } from "react-router-dom";
class App extends Component{

  state = {
  display: true,
  loggedInStatus:false,
  isHubVisibel:false
  }


render(){

// exact render={() =>( this.state.loggedInStatus ? (<CharacterSelaction/>) : (<Redirect to=""/>) )}

  return (
    <Router>
    <div className="App">

    <Route path="/" exact render={
      () => {
        return (  <button className="welcome" onClick={(e) => this.setState({display: false,loggedInStatus: true })}><Link to="/LandingPage"> Welcome!</Link></button>)
      }
    } />

    <Route  path="/CharacterSelaction" component={CharacterSelaction} />
    <Route path="/LandingPage"exact  component={LandingPage} loggedInStatus={this.state.loggedInStatus} />
    <Route  path="/ExistedHeros" component={ExistedHeros}/>
    <Route path="/ToHub" component={ToHub} />
    <Route path="/UserData" component={UserData} />
    <Route  path="/Hub" component={Hub} />
    <Route  path="/Inventory" component={Inventory} />
    <Route  path="/ScoreBoard" component={ScoreBoard} />
    </div>
    </Router>
  );
}
}

export default App;
