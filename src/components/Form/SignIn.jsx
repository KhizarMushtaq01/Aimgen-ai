import React, { useState } from 'react';
import './signin.css';
const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (event) => {
    event.preventDefault();
    // Handle sign-in logic here
    console.log('Sign In - Email:', email);
    console.log('Sign In - Password:', password);
  };

  return (
    <div className="form-main-container">
    <form onSubmit={handleSignIn}>
      <h2>Sign In</h2>
      <div>
        
        <input
        placeholder='Email:'
          type="email"
          id="signInEmail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <input
        placeholder='Password:'
          type="password"
          id="signInPassword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Sign In</button>
    </form>
    </div>
  );
};

export default SignInForm;
