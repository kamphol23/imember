import React from 'react'
import BattleCalcus from './../battleCalcus/BattleCalcus'
const PlayerAbilitys = (props) =>{

	return(
		<div className={props.ability}>
		<BattleCalcus ability={props.ability}/>

		</div>
	)
}
export default PlayerAbilitys
