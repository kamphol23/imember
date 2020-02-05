import React, {Component} from 'react'
class Inventory extends Component{
  state = {
    heroName:'',
    wapon:'',
    bag:[]
  }

  componentDidMount () {
    this.setState({heroName:this.props.location.state.heroName })
  }



  render(){

    return(
      <div>
      <p> you inventory</p>

      </div>
    )
  }
}
export default Inventory;
