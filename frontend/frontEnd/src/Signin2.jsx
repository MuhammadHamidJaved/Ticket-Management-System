import React, { useContext, useState } from 'react';
import axios from 'axios';
import './Signup.css';


//import Bus from './bus.jsx';
//import MyContext from './UserProvider.jsx';

//const [user,setUser] = useState([]);

function SignIn2() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [darkMode, setDarkMode] = useState(false); // Add dark mode state
    const [bgcolor, setBgColor] = useState('white'); // Add background color state
   // const [user,setUser] = useState([]);
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSignIn();
        // Add your login logic here
    };

    const handleSignIn = async () => {
        try {
          const response = await axios.post('http://localhost:5172/signin', {
            Email: email,
            PasswordHash: password,
          });
          if (response.status === 200) {
            setErrorMessage('User not logged In');
            
          }
          else{
             localStorage.setItem('isLoggedIn', true);
              localStorage.setItem('user', JSON.stringify(response.data[0]));
            console.log(JSON.stringify(response.data[0]));
          setErrorMessage('User logged In successfully');
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

            <h1>Login</h1>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <form onSubmit={handleSubmit}>
                
                <input type="email" placeholder='Email' value={email} onChange={handleEmailChange}  required/>

               
                <input type="password" placeholder='Password' value={password} onChange={handlePasswordChange} required />

                <button type="submit" >Sign In</button>
            
            </form>
            <p>If you are not registered? <a href='/signup'>Sign Up</a></p>
            </div>
      
        </div>
    );
}

export default SignIn2;