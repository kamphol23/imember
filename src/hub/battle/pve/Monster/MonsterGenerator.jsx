import React, {Component} from 'react';
class MonsterGenerator extends Component{
	state = {
		normalmods:[
			{name: 'Crow', abilityOne: 'Bite', abilityTwo: 'Dive', abilityThree: 'Screech', health: 100},
			{name: 'Wolf', abilityOne: 'Bite', abilityTwo: 'Howl', abilityThree: 'Rend', health: 100},
			{name: 'RottenRot', abilityOne: 'Rotten cone', abilityTwo: 'Rot whip', abilityThree: 'Overgrow', health: 100},
			{name: 'Bandits', abilityOne: 'Punch', abilityTwo: 'Stab', abilityThree: 'Pick pocket', health: 100} ],
			monsterNr: 0
	}
	componentDidMount(){
		this.randomNr()
	}

	randomNr = () =>{
				let x = Math.floor((Math.random() * 4) + 0);
				this.setState({monsterNr: x})
		}

	render(){
		let monsterHpMulityplaier = this.state.normalmods[this.state.monsterNr].health * this.props.playerLevel;



		return(
			<div>
			<h3> Enemy : {this.state.normalmods[this.state.monsterNr].name}</h3>
			<span> HP : {monsterHpMulityplaier}</span>
			<ul> Abilitis
			<li>A one : {this.state.normalmods[this.state.monsterNr].abilityOne}</li>
			<li>A two : {this.state.normalmods[this.state.monsterNr].abilityTwo}</li>
			<li>A three : {this.state.normalmods[this.state.monsterNr].abilityThree}</li>
			 </ul>

			<button onClick={this.randomNr}> New monster </button>
			</div>
		)
	}
}
export default MonsterGenerator
