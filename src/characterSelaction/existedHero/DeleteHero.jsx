import React from 'react'
import firebase from 'firebase/app';
import 'firebase/firestore';
import ToHub from './ToHub';
const DeleteHero = ({heroName}) =>{
  let theNames = heroName.heroName

  const deleteHeros = () => {
    firebase.firestore().collection('JHKmw250cal').doc(heroName.id).delete()
  }


  return(
    <div className={heroName.id}>
    <p> {theNames }</p>
    <ToHub heroId={heroName.id}/>
    <button onClick={deleteHeros}> Delete </button>
    </div>
  )
}
export default DeleteHero;
