import React , {useState} from 'react';
import "./forms.css";
import   "@fortawesome/fontawesome-svg-core";
import PasswordInput from './passwordVisiblity';
import ConfirmPasswordInput from './confirmPasswordVisibility';
import logo from "../images/logo&text.png";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';


const SignUpPujari = () => {
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const [value, setvalue ]  = useState()
  
 
  
  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  return (  
    <div className="signup_forms" >
       <img onClick={ e => window.location.href="/home" }className="logo" src={logo} alt="Logo" >
       </img>
      <h1 className="arrow-back">
      <i onClick={ e => window.location.href="/home"} className="fas fa-arrow-left"></i></h1>
      <h1>SIGN UP</h1>
      <h3>Create Your Account,</h3>
    <form  >

      <div className="input-icons">
          <input 
            className="input-field" 
            type="text" 
            placeholder="First  Name" 
            required
          />
          <i className="fas fa-user icon">
          </i>
      </div>

      <div className="input-icons">
          <input 
            className="input-field" 
            type="text" 
            placeholder="Last  Name" 
            required
          />
          <i className="fas fa-user icon">
          </i>
      </div>

      <div className="input-icons">
          <input 
            className="input-field" 
            type="email"
            placeholder="Email Address" 
            value=""
            required
          
          />
          <i className="fas fa-envelope icon">
          </i>
      </div>

      <div className="input-icons-phone">
        <label>
          
        <PhoneInput
          className="phone-input"
          placeholder="Phone Number  "
          defaultCountry="IN"
          value={value}
          onChange={setvalue}
          type="tel"
          id="number"
        />
        {/* <i className="fas fa-phone-alt icon">
        </i> */}
        </label>
      </div>

      <div className="input-icons">
          <input 
            className="input-field" 
            type="street" 
            placeholder="Address" 
            id="autocomplete"
            required
          />
          <i className="fas fa-address-book icon">
          </i>
      </div>

      <div className="input-icons">
          <input 
            className="input-field" 
            type="cities" 
            placeholder="City " 
            required
          />
          <i className="fas fa-city icon">
          </i>
      </div>

      <div className="input-icons">
          <input 
            className="input-field" 
            type="country" 
            placeholder="Country" 
            required
          />
          <i className="fas fa-globe-asia icon">
          </i>
      </div>

      <div className="input-icons">
          <input 
            className="input-field" 
            type="postal" 
            placeholder="Zip Code" 
            required
          />
          <i className="fas fa-map-pin icon">
          </i>
      </div>

      <div className="password-input">
        <PasswordInput />
      </div> 

      <div className="input-icons">
          <ConfirmPasswordInput />
      </div>

     
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
      </label>
 
      <button  onClick={e => window.location.href = "/login"} className="button">SIGN UP</button>
      </form>
  </div>
     
  );
}
 
export default SignUpPujari;