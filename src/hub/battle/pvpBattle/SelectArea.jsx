import React, {useState, useEffect}from 'react'
import firebase from 'firebase/app';
import 'firebase/firestore';
const SelectArena = () =>{
const[arenaData, setArenaData] = useState(null)

  useEffect (() =>{
    const db = firebase.firestore();
    let unsub = db.collection('arena').onSnapshot((snapshot) => {
      console.log('ONSNAPSHOT');
       let list = [];
       snapshot.docs.forEach(doc =>{
           let obj = {
          ...doc.data(),
          id: doc.id
         }
           list.push(obj);
      })
      setArenaData(list)
    })
    return unsub;
  }, [])
  
    return(
      <div>
      </div>
    )
  }
export default SelectArena;
