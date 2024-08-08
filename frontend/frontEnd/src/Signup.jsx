import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';


const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [darkMode, setDarkMode] = useState(false); // Add dark mode state
  const [bgcolor, setBgColor] = useState('white'); // Add background color state

  const handleSubmit = async (e) =>{
    e.preventDefault();
    handleSignUp();
  }
  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5172/signup', {
        Username: username,
        Email: email,
        PasswordHash: password,
      });
      if(response.status === 200){
        setErrorMessage(response.data);
      }
      if (response.status === 201) {
        // User created successfully
        setErrorMessage('User created successfully');
        localStorage.setItem('isLoggedIn', true);
        console.log(response.data);
        localStorage.setItem('user', JSON.stringify(response.data[0]));
        window.open('http://localhost:5173',"_self");
      }
    } catch (error) {
      // Handle error responses from the server
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data);
      } else {
        setErrorMessage('An error occurred. Please try again later.');
      }
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      setBgColor('#f5f5f5');
    } else {
      setBgColor('#222222');
    }
  };

  return (
    <div style={{ backgroundColor: bgcolor }}>
      <div className={`signup-form ${darkMode ? 'dark-mode' : ''} `}> {/* Add dark mode class */}
        <div className="ModeButton">

        {
          darkMode
          ? <label className='checkbox-Text'>Dark Mode</label>
          : <label className='checkbox-Text'>Light Mode</label>
        }
         <input onClick={toggleDarkMode} type="checkbox" class="checkbox" id="checkbox"/>
          <label for="checkbox" class="checkbox-label">
          <i class="fas fa-moon"></i>
         <i class="fas fa-sun"></i>
          <span class="ball"></span>
           </label>
        
        </div>
        <h2>Sign Up</h2>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

        {/* Rest of the code */}
        <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder='Username'
          value={username}
          required
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="email"
          placeholder='Email'
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          />

        <input
          type="password"
          placeholder='Password'
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          />
        <input
          type="password"
          placeholder='Confirm Password'
          value={confirmPassword}
          required
          onChange={(e) => setConfirmPassword(e.target.value)}
          />

        <button type='submit'>Sign Up</button>

          </form>
       <p>If you are already registered? <a href='/signin'>Sign In</a></p>
        
        
        
      </div>
    </div>
  );
};

export default SignUp;
