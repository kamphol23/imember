import React, {Component} from 'react';
import {Link } from "react-router-dom";
class Hub extends Component{
  state = {
    heroName:''
  }

componentDidMount () {
  this.setState({heroName:this.props.location.state.heroName })
}

  goBack = () => {
        this.props.history.push('/CharacterSelaction');
  }


   render(){
console.log(this.props);

  return(
      <div>

      <h1> Welcome Back {this.state.heroName}!</h1>
      <button onClick={this.goBack}> Go back </button>
      <button ><Link to={{pathname:'/Inventory',
      state:{
        heroName:this.state.heroName
      }}}> inventory </Link></button>
      <button><Link to={'/ScoreBoard'}>ScoreBoard</Link></button>
      </div>
    )
  }
}
export default Hub;
