import React from 'react'
import PlayerCalus from '../battleCalcus/PlayerCalus'
import PlayerAbilitys from './PlayerAbilitys'
const ManaMeter = (props) => {
	const fullMana = props.mana
	let useedMana = null

	const subMana = (manaCost) =>{
		useedMana = fullMana - manaCost;
	}

	return(
		<div>
		<p>Mana {fullMana}/ {useedMana}</p>

		</div>
	)
}

export default ManaMeter
