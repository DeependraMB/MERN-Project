import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Logo from "../Logo/Logo";
import "./SignupForm.css";
import axios from "axios";

function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const navigate = useNavigate();

  console.log(name);
  const formData = {
    name: name,
    email: email,
    phoneno: phoneno,
    username: username,
    password: password,
    cpassword: cpassword,
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log("called");
   
    axios.post("http://localhost:5000/signup", formData).then((response)=>
    {
    navigate.push("/");
    })
        
   
  }

  return (
    <div>
      <div className="signup-container">
        <form  method="post" onSubmit={handleSubmit}>
          <Logo />
          <br />
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              placeholder="Full Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <br />
          <div>
            <label>Email:</label>
            <input
              type="text"
              value={email}
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <br />
          <div>
            <label>Phone No:</label>
            <input
              type="number"
              value={phoneno}
              placeholder="+91 00000000000"
              onChange={(e) => {
                setPhoneno(e.target.value);
              }}
            />
          </div>
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
          <div>
            <label>Confirm Password:</label>
            <input
              type="Confirmpassword"
              value={cpassword}
              placeholder="Confirm Password"
              onChange={(e) => {
                setCpassword(e.target.value);
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

export default SignupForm;
