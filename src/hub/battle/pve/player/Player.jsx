import React from 'react'
import './Player.css'
const Player = (props) => {
	const playerName = props.playerName;
	const playerLevel = props.playerLevel;
	const expToNextLvl = props.expToNextLvl;
	const wapon = props.wapon;
	let abilitisList = null;


	return(
		<div >
			<h3> Hero name : {playerName}</h3>
			<p> HP {props.health} </p>
			<p> Mana : {props.mana} </p>
			<span> Lvl : {playerLevel} </span>
			<p> Need {expToNextLvl} to lvl up </p>
			<p> Wapon : {wapon} </p>



		</div>
	)
}
export default Player
