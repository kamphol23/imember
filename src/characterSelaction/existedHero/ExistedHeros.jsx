import React, {useState, useEffect}  from 'react';
import './ExistedHeros.css';
import firebase from 'firebase/app';
import 'firebase/firestore';
import Hub from '../../hub/Hub'
import Displayingheros from './Displayingheros';
const ExistedHeros= () => {
const[heroNameData, setHeroNameData] = useState(null)

useEffect (() =>{
  const db = firebase.firestore();
   db.collection('JHKmw250cal').get().then((snapshot) => {
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
}, [heroNameData])

const toNextScen = () =>{
  this.props.history.push('/Hub')
}
    return(
      <div id="app">
      <div id="heroName" ></div>
      <Displayingheros heroNameList={heroNameData} toHub={toNextScen}/>
      </div>
    )
}


export default ExistedHeros;
