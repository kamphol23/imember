import React, {useState, useEffect}   from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import DisplayPlayerInventory from './DisplayPlayerInventory'
import '../Shop.css'
const PlayerInventory = (props) =>{
  const heroName = props.heroName;
  const [inventoryItemData, setInventoryItemdata] = useState(null);
  const [goldData, setGoldData] = useState(null)
  let inventoryItems = null;
      const db = firebase.firestore();
      const inventory = db.collection('JHKmw250cal').doc(heroName);
        useEffect (() =>{
          inventory.onSnapshot(doc => {
            const data = doc.data();
              setInventoryItemdata(data.inventory);
              setGoldData(data.gold);

          });
            }, [])
    if(inventoryItemData){
      inventoryItems = inventoryItemData.map(
      items => (<DisplayPlayerInventory key={items.name} items={items} heroName={heroName}/>)
    )
      }



  return(
    <div>
      <h1> player </h1>
        <h4 > you have {goldData} gold</h4>
        <div   className="displaItems">
          {inventoryItems}
        </div>
    </div>
  )
}
export default PlayerInventory
