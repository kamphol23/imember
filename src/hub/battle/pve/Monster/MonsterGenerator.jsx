import React, {Component} from 'react';
import BattleMath from './../battleCalcus/BattleMath'
class MonsterGenerator extends Component{
	state = {
		normalmods:[
			{name: 'Crow', abilityOne:{ name:'Bite', dmg: 8 }, abilityTwo:{name:'Dive', dmg: 18}, abilityThree:{name: 'Screech', dmg: 50}, health: 100},
			{name: 'Wolf', abilityOne:{name: 'Bite', dmg: 8 }, abilityTwo:{name: 'Howl', dmg: 18}, abilityThree:{name:'Rend', dmg: 50}, health: 100},
			{name: 'RottenRot', abilityOne:{name:'Rotten cone', dmg: 8}, abilityTwo: {name: 'Rot whip', dmg: 18}, abilityThree:{name: 'Overgrow', dmg: 50}, health: 100},
			{name: 'Bandits', abilityOne:{name: 'Punch', dmg: 8}, abilityTwo:{name: 'Stab', dmg: 18}, abilityThree:{name:'Pick pocket', dmg: 50}, health: 100} ],
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
				let enemy = this.state.normalmods[this.state.monsterNr];


		return(
			<div>
				<h3> Enemy {enemy.name}</h3>
				<BattleMath  {...this.props} enemyHp={monsterHpMulityplaier} playerAttack={ this.props.playerAttack} enemy={enemy}/>
				<p> First ability : {enemy.abilityOne.name}</p>
				<p> Second ability :  {enemy.abilityTwo.name}</p>
				<p> Third ability : {enemy.abilityThree.name}</p>

			</div>
		)
	}
}
export default MonsterGenerator
