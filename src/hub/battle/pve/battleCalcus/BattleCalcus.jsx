import React, {useState, useEffect} from 'react'
import Player from '../player/Player'
import PlayerAbilitys from '../player/PlayerAbilitys'
import MonsterGenerator from '../Monster/MonsterGenerator'
import './BattleCalcus.css'
const BattleCalcus = (props) =>{
	const [manaData, setManaData] = useState(null)
	const [playerHpData, setPlayerHpData] = useState(null)
	const [playerDmg, setPlayerDmg] = useState(null)
	const [isPlayerTurn, setIsPlayer] = useState(true)
	let abilitisList = null;
	let buttonController = false

	if(props.abilitisData){
		abilitisList = props.abilitisData.map(
		ability =>(<PlayerAbilitys key={ability.ability} ability={ability} mana={manaData} subMana={subMana.bind(this)} playerAttack={playerAttack.bind(this)} /> ))
	}

	useEffect (() =>{
		setManaData(props.mana)
		setPlayerHpData(props.health)
	}, [props.mana])


	function subMana (x){
		setManaData(manaData - x)
	}

	function playerAttack(dmg){
		setPlayerDmg(dmg);
	}

	const enemyAttack = (x) => {
		setPlayerHpData(playerHpData - x )
	}


	return(
		<div className="battleCalcus">
		<Player playerName={props.heroName} playerLevel={props.playerLevel}
		expToNextLvl={props.expToNextLvl} wapon={props.wapon} health={playerHpData} mana={manaData}
		/>
		<div className="abilitisList">
		{abilitisList}
		</div>
		<MonsterGenerator playerLevel={props.playerLevel} playerAttack={playerDmg} playerGetAttack={enemyAttack.bind(this)}/>
		</div>
	)
}
export default BattleCalcus;
