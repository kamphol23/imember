import React, {Component} from 'react';
import CreateCharacter from './createCharacter/CreateCharacter';
import ExistedHeros from './existedHero/ExistedHeros';
class CharacterSelaction extends  Component{
  state = {
    isVisibel: false,
    amountOfHeros:0,
    userCollection:''
  }


  isCreatecharacter = () => {
    if(this.state.isVisibel === false){
      this.setState({isVisibel:true});
    }else {
        this.setState({isVisibel:false});
    }
  }

  render(){

    return(
      <div>
      <h1> Selact me pls </h1>
      <ExistedHeros/>
      <button onClick={this.isCreatecharacter }> New Hero </button>
      <CreateCharacter isVisibel={this.state.isVisibel} {...this.props}
       isCreatecharacter={this.isCreatecharacter} />
      </div>
    )
  }
}
export default CharacterSelaction;
