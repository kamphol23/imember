import React from 'react'
import firebase from 'firebase/app';
import 'firebase/firestore';
const PushPlayerToDb= (props) => {
  let playersArray = props.playersArray;
  let player = props.playerName;
    const handleAdd = () => {
      console.log('kördes');
          let db = firebase.firestore();
         db.collection('arena').doc('arenaOne').update({'players' : player})
    		.then(() => {

    		})
    		.catch(error => {
          console.log('kunde inte lägga till en ny karäktar');
    		})

    	}
  return(
    <div>
<button onClick={handleAdd}> Search </button>
    </div>
  )
}
export default PushPlayerToDb
