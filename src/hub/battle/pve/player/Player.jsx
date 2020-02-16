import React, {useState, useEffect} from 'react'
import PlayerAbilitys from './PlayerAbilitys'
import './Player.css'
const Player = (props) => {
	const playerName = props.playerName;
	const playerLevel = props.playerLevel;
	const expToNextLvl = props.expToNextLvl;
	const wapon = props.wapon;
	const [manaData, setManaData] = useState(100)
	let abilitisList = null;



	if(props.abilitisData){
		abilitisList = props.abilitisData.map(
		ability =>(<PlayerAbilitys key={ability.ability} ability={ability} mana={manaData} subMana={subMana.bind(this)} /> ))
	}

	function subMana (x){
		setManaData(manaData - x)
	}





	console.log('mana',  manaData);
	return(
		<div >
			<h3> Hero name : {playerName}</h3>
			<span> Lvl : {playerLevel} </span>
			<p>Mana : {manaData}</p>
			<p> Need {expToNextLvl} to lvl up </p>
			<p> Wapon : {wapon} </p>
			{abilitisList}

		</div>
	)
}
export default Player
