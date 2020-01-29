import React, {Component} from 'react';
import CharacterSelaction from './characterSelaction/CharacterSelaction';
class UserData extends Component{
state = {
  collectionName:'',
  characterNrOne:{},
  characterNrTwo:{},
  characterNrThree:{},

}

setCollectionName = () => {
  this.setState({collectionName: this.props.userCollection});

}

eventHandler = () => {
  this.setCollectionName();
  this.props.logInBtn();
}
  render(){

if( this.state.collectionName !== ''){
  console.log('jag är inte tomt', this.state.collectionName);

}else {
  console.log('jag blev tom');
}



    return(
      <div>
  <button onClick={this.eventHandler}>Log in</button>
      </div>
    )
  }
}
export default UserData;
