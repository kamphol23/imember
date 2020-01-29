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
        this.state.characters.push(doc.data().heroName)
        this.state.race.push(doc.data().race)
        this.state.wapon.push(doc.data().wapon)
      }
    })
  })

let herosName = (
  <div className="bajs">
  <div>
  <p>
  Name :{this.state.characters[0]}
  <br/>
  Race :{this.state.race[0]}
  <br/>
  Wapon :{this.state.wapon[0]}
  </p>
  </div>

  <div>
  <p>
  Name :{this.state.characters[1]}
  <br/>
  Race :{this.state.race[1]}
  <br/>
  Wapon :{this.state.wapon[1]}
  </p>
  </div>

  <div>
  <p>
  Name :{this.state.characters[2]}
  <br/>
  Race :{this.state.race[2]}
  <br/>
  Wapon :{this.state.wapon[2]}
  </p>
  </div>
  </div>)


  if(!this.props.isheroVisibel){
    herosName = null;
  }


    return(
      <div className="app">
      {herosName}
      </div>
    )
  }
}
export default ExistedHeros;
