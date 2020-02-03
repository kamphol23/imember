import React, {Component} from 'react';
class Hub extends Component{
  state = {
    heroName:'',
  }

  goBack = () => {
      this.props.history.push('/CharacterSelaction');
  }




   render(){
console.log(this.props.heroName);
    return(
      <div>
      <h1> Hub </h1>
      <p> Welcome back</p>
      <button> Battle </button>
      <button> Shop </button>
      <button> inventory </button>
      <button onClick={this.goBack}> Go back </button>
      </div>
    )
  }
}
export default Hub;
