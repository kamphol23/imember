import React, {Component} from 'react';
import {Link } from "react-router-dom";
class Hub extends Component{
  state = {
    heroName:'',
  }

  goBack = () => {
      this.props.history.push('/CharacterSelaction');
  }

   render(){

console.log(this.state.heroName);
    return(
      <div>

      <button onClick={e => this.setState({heroName: this.props.heroId}) }>Play</button>


      </div>
    )
  }
}
export default Hub;
