import React, { Component, useState } from 'react'
import Joi from "joi-browser";
import Input from "./input";
import PasswordInput from './passwordInput';
// import 'react-phone-number-input/style.css';
import "../forms.css";
import PhoneNumberInput from './phoneInput';
import "./phone-input.css";

class Form extends Component {
  state = {
    data: {},
    errors: {}
  };

  validate = () => {
    const options = {abortEarly: false};
    const {error} = Joi.validate(this.state.data, this.schema, options );
    if(!error) return null;

    const errors ={};
    for ( let item of error.details)  errors[item.path[0]]  = item.message;
    return errors;

  };


  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };
  
 
  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();
   
    this.setState( { errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = {...this.state.errors}
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = {...this.state.data};
    data[input.name] = input.value;

    this.setState({ data, errors });
  };

  renderButton(label) {
    return(
      <button
        disabled={this.validate()}
        className="button">
        {label}
      </button>
       
    );
  };

  renderInput(name, placeholder, type = "text", className) {
    const { data, errors } = this.state;
    
    return(
      <Input 
        type={type}
        name={name}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
        placeholder={placeholder}
        className={className}
      />
      
    );
  };
  

  renderPhoneNumberInput( name) {
    const {data , errors } = this.state;
  
    return(
      <div><PhoneNumberInput 
        type="tel"
        name = {name}
        value = {data[name]}
        error={ errors[name]}
      />
      {/* { error && <div className="alert-message">{error}</div>} */}
      </div>
    );
  };

  renderPasswordInput( placeholder, name) {
    const { data, errors } = this.state;
      return(
      <PasswordInput
      name={name}
      value={data[name]}
      onChange={this.handleChange}
      error={errors[name]}
      placeholder={placeholder} 
      />
    );
  };

  renderTermsContent( error ) {
    return(
      <label className="main">
        <input 
        className="checkbox"
        type="checkbox" 
        required
        />
        <span className="terms-content">
           By continuing, you agree to <strong>Kalasa’s </strong> 
            <a href="https://google.com" target="_blank" rel="noreferrer">
                Terms of Services </a>  and  acknowledge 
                <strong>  Kalasa’s </strong> <a href="https://google.com" target="_blank" rel="noreferrer"> Privacy Policy</a> .
        </span>
        { error && <div className="alert-message">{error}</div>}
      </label>
    );
  };
}
 
export default Form;