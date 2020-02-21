import React, {useState, useEffect} from 'react'
const BattleMath = (props) => {
  const [enemyHp, setEnemyHp] = useState(null)
  const [palyerDmg, setPlayerDmg] = useState(null)

    	useEffect (() =>{
          setEnemyHp(props.enemyHp)
      }, [props.enemyHp])

      useEffect (() =>{
          setEnemyHp(enemyHp - props.playerAttack )
          enemeyTunrToattack();
      }, [props.playerAttack])

    const enemeyTunrToattack = () => {
      	let x = Math.floor((Math.random() * 3) + 0);

          if(x === 0){
            props.playerGetAttack(props.enemy.abilityOne.dmg)
            console.log(props.enemy.name, 'used', props.enemy.abilityOne.name, 'and did', props.enemy.abilityOne.dmg, 'damage to you' );
          }else if (x == 1) {
              props.playerGetAttack(props.enemy.abilityTwo.dmg)
              console.log(props.enemy.name, 'used', props.enemy.abilityTwo.name, 'and did', props.enemy.abilityTwo.dmg, 'damage to you' );
          }else if (x == 1) {
              props.playerGetAttack(props.enemy.abilityThree.dmg)
              console.log(props.enemy.name, 'used', props.enemy.abilityThree.name, 'and did', props.enemy.abilityThree.dmg, 'damage to you' );
          }



    }


  return(
    <div>
    <p> HP {enemyHp}</p>
    </div>
  )
}
export default BattleMath
