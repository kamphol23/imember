import React, {useState, useEffect}  from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import Displayingheros from './Displayingheros';

const ExistedHeros= (props) => {
const[heroNameData, setHeroNameData] = useState(null)

useEffect (() =>{
  const db = firebase.firestore();
  let unsub = db.collection('JHKmw250cal').onSnapshot((snapshot) => {
    console.log('ONSNAPSHOT');
     let list = [];
     snapshot.docs.forEach(doc =>{
     if(doc.data().heroName !== undefined ){
         let obj = {
        ...doc.data(),
        id: doc.id
      };
      list.push(obj);
       }
    })
    setHeroNameData(list)
  })
  return unsub;
}, [])

    return(
      <div id="app">
      <div id="heroName" ></div>
      <Displayingheros heroNameList={heroNameData} />
      </div>
    )
}


export default ExistedHeros;
