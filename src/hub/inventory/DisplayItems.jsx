import React from 'react'
import firebase from 'firebase/app';
import 'firebase/firestore';

const DisplayItems = (props) =>{
  let items = props.bagItems
  return(
    <div >
      <ul> {items.name}
        <li> amount : {items.amout}</li>
      </ul>
    </div>
  )
}
export default DisplayItems;
