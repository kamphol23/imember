import React, {Component} from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

class LogInData extends Component {
state = {
  //userName are namnet på collectionet aka lösennordet.
  nameToDatabase:' ',
  isEverytingRight: false,
  collectionName:' ' ,
  isUserNameTrue:'',
  wrongPasswordOrName:''
}




setNameHandler = () => {
  //denna raden gör så att man inte fetcha data förens man klickar på knappen.
  this.setState({isUserNameTrue: this.props.isUserNameTrue});

    const db = firebase.firestore();
    let userRef = db.collection(this.props.userName);

      userRef.get()
      .then(snapshot => {
        snapshot.forEach(doc => {
        const data = doc.data();
      console.log('userName data',data.userName);
        this.setState({collectionName: data.userName});


        });
      })
      .catch(err => {
        console.log('Error ', err);
      });

      if(this.state.collectionName){
        this.toNextScen();
      }

}

    toNextScen = () => {
      if(this.state.isUserNameTrue !== this.state.collectionName){
        this.setState({wrongPasswordOrName: 'Wrong password or username'});
      }else{
          this.props.eventHandler();
        }
      }




    render(){
  if(this.state.collectionName !== ' '){
    this.toNextScen();
  }


    return(
    <div>
    <p>{this.state.wrongPasswordOrName}</p>
    <button onClick={this.setNameHandler}>Log in</button>

    </div>
  )}
}
export default LogInData;
