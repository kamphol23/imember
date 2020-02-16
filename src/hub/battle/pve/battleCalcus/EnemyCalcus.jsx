import React from 'react'
const EnemyCalcus = (props) => {
	let enemyHealth = props.enemyHealth;

	return(
		<div>
				<p> HP: {enemyHealth}</p>
		</div>
	)
}
export default EnemyCalcus
