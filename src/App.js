import React, {Component,} from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Link } from "react-router-dom";
import LandingPage from './landingPage/Landingpage';
import CharacterSelaction from './characterSelaction/CharacterSelaction';
import { Redirect } from "react-router-dom";
class App extends Component{

  state = {
  display: true,
  loggedInStatus:false
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
    </div>
    </Router>
  );
}
}

export default App;
