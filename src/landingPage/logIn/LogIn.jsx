import React, {Component} from 'react';
import LogInData from './LogInData';
const defaultState = {
  userName:'',
  password:' ',
  unserNameError:'',
  passwordError:'',

}


class LogIn extends Component{
  state = defaultState;



  validation = () => {
   let userNameError= '';
   let passwordError= '';


   if(typeof  this.state.userName != 'string' ||  this.state.userName === ""  ){
    userNameError = "Invalid userName";
    }

    if(typeof  this.state.password != 'string' ||  this.state.password === "" || this.state.password.length < 8){
     passwordError = "Invalid password";
   }

   if(userNameError){
     this.setState({userNameError});
     return false;
   }

   if(passwordError){
     this.setState({passwordError});
     return false;
   }

   return true;

  }


ToNextScen = () => {
  this.props.history.push('/CharacterSelaction')
}

  sumitLogIn = () =>{
   const isValid = this.validation();
   if(isValid) {
     // this.setState({defaultState});
     this.ToNextScen();
     console.log('In loggad');

   }
 };



    render(){

  let logIn = (
      <div>
      <p> Log in</p>
      <input type="name" value={this.state.userName} placeholder="Username" onChange={e => this.setState({userName: e.target.value})}/>
       <p >{this.state.userNameError}</p>
       <br/>
      <input type="password" placeholder="Password" value={this.state.password} onChange={e => this.setState({password: e.target.value})}/>
        <p >{this.state.passwordError}</p>
        <br/>
        <LogInData userName={this.state.password} eventHandler={this.sumitLogIn} isUserNameTrue={this.state.userName}/>

      </div>
      );


  if(! this.props.dislayStatus){
    logIn = null;
  }
      return(
        <div>
        {logIn}
        {this.props.linkToCS}

        </div>
      )
    }
}

export default LogIn;
