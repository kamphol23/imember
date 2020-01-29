import React, {Component} from 'react';
import CreateCharacter from './createCharacter/CreateCharacter';
import ExistedHeros from './existedHero/ExistedHeros';
class CharacterSelaction extends  Component{
  state = {
    isVisibel: false,
    isheroVisibel: false
  }


  isCreatecharacter = () => {
    if(this.state.isVisibel === false){
      this.setState({isVisibel:true});
    }else {
        this.setState({isVisibel:false});
    }
  }

  isheroVisibel = () => {
    if(this.state.isheroVisibel === false){
      this.setState({isheroVisibel:true});
    }else {
        this.setState({isheroVisibel:false});
    }
  }

  render(){

    return(
      <div>
      <h1> Selact me pls </h1>
      <ExistedHeros isheroVisibel={this.state.isheroVisibel}/>
      <CreateCharacter isVisibel={this.state.isVisibel} {...this.props}
       isCreatecharacter={this.isCreatecharacter} />
       <button onClick={this.isheroVisibel}> Continue </button>
       <button onClick={this.isCreatecharacter }> New Hero </button>
      </div>
    )
  }
}
export default CharacterSelaction;
