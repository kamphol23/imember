import React from 'react'
import PlayerAbilitys from './PlayerAbilitys'
const Player = (props) => {
	const playerName = props.playerName;
	const playerLevel = props.playerLevel;
	const expToNextLvl = props.expToNextLvl;
	const wapon = props.wapon;
	let abilitisList = null;
	if(props.abilitisData){
		abilitisList = props.abilitisData.map(
		ability =>(<PlayerAbilitys ability={ability}/> ))
	}
	return(
		<div>
			<h3> Hero name : {playerName}</h3>
			<p> Wapon : {wapon} </p>
			<span> Lvl : {playerLevel} </span>
			<br/>
			<p> Need {expToNextLvl} to lvl up </p>
		</div>
	)
}
export default Player
