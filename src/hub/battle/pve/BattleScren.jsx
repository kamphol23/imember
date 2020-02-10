import React, {useState, useEffect} from 'react'
import firebase from 'firebase/app';
import 'firebase/firestore';
import {Link } from "react-router-dom";
import MonsterGenerator from './Monster/MonsterGenerator'
import Player from './player/Player';
const BattleScren = (props) =>{
	const heroName = props.location.state.heroName;
	const [lvelData, setLvelData] = useState(null);
	const [inventoryItemData, setInventoryItemdata] = useState(null);
	const [expToNextLvlData, setExpToNextLvlData] = useState(null);
	const [waponData, setWaponData] = useState(null);
	const [nameOfTheWaponData, setNameOfTheWaponData] = useState(null);
	const [abilitisData, setAbilityData] = useState(null);

	const db = firebase.firestore();
	const player = db.collection('JHKmw250cal').doc(heroName);
  	useEffect (() =>{
	player.onSnapshot(doc => {
		const data = doc.data();
		setInventoryItemdata(data.inventory);
		setExpToNextLvlData(data.expToNextLvl);
		setLvelData(data.lvel);
		setWaponData(data.wapon);
		setNameOfTheWaponData(data.nameOfTheWapon);
		setAbilityData(data.waponAbilitis)
	});
  }, [])

console.log('wapon', abilitisData);
	return(
		<div>
		<h2> PVE </h2>
		<Player playerName={heroName} playerLevel={lvelData}
		expToNextLvl={expToNextLvlData} wapon={waponData}/>
		<MonsterGenerator playerLevel={lvelData} abilitisData={abilitisData}/>
    	<button ><Link to={{pathname:'/SelectScren',state:{heroName:heroName}}}> Back </Link></button>
		</div>
	)
}
export default BattleScren;
