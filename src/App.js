import React, {Component,} from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Link } from "react-router-dom";
import LandingPage from './landingPage/Landingpage';
import CharacterSelaction from './characterSelaction/CharacterSelaction';
class App extends Component{

  state = {
  display: true,

  }



render(){


let buttonToNextscen = (

    <button className="welcome" onClick={(e) => this.setState({display: false})}><Link to="/LandingPage"> Welcome!</Link></button>
  );

if(! this.state.display){
  buttonToNextscen = null;
}

  return (
    <Router>
    <div className="App">



      { buttonToNextscen}

    <Route path="/CharacterSelaction" component={CharacterSelaction}/>
    <Route path="/LandingPage" component={LandingPage}/>
    </div>
    </Router>
  );
}
}

export default App;
