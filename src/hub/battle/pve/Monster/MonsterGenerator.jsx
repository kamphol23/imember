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
				let monsterHpMulityplaier  = this.state.normalmods[this.state.monsterNr].health * this.props.playerLevel;



		return(
			<div>
				<h3> Enemy {this.state.normalmods[this.state.monsterNr].name}</h3>
				<p> HP : {monsterHpMulityplaier - this.props.playerAttack} </p>
				<p> First ability : {this.state.normalmods[this.state.monsterNr].abilityOne}</p>
				<p> Second ability :  {this.state.normalmods[this.state.monsterNr].abilityTwo}</p>
				<p> Third ability : {this.state.normalmods[this.state.monsterNr].abilityThree}</p>
			</div>
		)
	}
}
export default MonsterGenerator
