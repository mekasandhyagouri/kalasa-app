import React from "react";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import "./forms.css";



const PasswordInput = () => {
  const [values, setValues] = React.useState({
	password: "",
	showPassword: false,
});

const handleClickShowPassword = () => {
	setValues({ ...values, showPassword: !values.showPassword });
};

const handleMouseDownPassword = (event) => {
	event.preventDefault();
};

const handlePasswordChange = (prop) => (event) => {
	setValues({ ...values, [prop]: event.target.value });
};



return (
  <div>
	  <input
       className="input"
        placeholder = "Password [minimum 8 characters... ]"
        type={values.showPassword ? "text" : "password"}
        onChange={handlePasswordChange("password")}
        value={values.password}
        required
      />
    <i
    className ="icon"
    onClick={handleClickShowPassword}
    onMouseDown={handleMouseDownPassword}
    >
    {values.showPassword ? <Visibility /> : <VisibilityOff />}
    </i>
  </div>
);
};

export default PasswordInput;
