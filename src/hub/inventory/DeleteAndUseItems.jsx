import React from 'react'
import firebase from 'firebase/app';
import 'firebase/firestore';

const DeleteAndUseItems = (props) =>{
  let items = props.bagItems
  return(
    <div >
    <span> {items}</span>
    </div>
  )
}
export default DeleteAndUseItems;
