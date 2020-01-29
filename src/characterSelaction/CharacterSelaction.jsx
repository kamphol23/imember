import React, {Component} from 'react';
import CreateCharacter from './createCharacter/CreateCharacter';

class CharacterSelaction extends  Component{
  state = {
    isVisibel: false,
    amountOfHeros:0,
    userCollection:''
  }

  eventHandler = () => {
    this.setState({isVisibel:true});
  }

  render(){

    return(
      <div>
      <h1> Selact me pls </h1>
      <button onClick={this.eventHandler }> New Hero </button>
      <CreateCharacter isVisibel={this.state.isVisibel} />
      </div>
    )
  }
}
export default CharacterSelaction;
