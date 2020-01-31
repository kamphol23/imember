import React, {Component} from 'react';
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


    return(
      <div>
  <button onClick={this.eventHandler}>Log in</button>
      </div>
    )
  }
}
export default UserData;
