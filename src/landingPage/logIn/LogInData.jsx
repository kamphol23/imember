import React from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';



const LogInData = (props) => {
const db = firebase.firestore();
const user = db.collection(props.userName)


  return(
    <div>
    <button onClick={props.sumitLogIn}>Log in</button>
    </div>
  )
}
export default LogInData;
