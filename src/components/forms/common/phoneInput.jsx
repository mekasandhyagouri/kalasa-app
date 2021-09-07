import React, {useState} from 'react';
import PhoneInput from 'react-phone-number-input';
import "../forms.css";

const PhoneNumberInput  = ({ name, error}) => {
  const [value, setValue] = useState();

  return ( 
  <div className="input-icons-phone">
    <PhoneInput
      className="phone-input"
      placeholder="Phone Number"
      name={name}
      id={name}
      value={value}
      onChange={setValue}
      defaultCountry="IN" 
      withCountryCallingCode= "boolean"
      useNationalFormatForDefaultCountryValue= "boolean"
      isValidPhoneNumber
      getCountryCallingCode
      formatPhoneNumberIntl
      />
    <i className="fas fa-phone-alt phone-icon"></i>
    {/* { error && <div className="alert-message">{error}</div>} */}
  </div>
   );
}
 
export default PhoneNumberInput;

