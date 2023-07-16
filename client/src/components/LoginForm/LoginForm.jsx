import React, { useState } from "react";
import Logo from "../Logo/Logo";
import "./LoginForm.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../context/auth";


function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();

  const formData = {
    username: username,
    password: password,
  };

  function handleSubmit(e) {
    e.preventDefault();

    console.log("handlesubmit Login Called");
    try {
      axios.post("http://localhost:5001/auth/login", formData).then((res) => {
        if (res.data && res.data.success) {
          toast.success("Login Successfully!!!!!!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setAuth({
            ...auth,
            user: res.data.user,
            token: res.data.token,
          });
          localStorage.setItem("auth",JSON.stringify(res.data))
          navigate("/");
        }
      });
    } catch (error) {
      console.log(error);
    }
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
