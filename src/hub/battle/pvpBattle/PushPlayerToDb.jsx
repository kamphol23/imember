import React from 'react'
import firebase from 'firebase/app';
import 'firebase/firestore';
const PushPlayerToDb= (props) => {
  let playersArray = props.playersArray;
  let player = props.playerName;
  let arrayAmount = props.arenas
  let list = null;
    const handleAdd = () => {
      console.log('kördes');
          let db = firebase.firestore();
         db.collection('arena').doc('arenaOne').update({players :[{ player}] })
    		.then(() => {

    		})
    		.catch(error => {
          console.log('kunde inte lägga till en ny karäktar');
    		})
    	}

    console.log(list);
    if(playersArray){
        list = playersArray.map(item =>( item.index))
    }
  return(
    <div>
<button onClick={handleAdd}> Search </button>
    </div>
  )
}
export default PushPlayerToDb
