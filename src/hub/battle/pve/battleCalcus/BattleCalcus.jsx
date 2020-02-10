import React from 'react'
const BattleCalcus = (props) => {
  const basicAttack = 'Basic attack';
  const midDmg = ['Fire ball','Heroic strike', 'Flying meatball', 'Last order']
  const  higthDmg =  ['pyroblast','Mortal strike','Saturday night fever']


  const test = () => {
		console.log(props.ability)
	}

  return(
    <div>
    		<button 	onClick={test}>{props.ability}</button>
    </div>
  )
}
export default BattleCalcus
