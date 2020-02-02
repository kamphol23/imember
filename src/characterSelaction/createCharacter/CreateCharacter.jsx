import React, {Component} from 'react';
import './CreateCharacter.css';
import Wapon from './newCaharacterWapon/NewCaharacterWapon';
import HeroInfoAndRace from './heroInfoAndRace/HeroInfoAndRace';
import AddNewHeroToDatabase from './AddNewHeroToDatabase';

class CreateCharacter extends Component{
  state = {
  newCharacterName:'',
  newCaharacterWapon:'',
  newCharacterRace:'',
  collectionName:'',
  };



  updateNewCheracterRace = (theRace) => {

  this.setState({newCharacterRace: theRace})
  }

  updateNewCheracterWapon = (selectedWapon) => {

  this.setState({newCaharacterWapon: selectedWapon})
  }



  render(){

    let newHero = (  <button onClick={this.props.isCreatecharacter }> New Hero </button>);
    if(this.props.isVisibel === true){
      newHero = null;
    }


    let createNewHero = (
      <div>
      <HeroInfoAndRace  chosenOne={this.updateNewCheracterRace.bind(this)}/>
      <Wapon chosenWapon={this.updateNewCheracterWapon.bind(this)}/>
      <input type="Name" placeholder="Character name"
      onChange={e => this.setState({newCharacterName: e.target.value})}
      value={this.state.newCharacterName}
     />
     <AddNewHeroToDatabase newHeroname={this.state.newCharacterName}
     heroRace={this.state.newCharacterRace} heroWapon={this.state.newCaharacterWapon}
     {...this.props}
     />
      </div>
    )


    if(!this.props.isVisibel){
      createNewHero = null;
    }
    return(
      <div >
      {createNewHero}
      {newHero}

      </div>
    )
  }
}
export default CreateCharacter;
