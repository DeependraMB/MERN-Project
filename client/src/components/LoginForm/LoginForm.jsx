import React, { useState } from "react";
import Logo from "../Logo/Logo";
import "./LoginForm.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const formData = {
    username: username,
    password: password,
  };

  function handleSubmit(e) {
    e.preventDefault();

    console.log("handlesubmit Login Called");

    axios
      .post("http://localhost:5001/login", formData)
      .then((response) => {
        
        if (response.data === "exist") {
          
          alert("Login SuccessFully");
        } else if (response.data === "notexist") {
          alert("Invalid Username or Password");
        }
      })
      .catch((e) => {
        alert("Wrong Details!!!!");
        console.log(e);
      });
  }

  return (
    <div>
      <div className="login-container">
        <form method="post" onSubmit={handleSubmit}>
          <Logo />
          <br />
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              placeholder="Username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <br />
          <div>
            <label>Password:</label>
            <input
              type="text"
              value={password}
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <br />
          <button type="submit" class="btn btn-outline-success">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
