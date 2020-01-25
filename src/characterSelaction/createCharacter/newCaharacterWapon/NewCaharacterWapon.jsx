import React, {Component} from 'react';
import '../CreateCharacter.css'

class NewCaharacterWapon extends Component {
  state = {
    starterWapon: ['Staff', 'Long Sword', 'broken coocking rod', 'Disco stick'],
    waponAbilitis:[
    {
      Staff:['Basic attack', 'Fire ball', 'pyroblast']
    },
    {
      LongSword:['Basic attack', 'Heroic strike', 'Mortal strike']
    },
    {
      BrokenCoockingRod:['Basic attack', 'Flying meatball', 'Mom spaghetti']
    },
    {
      DiscoStick:['Basic attack','Last order', 'Saturday night fever']
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

    this.props.chosenWapon(this.state.starterWapon[this.state.waponNr +1]);
    if(this.state.waponNr + 1 === 4){
      this.props.chosenWapon('Staff');
    }
    console.log('wapon index: ', this.state.waponNr);
  }

  chosenWaponPrev = () => {

    this.props.chosenWapon(this.state.starterWapon[this.state.waponNr -1]);
    if(this.state.waponNr  -1 === -1){
      this.props.chosenWapon('DiscoStick');
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
      <p> {this.state.waponAbilitis[0].Staff[0]}</p>
      <br/>
      <p> {this.state.waponAbilitis[0].Staff[1]}</p>
      <br/>
      <p> {this.state.waponAbilitis[0].Staff[2]}</p>


    </div>
    );

    let longSword = (
    <div>
      <p> {this.state.waponAbilitis[1].LongSword[0]}</p>
      <br/>
      <p> {this.state.waponAbilitis[1].LongSword[1]}</p>
      <br/>
      <p> {this.state.waponAbilitis[1].LongSword[2]}</p>
    </div>
    );

    let brokencoockingRod = (
      <div>
        <p> {this.state.waponAbilitis[2].BrokenCoockingRod[0]}</p>
        <br/>
        <p> {this.state.waponAbilitis[2].BrokenCoockingRod[1]}</p>
        <br/>
        <p> {this.state.waponAbilitis[2].BrokenCoockingRod[2]}</p>

      </div>
    );

    let discoStick = (
      <div>
        <p> {this.state.waponAbilitis[3].DiscoStick[0]}</p>
        <br/>
        <p> {this.state.waponAbilitis[3].DiscoStick[1]} </p>
        <br/>
        <p> {this.state.waponAbilitis[3].DiscoStick[2]} </p>
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
