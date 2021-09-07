import React from 'react';
import Joi from 'joi-browser';
import Form from "./common/form";
import logo from "../images/logo&text.png";


class LoginForm extends Form {
  state = {
    data: { username:"",  password: "" },
    errors: {}
  };

  schema = {
    username: Joi.string().required().label('Username'),
    password: Joi.string().required().label("Password")
  };
  
   
  doSubmit = () => {
    window.location.href="/home" ;
    //call the server
    console.log("submitted")

  }
  render() {
    

    return (
      <div>
        <img onClick={ e => window.location.href="/home" }className="logo" src={logo} alt="Logo" >
        </img>
        <h1 className="arrow-back">
        <i onClick={ e => window.location.href="/home"} className="fas fa-arrow-left">
        </i>
        </h1>
        <h1>Login</h1>
        <h3>Welcome Back,</h3>
        <form onSubmit={this.handleSubmit} >
         {this.renderInput('username', "Username", "email","fas fa-user icon")}
         {this.renderPasswordInput("Password", "password")}
         {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;