import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Register() {
  const [email, setEmail] = useState("");
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      // Send a request to your backend to register the user
      const response = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, username, password }),
      });

      if (response.ok) {
        const data = await response.json();

        // Store the token in cookies if needed
        Cookies.set("token", data.token);

        // Now you can use the token as needed
        console.log("User registered successfully! Token:", data.token);

        // Redirect to another page, e.g., the home page
        navigate("/");
      } else {
        console.log("Registration Failed");
      }
    } catch (error) {
      console.error("Error during registration:", error.message);
    }
  };

  return (
    <div className="App">
      <div>
        <div>
          <h2>Sign Up</h2>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <label>
            Name:
            <input
              type="text"
              placeholder="Enter your name"
              value={username}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button onClick={handleSignUp}>Sign Up</button>
        </div>
      </div>
      {/* <GoogleLogin
        onSuccess={handleGoogleLogin}
        onError={() => {
          console.log("Google Login Failed");
        }}
      /> */}
    </div>
  );
}

export default Register;
