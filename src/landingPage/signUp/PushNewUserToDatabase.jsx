import React,{Component} from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';


class PushNewUserToDatabase extends Component{

  handleAdd = e => {
  		let obj = { userName: this.props.logInName};
  		const collectionRef = firebase.firestore().collection(this.props.password);
  		collectionRef.add(obj)
  		.then(() => {

  		})
  		.catch(error => {

  		})
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
