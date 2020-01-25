import React, {Component} from 'react';
import CreateCharacter from './createCharacter/CreateCharacter';

class CharacterSelaction extends  Component{
  state = {
    isVisibel: false,
    amountOfHeros:0,

  }
  render(){
    return(
      <div>
      <h1> Selact me pls </h1>
      <CreateCharacter isVisibel={this.state.isVisibel}/>
      <button onClick={(e) => this.setState({isVisibel:true})}> New Hero </button>
      </div>
    )
  }
}
export default CharacterSelaction;
