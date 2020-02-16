import React, {Component} from 'react';
import LogIn from './logIn/LogIn';
import SignUp from './signUp/SingUp';
import './Landingpage.css'
class LandingPage extends Component{

  state = {
      isLogInOpen: true,
      isSignUpOpen: false,
  }



    render(){
      console.log(this.props);
      return(<div className="app">
        <div className="LandingPage">
        <div className="innerWrapper">
        <h1> I member! </h1>

        <button onClick={(e) => this.setState({isLogInOpen: true, isSignUpOpen: false})}>Log in</button>
        <button onClick={(e) => this.setState({isSignUpOpen: true, isLogInOpen: false})}> Sign up </button>
        <LogIn dislayStatus={this.state.isLogInOpen} {...this.props}/>
        <SignUp dislayStatus={this.state.isSignUpOpen}/>
        </div>
        </div>
            </div>
      )
    }
}

export default LandingPage;
