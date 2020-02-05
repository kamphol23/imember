import React, {useState, useEffect}  from 'react'
import Bag from './Bag';
import firebase from 'firebase/app';
import 'firebase/firestore';
import {Link } from "react-router-dom";
const Inventory = (props) =>{
const heroName = props.location.state.heroName;
const [inventoryItemData, setInventoryItemdata] = useState(null);
const [waponData, setWapondata] = useState(null);
const [lvelData, setLvelData] = useState(null);


  const db = firebase.firestore();
  const inventory = db.collection('JHKmw250cal').doc(heroName);
useEffect (() =>{

  inventory.onSnapshot(doc => {
      const data = doc.data();
      setInventoryItemdata(data.inventory);
      setWapondata(data.wapon);
      setLvelData(data.lvel);
  });
}, [])
console.log(inventoryItemData);
    return(
      <div>
      <p> you inventory</p>
      <h3> you are level: {lvelData} </h3>
      <h3> your wapon: {waponData} </h3>
      <Bag bagItems={inventoryItemData}/>
      <button ><Link to={{pathname:'/Hub',
      state:{
        heroName:heroName
      }}}> Back </Link></button>

      </div>
    )
  }
export default Inventory;
