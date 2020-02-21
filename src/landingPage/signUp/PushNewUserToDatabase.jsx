import React,{Component} from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';


class PushNewUserToDatabase extends Component{

  handleAdd = e => {
  		let obj = { userName: this.props.logInName};
      firebase.firestore().collection(this.props.password).doc('userName').set({userName: this.props.logInName});

  	};

    eventHandler = () =>{
      this.handleAdd();
      this.props.summitHandler();
    }
  render(){

    console.log('pus add', this.props);
    return(
      <div>
      <button onClick={this.eventHandler}> Confirm sign up </button>
      </div>
    )
  }
}

export default PushNewUserToDatabase;
