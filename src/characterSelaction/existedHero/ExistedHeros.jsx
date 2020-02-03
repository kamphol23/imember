import React, {Component} from 'react';
import './ExistedHeros.css';
import firebase from 'firebase/app';
import 'firebase/firestore';

class ExistedHeros extends Component {

      state={
        characters:[],
        race:[],
        wapon:[]
      }



  render(){

  const db = firebase.firestore();
   db.collection('JHKmw250cal').get().then((snapshot) => {
      snapshot.docs.forEach(doc =>{
      if(doc.data().heroName !== undefined ){
        appendingHeroinfo(doc);

        }
      })
    })

function appendingHeroinfo(doc){

  let app = document.getElementById('app');
  let heroName = document.createElement('heroName');
  let div = document.createElement('div');
  let p = document.createElement('p');
  let span = document.createElement('span');

  div.setAttribute('data-id',"heroName");
  p.textContent = doc.data().heroName;
  span.textContent = doc.data().race;

  div.appendChild(p);
  div.appendChild(span);
  heroName.appendChild(div);
  app.appendChild(heroName);

  }

console.log(this.props.isCreatecharacter );
    return(
      <div id="app">

      </div>
    )
  }
}
export default ExistedHeros;
