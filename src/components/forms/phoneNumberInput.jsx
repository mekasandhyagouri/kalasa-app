import React, {Component} from 'react';
import PhoneInput from 'react-phone-number-input';
// import 'react-phone-number-input/style.css';
import { useState } from 'react';



const PhoneNumberInput= () => {
  const [value, setvalue ]  = useState()
  return (
    <div className="phone-input-icons">
    <PhoneInput
    className="phone-input"
    placeholder="Phone Number"
    defaultCountry="IN"
    value={value}
    onChange={setvalue}
    Icon="phone-alt">
    
    </PhoneInput>
    
    </div>
    
  )
}

export default PhoneNumberInput ;