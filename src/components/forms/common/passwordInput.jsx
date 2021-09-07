import React from "react";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import "../forms.css";


const PasswordInput = ({ placeholder, name, error, ...rest}) => {
  const [values, setValues] = React.useState({
	showPassword: false,
});


const handleClickShowPassword = () => {
	setValues({ ...values, showPassword: !values.showPassword });
};

const handleMouseDownPassword = (event) => {
	event.preventDefault();
};


return (
  <div>
	  <input
      {...rest}
      name={name}
      id= {name}
      className="input"
      placeholder = {placeholder}
      type={values.showPassword ? "text" : "password"}
     
      />
    <i
    className = "icon"
    onClick={handleClickShowPassword}
    onMouseDown={handleMouseDownPassword}
    >
    {values.showPassword ? <Visibility /> : <VisibilityOff />}
    </i>
    { error && <div className="alert-message">{error}</div>}
  </div>
);
};

export default PasswordInput;
