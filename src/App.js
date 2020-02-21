import React, {Component,} from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import LandingPage from './landingPage/Landingpage';
import CharacterSelaction from './characterSelaction/CharacterSelaction';
import ExistedHeros from './characterSelaction/existedHero/ExistedHeros';
import Hub from './hub/Hub';
import ScoreBoard from './hub/scoreBoard/ScoreBoard';
import Inventory from './hub/inventory/Inventory';
import  ToHub from './characterSelaction/existedHero/ToHub'
import UserData from './UserData'
import SelectScren from './hub/battle/SelectScren';
import SelectArea from './hub/battle/pvpBattle/SelectArea';
import BattleScren from './hub/battle/pve/BattleScren';
import Shop from './hub/shop/Shop';
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
    <div >
    <Route path="/" exact render={
      () => {
        return (<div className="App">
            <div className="landningWrapper">
            <h1> I MEMEBER</h1>
            <button className="welcome" onClick={(e) => this.setState({display: false,loggedInStatus: true })}><Link to="/LandingPage"> Welcome!</Link></button>
            </div>
            </div>)
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
    <Route  path="/SelectScren" component={SelectScren} />
    <Route  path="/SelectArea" component={SelectArea} />
    <Route  path="/BattleScren" component={BattleScren} />
    <Route  path="/Shop" component={Shop} />
    </div>
    </Router>
  );
}
}

export default App;
