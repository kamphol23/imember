import React, {Component} from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
class LogInData extends Component {
state = {
  //userName are namnet på collectionet aka lösennordet.
  nameToDatabase:' ',
  collectionName:' ' ,
  isUserNameTrue:'',
  wrongPasswordOrName:'',
  nameToUserData:'',
  eventchecker:false
}


setNameHandler = () => {
  //denna raden gör så att man inte fetcha data förens man klickar på knappen.
  this.setState({isUserNameTrue: this.props.isUserNameTrue});
  this.setState({nameToUserData:this.props.userName});

    const db = firebase.firestore();
    let userRef = db.collection(this.props.userName);

      userRef.get()
      .then(snapshot => {
        snapshot.forEach(doc => {
        const data = doc.data();
      // console.log('userName data',data.userName);
        this.setState({collectionName: data.userName});
          this.toNextScen();
        });
      })
      .catch(err => {
        console.log('Error ', err);
      });

}

  toNextScen = () => {
    if(this.state.isUserNameTrue === this.state.collectionName){
      this.props.eventHandler();

    }else{
        this.setState({wrongPasswordOrName: 'Wrong password or username'});
      }
    }



eventHandler = () => {
  this.setNameHandler();

}
    render(){
if(this.eventHandler){
  if(this.state.eventchecker === true){
  this.setState({eventchecker: false});

}}

  // console.log('name to user data', this.state.nameToUserData);
    return(
    <div>
    <p>{this.state.wrongPasswordOrName}</p>

    <button onClick={this.eventHandler}> Log in </button>
    </div>
  )}
}
export default LogInData;
