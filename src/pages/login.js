import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import logo from "../photo/moodseoul.jpg";
import { CRow, CFormLabel, CCol, CFormInput, CButton } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import { login } from "../redux/actions/authActions";
import { useDispatch } from "react-redux";

function Login() {
  const [user_nm, setUsername] = useState("");
  const [passwd, setPassword] = useState("");
  const navigate = useNavigate(); // useNavigate replaces useHistory
  const dispatch = useDispatch();

  const handleGoogleLogin = (credentialResponse) => {
    const credentialResponseDecoded = jwtDecode(credentialResponse.credential);
    console.log(credentialResponseDecoded);
    navigate("/snsregister", {
      state: { credentialData: credentialResponseDecoded },
    });
  };

  // const handleSignUp = () => {
  //   // Redirect to the /register page
  //   navigate("/register");
  // };

  const handleSignIn = async () => {
    try {
      await login({ user_nm, passwd })(dispatch); // assuming `dispatch` is available in your component
      // You might want to add additional logic after a successful login
      navigate("/");
    } catch (error) {
      // Handle login failure (display error message, etc.)
      console.error(error.message);
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontSize: "1.5rem",
        }}
      >
        <div>
          <img src={logo} alt="logo" style={{ border: "none" }} />
        </div>
        <div>
          <h2>Sign In</h2>
        </div>
        <div>
          <CRow className="mb-3">
            <CFormLabel htmlFor="staticEmail">Username</CFormLabel>
            <CCol sm={10}>
              <CFormInput
                type="text"
                id="staticEmail"
                value={user_nm}
                onChange={(e) => setUsername(e.target.value)}
              />
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel htmlFor="inputPassword">Password</CFormLabel>
            <CCol sm={10}>
              <CFormInput
                type="password"
                id="inputPassword"
                value={passwd}
                onChange={(e) => setPassword(e.target.value)}
              />
            </CCol>
          </CRow>
          <CButton
            type="submit"
            color="primary"
            size="lg"
            onClick={handleSignIn}
          >
            Sign In
          </CButton>
        </div>
        <GoogleLogin
          type="icon"
          size="lg"
          onSuccess={handleGoogleLogin}
          onError={() => {
            console.log("Google Login Failed");
          }}
        />
      </div>
    </div>
  );
}

export default Login;
