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


  render(){


    return(
      <div>

      </div>
    )
  }
}
export default UserData;
