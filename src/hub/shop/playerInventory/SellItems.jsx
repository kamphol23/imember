import React from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
const SellItems = (props) => {
  const item = props.items;
  const playerName = props.heroName;

  const deleteItem = () => {
    firebase.firestore().collection('JHKmw250cal').doc(playerName).delete({item})
  }

  const addGold = () =>{
  firebase.firestore().collection('JHKmw250cal').doc(playerName).set({ })
  }
  return(
    <div>
    <button onClick={deleteItem}> Sell </button>
    </div>
  )
}
export default SellItems;
