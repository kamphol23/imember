import React, {Component} from 'react';
import CreateCharacter from './createCharacter/CreateCharacter';
import ExistedHeros from './existedHero/ExistedHeros';
import ToHub from './existedHero/ToHub';
class CharacterSelaction extends  Component{
  state = {
    isVisibel: false,

  }


  isCreatecharacter = () => {
    if(this.state.isVisibel === false){

      this.setState({isVisibel:true});
    }else {
        this.setState({isVisibel:false});
    }
  }

goBack = () => {
      this.props.history.push('/Hub');
}
  render(){

    return(
      <div>
      <h1> Selact me pls </h1>
      <ExistedHeros areCreateCharacterVisibel={this.state.isVisibel} />

      <CreateCharacter isVisibel={this.state.isVisibel} {...this.props}
       isCreatecharacter={this.isCreatecharacter} />
      </div>
    )
  }
}
export default CharacterSelaction;
