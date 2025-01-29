import React, { useState } from "react";
import "./Form.css";
// import SignInForm from "./SignIn";
const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  //   const [hidesigninForm, setHidesigninForm] = useState(false);

  const handleSignUp = (event) => {
    event.preventDefault();
    // Handle sign-up logic here
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Sign Up - Email:", email);
    console.log("Sign Up - Password:", password);
  };

  //   const ShowSignInForm = () => {
  //     setHidesigninForm(!hidesigninForm);
  //   };

  return (
    <div className="form-main-container">
      <form action="" className="mainform" onSubmit={handleSignUp}>
        <h2>Sign Up</h2>
        <div className="forminput">
          <input
            placeholder=" Enter Your Email"
            type="email"
            id="signUpEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="forminput">
          <input
            placeholder="Set Password"
            type="password"
            id="signUpPassword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="forminput">
          <input
            placeholder="Confirm Password"
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div className="btns-combine">
          <button className="signupbtn" type="submit">
            Sign Up
          </button>

          <div className="already">
            Already have an account?{" "}
            <button className="signinbtn">
              {/* <button onClick={ShowSignInForm} className="signin"> */}
              Sign In
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
