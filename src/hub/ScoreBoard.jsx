import React, {useState, useEffect}  from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

const ScoreBoard  = () => {
    const [scoreData, setScoreData] = useState(null);
    const db = firebase.firestore();
    const scoreRef = db.collection('scoreBoard');
    const query = scoreRef.orderBy('score', 'desc')
    let list = null;

    useEffect (() =>{
        query.get()
                .then(score => {
                    let list = []
                  score.forEach(doc => {
                      list.push(doc.data());
                  });
                  setScoreData(list)
                })
            }, [])
        
      return(

      <div>
      {list}
      </div>
      )
}
export default ScoreBoard
