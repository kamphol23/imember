import React, {Component} from 'react';
import PushNewUserToDatabase from './PushNewUserToDatabase';

const defaultState = {
  newUserName:'',
  newUserNameError:'',
  newUserPassword:'',
  newUserPasswordError:'',
  confirmPassword:'',
  confirmPasswordError:''
}

class SignUp extends Component{

  state = defaultState;

  validation = () => {
   let newUserNameError = '';
   let newUserPasswordError = '';
   let confirmPasswordError = '';


   if(typeof  this.state.newUserName != 'string' ||  this.state.newUserName === ""  ){
    newUserNameError = "Invalid userName";
    }

    if(typeof  this.state.newUserPassword != 'string' ||  this.state.newUserPassword === "" ){
     newUserPasswordError = "Invalid password";
   }

    if(this.state.newUserPassword.length < 8){
      newUserPasswordError = "Password most have more then 7 leather"
    }

    if(typeof  this.state.confirmPassword != 'string' ||  this.state.confirmPassword === "" || this.state.confirmPassword !== this.state.newUserPassword ){
     confirmPasswordError = "password did't match";
   }


   if(newUserNameError){
     this.setState({newUserNameError});
     return false;
   }

   if(newUserPasswordError){
     this.setState({newUserPasswordError});
     return false;
   }

   if(confirmPasswordError){
     this.setState({confirmPasswordError});
   }

   return true;

  }

  sumitSignUp = () =>{
   const isValid = this.validation();
   if(isValid) {
     this.setState({defaultState});
     console.log('Sign up');
   }
 };
    render(){

    let signUp = (
      <div>
      <h3> Sign Up </h3>
      <input type="name" value={this.state.newUserName} placeholder="Username" onChange={e => this.setState({newUserName: e.target.value})}/>
      <p >{this.state.newUserNameError}</p>
      <br/>
      <input type="password" placeholder="Password" value={this.state.newUserPassword} onChange={e => this.setState({newUserPassword: e.target.value})}/>
      <p >{this.state.newUserPasswordError}</p>
      <br/>
      <input type="password" placeholder="Confrim password" value={this.state.confirmPassword} onChange={e => this.setState({confirmPassword: e.target.value})}/>
      <p >{this.state.confirmPasswordError}</p>
      <br/>

      <PushNewUserToDatabase summitHandler={ this.sumitSignUp} logInName={this.state.newUserName}
      password={this.state.newUserPassword}/>
      </div>
    );

    if(! this.props.dislayStatus){
      signUp = null;
    }
      return(
        <div>
        {signUp}
        </div>
      )
    }
}

export default SignUp;
