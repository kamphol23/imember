import React, {Component} from 'react';
import ExistedHeros from '../characterSelaction/existedHero/ExistedHeros';
class GettingHeroName extends Component{
state = {
  heroName:''
}

setName = (name) => {
  this.setState({heroName: })
}
  render(){
    return(
      <div>
      <ExistedHeros heroName={this.setName.bind(this)}/>
      </div>
    )
  }
}
export default GettingHeroName
