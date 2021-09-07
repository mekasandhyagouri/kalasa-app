import React from 'react';
import { browserHistory } from "react-router-dom";
import Joi from 'joi-browser';
import Form from "./common/form";
import logo from "../images/logo&text.png";
import 'react-phone-number-input/style.css';
import "./forms.css";
import "./common/phone-input.css";


class SignUpPujari extends Form {
  state = {
    data: { 
      firstname:  "",
      lastname: "",
      email: "",
      phonenumber: "",
      address: "",
      city: "",
      country: "" ,
      zipcode: "",
      password: ""
    },
    errors: {},
  };

  schema = {
  
  firstname: 
    Joi.string()
    
    .min(3)
    .max(30)
    .required()
    .label('Firstname'),

  lastname:
    Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required()
    .label('Lastname'),
    
  email:
  Joi.string()
  .required()
  .email({ minDomainAtoms: 2 })
  .label("Email"),

  phonenumber: 
  Joi.string()
  .min(8)
  .max(14)
  .required()
  .label("Phone Number"),

  address:
   Joi.string()
   .required()
   .label("Address"),

  city: 
  Joi.string()
  .required()
  .label("City"),

  country: 
  Joi.string()
  .required()
  .label("Country") ,

  zipcode: 
    Joi.string()
    .required()
    .label("Zip Code"),

  password:
    Joi.string()
    .min(6)
    .max(15)
    .required()
    .label("Password"),

 
  };
  
  
  doSubmit = () => {
     window.location.href="/login" ;
    //call the server
    console.log("submitted");

  };


  handlePasswordChange = (prop) => (event) => {
    const [values, setValues] = React.useState({
      showPassword: false
    });
    setValues({ ...values, [prop]: event.target.value });
  };

  render() { 
   
    return (
    <div>
      <img onClick={ e => window.location.href="/home" }className="logo" src={logo} alt="Logo" >
      </img>

      <h1 className="arrow-back">
        <i onClick={ e => window.location.href="/home"} className="fas fa-arrow-left"></i>
      </h1>
      <h1>SIGN UP</h1>

      <h3>Create Your Account,</h3>

      <form onSubmit={this.handleSubmit} className="form">
        {this.renderInput('firstname', "First Name", "text", "fas fa-user icon")}
        {this.renderInput('lastname', "Last Name", "text","fas fa-user icon")}
        {this.renderInput('email', "Email Address", "email", "fas fa-envelope icon")}
        {this.renderInput('phonenumber', "Phone NUmber", "tel", "fas fa-envelope icon")}
        {this.renderPhoneNumberInput('phonenumber')}
        {this.renderInput('address', "Address", "street", "fas fa-address-book icon")}
        {this.renderInput('city', "City", "cities", "fas fa-city icon")} 
        {this.renderInput('country', "Country", "country", "fas fa-globe-asia icon")} 
        {this.renderInput('zipcode', "Zip Code", "postal","fas fa-map-pin icon")} 
        {this.renderPasswordInput("Password", "password")}
        {/* {this.renderPasswordInput("Confirm Password", 'password_2')} */}
        {this.renderTermsContent()}
        {this.renderButton("Sign Up")}
        <span className="already-login">
          Already have an account? <a href="/login">Login</a> 
        </span>
      </form>
    </div>
    );
  }
}
 
export default SignUpPujari;



// const SignUpPujari = () => {
   
//  return ( 
//   <div className="signup_forms" >
//     <form className="form" onSubmit={handleSubmit} >
//        <img onClick={ e => window.location.href="/home" }className="logo" src={logo} alt="Logo" >
//        </img>
//       <h1 className="arrow-back">
//       <i onClick={ e => window.location.href="/home"} className="fas fa-arrow-left"></i></h1>
//       <h1>SIGN UP</h1>
//       <h3>Create Your Account,</h3>

//       <div className="input-icons">
//           <input 
//             className="input-field"
//             name="firstname" 
//             type="text" 
//             placeholder="First  Name" 
//             value={values.firstname}
//             noValidate
//             onChange={set('name')}
//             onBlur={handleChange}
//             // required
//           />
//          <i className="fas fa-user icon">
//           </i>
//           { errors.firstname && <div className="alert alert-danger"><p>errors.firstname hii {errors.firstname}hii</p></div>}
          
//       </div>

//       <div className="input-icons">
//           <input 
//             className="input-field" 
//             id="lastname"
//             name="lastname" 
//             type="text" 
//             placeholder="Last  Name" 
//             value={values.lastname}
//             onChange={handleChange}
//             // required
//           />
//           <i className="fas fa-user icon">
//           </i>
//       </div>

//       <div className="input-icons">
//           <input 
//             className="input-field" 
//             id="email"
//             name="email" 
//             type="email"
//             placeholder="Email Address"
//             value={values.email}
//             onChange={handleChange} 
//             // required
          
//           />
          
//           <i className="fas fa-envelope icon">
//           </i>
//           {errors.email && <p>{errors.email}</p>}
//       </div>

      // <div className="input-icons-phone">
      //   <PhoneInput
      //     className="phone-input"
      //     type="tel"
      //     id="number"
      //     name="number"
      //     placeholder="Phone Number"
      //     defaultCountry="IN"
      //     // value={value}
      //     // onChange={setValue}
      //   />
      //   <i className="fas fa-phone-alt phone-icon">
      //   </i>
      //   </div>

//       <div className="input-icons">
//           <input 
//             className="input-field" 
//             type="street" 
//             name="address"
//             placeholder="Address"
//             value={values.address}
//             onChange={handleChange}  
//             id="autocomplete"
//             required
//           />
//           <i className="fas fa-address-book icon">
//           </i>
//       </div>

//       <div className="input-icons">
//           <input 
//             className="input-field" 
//             name="city"
//             id="city"
//             type="cities" 
//             placeholder="City " 
//             value={values.city}
//             onChange={handleChange} 
//             required
//           />
//           <i className="fas fa-city icon">
//           </i>
//       </div>

//       <div className="input-icons">
//           <input 
//             className="input-field" 
//             name="country"
//             id="country"
//             type="country" 
//             placeholder="Country" 
//             value={values.country}
//             onChange={handleChange} 
//             required
//           />
//           <i className="fas fa-globe-asia icon">
//           </i>
//       </div>

//       <div className="input-icons">
//           <input 
//             className="input-field" 
//             name="zipcode"
//             id="zipcode"
//             type="postal" 
//             placeholder="Zip Code" 
//             value={values.zipcode}
//             onChange={handleChange} 
//             required
//           />
//           <i className="fas fa-map-pin icon">
//           </i>
//       </div>

      

     
 
//       <button
//         // onClick={e => window.location.href = "/login"} 
//         className="button"
//         type="submit"
//         >SIGN UP</button>
//         <span className="form-input-login">
//           Already have an account? <a href="/login">Login</a> 
//         </span>
//       </form>
//     </div>
//   );
// }

// export default SignUpPujari;

