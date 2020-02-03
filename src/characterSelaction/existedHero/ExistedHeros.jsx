import React, {Component} from 'react';
import './ExistedHeros.css';
import firebase from 'firebase/app';
import 'firebase/firestore';
import Hub from '../../hub/Hub'
class ExistedHeros extends Component{

state = {
  selectedHero:'',
  tureOrFalse:true
}


render(){
let trueOrFalse = this.state.selectedHero;

const setSelectedHeroNameAndNextScen = (heroName) =>{
      this.setState({selectedHero: heroName});
      this.setState({tureOrFalse: false});
      this.props.history.push('/Hub');
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

  if(trueOrFalse === ''){
  div.appendChild(p);
  div.appendChild(playButton);
  div.appendChild(deleteButton);
  heroName.appendChild(div);
}
}

// const test = (name) =>{
//   () => this.props.heroName()
// }
// let test = (<Hub heroName={this.state.selectedHero}/>)
// if(trueOrFalse === ''){
//   test = null
// }
    return(
      <div className="app">
      <div id="heroName" ></div>
      <Hub heroName={this.state.selectedHero}/>

      </div>
    )
  }
}

export default ExistedHeros;
