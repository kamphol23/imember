import React, {Component} from 'react';
class UserData extends Component{
state = {
  collectionName:'',
  characterName:this.props.heroName
}

setCollectionName = () => {
  this.setState({collectionName: this.props.userCollection});

}
setCharacterName = () => {
this.setState({characterName: this.props.heroName })
}


  render(){
    console.log('test', this.state.characterName);

    return(
      <div>

      </div>
    )
  }
}
export default UserData;
