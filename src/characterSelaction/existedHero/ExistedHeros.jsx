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


function appendingHeroinfo(doc){

  let heroName = document.getElementById('heroName');
  let div = document.createElement('div');
  let p = document.createElement('p');
  let span = document.createElement('span');

  div.setAttribute('data-id', doc.id);
  p.textContent = doc.data().heroName;
  span.textContent = doc.data().race;
  div.appendChild(p);
  div.appendChild(span);
  heroName.appendChild(div);

}

const db = firebase.firestore();
 db.collection('JHKmw250cal').get().then((snapshot) => {
    snapshot.docs.forEach(doc =>{
    if(doc.data().heroName !== undefined ){
      appendingHeroinfo(doc);

      }
    })
  })




    return(
      <div className="app">
      <div id="heroName" >
      </div>
      </div>
    )
  }
}
export default ExistedHeros;
