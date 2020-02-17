import React from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
const SellItems = (props) => {
  const item = props.items;
  const playerName = props.heroName;
  let playerGold = props.gold + props.sellPrice;


  const addGold = () =>{
  firebase.firestore().collection('JHKmw250cal').doc(playerName).set({playerGold})
  }


  return(
    <div>
    <button onClick={addGold}> Sell </button>
    </div>
  )
}
export default SellItems;
