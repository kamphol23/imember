import React, {useState, useEffect}  from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
const ScoreBoard  = () => {
const [scoreData, setScoreData] = useState(null);
const db = firebase.firestore();
const scoreRef = db.collection('scoreBoard');
const query = scoreRef.orderBy('score', 'desc')

query.get()
        .then(score => {
          score.forEach(doc => {
              data = doc.data();
              setScoreData(data.score)
          });
        })
  return(
  <div>
  {scoreData}
  <div>
  )
}
export default ScoreBoard
