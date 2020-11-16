import React, { useState } from "react";
import "../css folder/login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../fbconfig";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const signin = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password)
    .then((auth)=>{

      if(auth){
         history.push("/");
      }

    })
    .catch(err=>alert(err))
  };

  const register = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
    .then((auth)=>{
       if(auth){
          history.push("/")
       }
    }).catch(err=>alert(err.message));
  
  };

  return (
    <div className="login">
      <div className="login__form">
        <Link to="/">
          {" "}
          <img
            src="https://purepng.com/public/uploads/large/amazon-logo-s3f.png"
            alt=""
          />
        </Link>

        <form action="">
          <h3>Sign In</h3>

          <h6>E-mail</h6>
          <input
            required
            value={email}
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
          <h6>Password</h6>
          <input
            required
            value={password}
            type="text"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={signin} className="login__signinbtn">
            Sign In
          </button>
          <p className="login__notice">
            By Signing-in you agree to Amazon's Conditions of Use & Sale please
            see our Privacy Notice our Cookies Notice and our Interest Based Ads
            Notice
          </p>
          <button
            onClick={register}
            type="submit"
            className="login__createaccountbtn"
          >
            Create Your Amazone Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
