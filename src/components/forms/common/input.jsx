import React from 'react';
import "../forms.css";

const Input = ({ name, error, placeholder , className, ...rest}) => {
  return (
    <div className="input-icons">
      <label htmlFor={name}></label>
      <input 
        {...rest}
        name={name}
        id={name}
        className="input-field" 
        placeholder={placeholder}
      />
      <i className={className}></i>
      { error && <div className="alert-message">{error}</div>}
    </div>
    );
}
 
export default Input;