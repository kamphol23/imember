import React, {useEffect} from 'react'
import PlayerCalus from '../battleCalcus/PlayerCalus'
const PlayerAbilitys = (props) =>{
	const ability = props.ability
	const manaCost = ability.manaCost

const subMana = () => {
	props.subMana(manaCost)
}


	let showAbility = (<button onClick={subMana}>	<strong>{ability.ability}</strong>
		<br/>
		damage : {ability.dmg}
		<br/>
		mana cost : {manaCost}</button>)


	if(manaCost > props.mana){
		showAbility = (<button disabled = 'ture'>
		<strong>{ability.ability}</strong>
		<br/>
		damage : {ability.dmg}
		<br/>
		mana cost : {manaCost}
		</button>)
	}

	return(
		<div className={props.ability}>
		{showAbility}
		</div>
	)
}
export default PlayerAbilitys
