import React, {useState, useEffect} from 'react'
import firebase from 'firebase/app';
import 'firebase/firestore';
import {Link } from "react-router-dom";
import MonsterGenerator from './Monster/MonsterGenerator'
import Player from './player/Player';
import BattleCalcus from './battleCalcus/BattleCalcus'
const BattleScren = (props) =>{
	const heroName = props.location.state.heroName;
	const [lvelData, setLvelData] = useState(null);
	const [inventoryItemData, setInventoryItemdata] = useState(null);
	const [expToNextLvlData, setExpToNextLvlData] = useState(null);
	const [waponData, setWaponData] = useState(null);
	const [nameOfTheWaponData, setNameOfTheWaponData] = useState(null);
	const [abilitisData, setAbilityData] = useState(null);
	const [waponDmgData, setWaponDmgData] = useState(null);
	const [hpData, setHpData] = useState(null);
	const [manaData, setManaData] = useState(null);

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
		setAbilityData(data.waponAbilitis);
		setHpData(data.health);
		setManaData(data.mana);
	});
  }, [])

  function subMana(x){
	  setManaData(manaData - x)
  }

	return(
		<div>
		<h2> PVE </h2>
		<Player playerName={heroName} playerLevel={lvelData}
		expToNextLvl={expToNextLvlData} wapon={waponData} abilitisData={abilitisData}	health={hpData}
		 mana={manaData}
		/>
		<BattleCalcus  mana={manaData}/>
		<MonsterGenerator playerLevel={lvelData} />
    	<button ><Link to={{pathname:'/SelectScren',state:{heroName:heroName}}}> Back </Link></button>
		</div>
	)
}
export default BattleScren;
