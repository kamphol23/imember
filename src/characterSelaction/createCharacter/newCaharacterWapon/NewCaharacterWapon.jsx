import React, {Component} from 'react';
import '../CreateCharacter.css'

class NewCaharacterWapon extends Component {
  state = {
    starterWapon: ['Staff', 'Long Sword', 'broken coocking rod', 'Disco stick'],
    waponAbilitis:[
    {
      Staff:{abilityOne: 'Basic attack', abilityTwo :'Fire ball', abilityThree : 'pyroblast'}
    },
    {
      LongSword:{abilityOne: 'Basic attack', abilityTwo: 'Heroic strike', abilityThree: 'Mortal strike'}
    },
    {
      BrokenCoockingRod:{abilityOne: 'Basic attack', abilityTwo:'Flying meatball', abilityThree: 'Mom spaghetti'}
    },
    {
      DiscoStick:{abilityOne: 'Basic attack', abilityTwo :'Last order', abilityThree :'Saturday night fever'}
    }],
    waponNr: 0,

  }

  componentDidMount(){
  this.props.chosenWapon('Staff')
  }

  prevWapon = () => {
    let number = this.state.waponNr;

    if(number === 0 ){
      this.setState({waponNr: 3})
    } else if(number <= 3 ){
      this.setState({waponNr: number -1})
    }
  }

  nextWapon = () => {
    let number = this.state.waponNr;

    if(number === 3 ){
      this.setState({waponNr: 0})
    } else if(number !== 3 ){
      this.setState({waponNr: number +1})
    }
  }
  chosenWaponNext = () => {
    this.props.nameOfTheWapon(this.state.starterWapon[this.state.waponNr +1])
    if(this.state.waponNr + 1 === 4){
      this.props.nameOfTheWapon('staff');
    }
    console.log('wapon index: ', this.state.waponNr);
  }

  chosenWaponPrev = () => {
    this.props.nameOfTheWapon(this.state.starterWapon[this.state.waponNr -1])
    if(this.state.waponNr  -1 === -1){
      this.props.nameOfTheWapon('Disco stick')
    }

  }

  next = () =>{
    this.nextWapon();
    this.chosenWaponNext();
  }

  prev = () =>{
    this.prevWapon();
    this.chosenWaponPrev();
  }


  render(){
    let staff = (
    <div>
      <p> {this.state.waponAbilitis[0].Staff.abilityOne}</p>
      <br/>
      <p> {this.state.waponAbilitis[0].Staff.abilityTwo}</p>
      <br/>
      <p> {this.state.waponAbilitis[0].Staff.abilityThree}</p>


    </div>
    );

    let longSword = (
    <div>
      <p> {this.state.waponAbilitis[1].LongSword.abilityOne}</p>
      <br/>
      <p> {this.state.waponAbilitis[1].LongSword.abilityTwo}</p>
      <br/>
      <p> {this.state.waponAbilitis[1].LongSword.abilityThree}</p>
    </div>
    );

    let brokencoockingRod = (
      <div>
        <p> {this.state.waponAbilitis[2].BrokenCoockingRod.abiabilityOne}</p>
        <br/>
        <p> {this.state.waponAbilitis[2].BrokenCoockingRod.abilityTwo}</p>
        <br/>
        <p> {this.state.waponAbilitis[2].BrokenCoockingRod.abilityThree}</p>

      </div>
    );

    let discoStick = (
      <div>
        <p> {this.state.waponAbilitis[3].DiscoStick.abilityOne}</p>
        <br/>
        <p> {this.state.waponAbilitis[3].DiscoStick.abilityTwo} </p>
        <br/>
        <p> {this.state.waponAbilitis[3].DiscoStick.abilityThree} </p>
      </div>
    );

    if(this.state.waponNr === 0){
      longSword = null;
      brokencoockingRod = null;
      discoStick = null;
    }
    else if (this.state.waponNr === 1){
      staff = null;
      brokencoockingRod = null;
      discoStick = null;
    }
    else if(this.state.waponNr === 2){
      longSword = null;
      staff = null;
      discoStick = null;
    }
    else if(this.state.waponNr === 3){
      longSword = null;
      brokencoockingRod = null;
      staff = null;
    }


    return(
      <div className='CharRace'>

            <button onClick={this.prev}> Prev </button>
          <p> {this.state.starterWapon[this.state.waponNr]} </p>

          <button onClick={this.next}> Next </button>
          {staff}{longSword}{brokencoockingRod}{discoStick}

      </div>
    )
  }
}
export default NewCaharacterWapon;
