import React, {Component} from 'react';
import './ExistedHeros.css';
import firebase from 'firebase/app';
import 'firebase/firestore';
import UserData from '../../UserData';
class ExistedHeros extends Component{

state = {
  selectedHero:''
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

  const setSelectedHeroNameAndNextScen = (heroName) =>{
      this.setState({selectedHero: heroName})
      this.toNextScen();
  }

const deleteHero = (heroId) =>{
  let heroName = document.getElementById('heroName');
  let div = document.getElementById(heroId);
  console.log('Deleted : ', heroId);

  heroName.removeChild(div)
  firebase.firestore().collection('JHKmw250cal').doc(heroId).delete()
}

const db = firebase.firestore();
 db.collection('JHKmw250cal').get().then((snapshot) => {
    snapshot.docs.forEach(doc =>{
    if(doc.data().heroName !== undefined ){
      appendingHeroinfo(doc);

      }
    })
  })

function appendingHeroinfo(doc){
  let heroName = document.getElementById('heroName');
  let div = document.createElement('div');
  let p = document.createElement('p');
  let playButton = document.createElement('button');
  let deleteButton = document.createElement('button');

  div.setAttribute('id', doc.id);
  deleteButton.setAttribute('onClick', 'this.deleteHero(doc.id);');
  deleteButton.onclick = function() {deleteHero(doc.id);};
  playButton.setAttribute('onClick', 'this.setSelectedHeroNameAndNextScen(doc.id);');
  playButton.onclick = function() {setSelectedHeroNameAndNextScen(doc.id);};

  p.textContent = doc.data().heroName;
  playButton.textContent = 'Play';
  deleteButton.textContent = 'Delete';


  div.appendChild(p);
  div.appendChild(playButton);
  div.appendChild(deleteButton);
  heroName.appendChild(div);

}
console.log(this.props);
    return(
      <div className="app">
      <div id="heroName" ></div>
      <UserData heroName={this.state.selectedHero}/>
      </div>
    )
  }
}

export default ExistedHeros;
