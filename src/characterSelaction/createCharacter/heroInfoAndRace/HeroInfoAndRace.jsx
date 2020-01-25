import React, {Component} from 'react';


class HeroInfoAndRace extends Component{

  state = {
    charActerRace:['Human', 'Dwarf', 'Orc', 'Murloc'],
    charActerRaceInfo:{Human:'More or less a basic B-word', Dwarf: 'Small and compack but pack a punch', Orc:'Green and mean!', Murloc:'Am the king of the sea but am not Aquaman' },
    heroStats:{Human:{Stamina:2, Int: 2, Luck: 2, strength: 2},
    Dwarf:{Stamina: 2, Int: 1, Luck: 4, strength: 1 },
    Orc:{Stamina: 4, Int: 1, Luck: 0, strength: 3},
    Murloc:{Stamina: 2, Int: 4, Luck: 1, strength: 1}},
    characterInformationIndex:0,

  }

componentDidMount(){
this.props.chosenOne('Human')
}

  prevRace = () => {
    let number = this.state.characterInformationIndex;

    if(number === 0 ){
      this.setState({ characterInformationIndex: 3})
    } else if(number <= 3 ){
      this.setState({ characterInformationIndex: number -1})
    }
  }

  nextRace = () => {
    let number = this.state.characterInformationIndex;

    if(number === 3 ){
      this.setState({ characterInformationIndex: 0})
    } else if(number !== 3 ){
      this.setState({ characterInformationIndex: number +1})
    }

  }

  chosenOne = () => {

    this.props.chosenOne(this.state.charActerRace[this.state.characterInformationIndex + 1]);
    if(this.state.characterInformationIndex + 1 === 4){
      this.props.chosenOne('Human');
    }

  }

  chosenOnePrev = () => {

    this.props.chosenOne(this.state.charActerRace[this.state.characterInformationIndex -1]);
    console.log(this.state.characterInformationIndex -1);
    if(this.state.characterInformationIndex - 1 === -1){
      this.props.chosenOne('Murloc');
    }
  }
  next = () =>{
    this.nextRace();
    this.chosenOne();
  }

  prev = () =>{
    this.prevRace();
    this.chosenOnePrev();
  }
  render(){



    return(
      <div>


      <p> {this.state.charActerRaceInfo[this.state.charActerRace[this.state.characterInformationIndex]]}</p>
      <p>
        Stammina: {this.state.heroStats[this.state.charActerRace[this.state.characterInformationIndex]].Stamina}
        <br/>
        Intelligent: {this.state.heroStats[this.state.charActerRace[this.state.characterInformationIndex]].Int}
        <br/>
        Luck: {this.state.heroStats[this.state.charActerRace[this.state.characterInformationIndex]].Luck}
         <br/>
        strength: {this.state.heroStats[this.state.charActerRace[this.state.characterInformationIndex]].strength}
        </p>

      <div className='CharRace'>
        <button onClick={this.prev }> Prev </button>
          <h3 >{this.state.charActerRace[this.state.characterInformationIndex]}</h3>
        <button onClick={this.next}> Next </button>
      </div>
      </div>
    )
  }
}
export default HeroInfoAndRace;
