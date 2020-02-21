import React from 'react'
const PlayerAbilitys = (props) =>{
	const ability = props.ability
	const manaCost = ability.manaCost


	const eventHandler = () => {
		props.subMana(manaCost)
		props.playerAttack(ability.dmg);
	
	}





	let showAbility = (<button onClick={eventHandler}>
		<strong>{ability.ability}</strong>
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
