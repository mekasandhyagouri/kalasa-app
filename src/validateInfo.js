export default function validateInfo(values) {
  let errors = {};

  //first name
  if(! values.firstname.trim()) {
    errors.firstname = "First Name can not be empty";
  }
     else if (!/^[A-Za-z]+/.test(values.name.trim())) {
       errors.name = 'Enter a valid name';
  }
 

  //last name
  if(!values.lastname.trim()) {
    errors.lastname = "Last Name is Required";
  }

  //email
  if(!values.email) {
    errors.email = "Email required"
  }else if(!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid!!';
  }

  //phone number
  if(!values.number){
    errors.number = 'Your Phone Number is required!!';
  } else if (!/^\d{10}$/.test(values.number)){
    errors.number = "Enter a Valid Phone Number!!"
  }

  //Address
  if(!values.address){
    errors.address = 'Address required!!';
  } else if (!/^[a-zA-Z0-9-/] ?([a-zA-Z0-9-/]|[a-zA-Z0-9-/] )*[a-zA-Z0-9-/]$/.test(values.address)){
    errors.address = "Address is invalid!!"
  }

  //city
  if(!values.city){
    errors.city = 'City is required!!';
  } else if (!/^[a-zA-Z',.\s-]{1,25}$/.test(values.city)){
    errors.city = "City is invalid!!"
  }

  //country
  if(!values.country){
    errors.country = 'Country is required!!';
  } else if (!/^[a-zA-Z',.\s-]{1,25}$/.test(values.country)){
    errors.country = "Country is invalid!!"
  }

  //zipcode
  if(!values.zipcode){
    errors.zipcode = 'Zipcode can not be empty :(';
  } else if (!/^\d{5}$|^\d{6}^\d{5}-\d{5}$/.test(values.zipcode)){
    errors.zipcode = "Zip Code is invalid!!"
  }

  //password
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 8) {
    errors.password = 'Password must be atleast 8 characters';
  }

  //confirm password
  if (!values.password2) {
    errors.password2 = 'Password is required';
  } else if (values.password2 !== values.password) {
    errors.password2 = 'Passwords do not match';
  }

  return errors;

}