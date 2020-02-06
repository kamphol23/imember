import React, {useState, useEffect}  from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import DisplayScore from './DisplayScore'
import {Link } from "react-router-dom";
const ScoreBoard  = (props) => {
    const heroName = props.location.state.heroName;
    const [scoreData, setScoreData] = useState(null);
    const db = firebase.firestore();
    const scoreRef = db.collection('scoreBoard');
    const query = scoreRef.orderBy('score', 'desc')
    let list = null;

    useEffect (() =>{
        query.get()
                .then(scoreBoard => {
                    let scoreList = []

                  scoreBoard.forEach(doc => {
                    scoreList.push(doc.data());

                  });
                  setScoreData(scoreList)
                })
            }, [])

if(scoreData){
  list = scoreData.map( score =>(
        <DisplayScore key={score.name} score={score}/>
  ));
 }
      return(

      <div>
      <h2> ScoreBoard </h2>
      {list}
      <button ><Link to={{pathname:'/Hub',
      state:{
        heroName:heroName
      }}}> Back </Link></button>
      </div>
      )
}
export default ScoreBoard
