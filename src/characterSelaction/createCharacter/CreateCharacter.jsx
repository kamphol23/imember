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
};



  updateNewCheracterRace = (theRace) => {

  this.setState({newCharacterRace: theRace})
  }

  updateNewCheracterWapon = (selectedWapon) => {

  this.setState({newCaharacterWapon: selectedWapon})
  }


  render(){

console.log("Race: ", this.state.newCharacterRace);
console.log("name: ", this.state.newHeroname);

    let createNewHero = (
      <div>
      <HeroInfoAndRace  chosenOne={this.updateNewCheracterRace.bind(this)}/>
      <Wapon chosenWapon={this.updateNewCheracterWapon.bind(this)}/>
      <input type="Name" placeholder="Character name"
      onChange={e => this.setState({newCharacterName: e.target.value})}
      value={this.state.newCharacterName}
     />

      </div>
    )


    if(!this.props.isVisibel){
      createNewHero = null;
    }
    return(
      <div >
      {createNewHero}
      <AddNewHeroToDatabase newHeroname={this.state.newCharacterName} />
      </div>
    )
  }
}
export default CreateCharacter;
