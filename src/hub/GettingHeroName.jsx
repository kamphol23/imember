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
        <button onClick={e => this.setState({heroName: this.props.heroId}) }>Play</button>
      </div>
    )
  }
}
export default GettingHeroName
