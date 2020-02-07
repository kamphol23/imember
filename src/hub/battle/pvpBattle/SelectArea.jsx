import React, {useState, useEffect}from 'react'
import firebase from 'firebase/app';
import 'firebase/firestore';
import PushPlayerToDb from './PushPlayerToDb';
const SelectArena = (props) =>{
  const[arenaData, setArenaData] = useState(null)
  const heroName = props.location.state.heroName;
  let arenaId = null
  let playersArray = null
    useEffect (() =>{
      const db = firebase.firestore();
      let unsub = db.collection('arena').onSnapshot((snapshot) => {
        console.log('ONSNAPSHOT');
         let list = [];
         snapshot.docs.forEach(doc =>{
             let obj = {
            id: doc.id,
            ...doc.data()
           }
             list.push(obj);
        })
        setArenaData(list)
      })
      return unsub;
    }, [])

    if(arenaData){
      arenaId = arenaData.map( item =>( item.id));
      playersArray = arenaData.map( item =>( item.players));
    }

    return(
      <div>
      <PushPlayerToDb playerName={heroName} arenas={arenaId} playersArray={playersArray}/>
      </div>
    )
  }
export default SelectArena;
