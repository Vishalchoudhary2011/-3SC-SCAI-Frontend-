import React, { useState, useEffect } from "react";
import "./login.scss";
import {
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Link, useNavigate } from "react-router-dom";
import Logo1 from "../../assets/logo.png";
import validator from "validator";
import { loginUser } from "../../utils/ApiHandler";
import { toast } from "react-toastify";
import { isEmpty } from "lodash";

const Login = () => {
  let navigate = useNavigate();

  useEffect(() => {
    if (!isEmpty(localStorage.getItem("user"))) {
      navigate("/admin");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localStorage.getItem("user")]);

  const [formData, SetFormData] = useState({
    email: "",
    password: "",
    showPassword: false,
  });
  const [emailError, setEmailError] = useState(false);

  const handleClickShowPassword = () => {
    SetFormData({
      ...formData,
      showPassword: !formData.showPassword,
    });
  };

  const { email, password, showPassword } = formData;

  const checkError = () => {
    if (validator.isEmail(email)) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (prop) => (event) => {
    SetFormData({ ...formData, [prop]: event.target.value });
    validator.isEmail(email) && setEmailError(false);
  };

  const submitUser = async (email, password) => {
    if (email === "" || password === "") {
      toast.error("Enter Email ID / Password !!!");
    } else {
      const res = await loginUser(email, password);
      if (res.status === 200) {
        toast.success("Login Successfull !!!");
        navigate("/admin");
      }
    }
  };

  return (
    <div className="login">
      <div className="logo-container">
        <div className="logo-container-logo">
          <img src={Logo1} alt="logo" />
        </div>
      </div>
      <div className="login-form">
        <h1 className="login-heading">{"Welcome to 3SC"}</h1>
        <span className="login-subheading">{"Sign into your account"}</span>

        <TextField
          className="login-input"
          label={"Email ID"}
          variant="outlined"
          value={email}
          onChange={handleChange("email")}
          onBlur={checkError}
          helperText={[
            emailError && (
              <div style={{ color: "red" }} key="mail">
                {" "}
                *Enter a valid email ID
              </div>
            ),
          ]}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility" edge="end">
                  {<MailOutlineIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <TextField
          label={"Password"}
          variant="outlined"
          type={showPassword ? "text" : "password"}
          name="password"
          value={password}
          onChange={handleChange("password")}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  edge="end"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Link to={"/forgot-password"} className="login-forgot remove-underline">
          <span>{"Forgot password?"}</span>
        </Link>
        <button
          className="login-button"
          onClick={() => submitUser(email, password)}
        >
          {" "}
          {"Login"}{" "}
        </button>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default Login;
