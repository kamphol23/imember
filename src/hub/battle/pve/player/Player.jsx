import React from 'react'
import PlayerAbilitys from './PlayerAbilitys'
import './Player.css'
const Player = (props) => {
	const playerName = props.playerName;
	const playerLevel = props.playerLevel;
	const expToNextLvl = props.expToNextLvl;
	const wapon = props.wapon;
	let abilitisList = null;



	if(props.abilitisData){
		abilitisList = props.abilitisData.map(
		ability =>(<PlayerAbilitys key={ability} ability={ability} /> ))
	}

	console.log(props.abilitisData);
	return(
		<div >
			<h3> Hero name : {playerName}</h3>
			<span> Lvl : {playerLevel} </span>
			<br/>
			<p> Need {expToNextLvl} to lvl up </p>
			<p> Wapon : {wapon} </p>

			{abilitisList}
	
		</div>
	)
}
export default Player
