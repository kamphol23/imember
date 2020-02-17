import React, {useState, useEffect} from 'react'
import Player from '../player/Player'
import PlayerAbilitys from '../player/PlayerAbilitys'
import MonsterGenerator from '../Monster/MonsterGenerator'
const BattleCalcus = (props) =>{
	const [manaData, setManaData] = useState(null)
	const [playerHp, setPlayerHp] = useState(null)
	const [playerDmg, setPlayerDmg] = useState(null)

	let abilitisList = null;


	if(props.abilitisData){
		abilitisList = props.abilitisData.map(
		ability =>(<PlayerAbilitys key={ability.ability} ability={ability} mana={manaData} subMana={subMana.bind(this)} playerAttack={playerAttack.bind(this)} /> ))
	}

	useEffect (() =>{
		setManaData(props.mana)
		setPlayerHp(props.health)
	}, [props.mana])


	function subMana (x){
		setManaData(manaData - x)
	}

	function playerAttack(dmg){
		setPlayerDmg(dmg);
	}

	return(
		<div>
		<Player playerName={props.heroName} playerLevel={props.playerLevel}
		expToNextLvl={props.expToNextLvl} wapon={props.wapon} health={playerHp} mana={manaData}/>
		{abilitisList}

		<MonsterGenerator playerLevel={props.playerLevel} playerAttack={playerDmg}/>
		</div>
	)
}
export default BattleCalcus;
