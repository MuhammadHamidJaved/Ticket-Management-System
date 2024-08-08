import React,{useEffect,useState} from 'react'
import Head from './header';
import axios from 'axios'
import {AuthContext} from './AuthContext'
function App() {
  //const [count, setCount] = useState(0)
  const [users,setData] = useState([]);
  const [delEmail,setEmail] = useState('');
  const auth=React.useContext(AuthContext);
  useEffect(()=>{
    fetch('http://localhost:5172/users')
    .then(res=> res.json())
    .then(users =>setData(users))
    .catch(err=>console.log(err));
  },[]);

  const handleRemove = async () => {
    if(delEmail !== ''){
    try {
      const response = await axios.post('http://localhost:5172/removeUser', {
        Email: delEmail,
      });
      if (response.status === 200) {
        alert('User Deleted');
        window.location.reload();
      }
      else{
        alert('User Not Deleted');
      }
         
  }
  catch (error) {
    // Handle error responses from the server
    if (error.response && error.response.data) {
      alert(error.response.data);
    } else {
      alert('An error occurred. Please try again later.');
    }
  }
}
  };
  return ( 
    <>
    <Head/>
      <div style={{padding : "50px",display:'flex',flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      backgroundColor: '#f5f5f5',
      color: '#333',
      fontFamily: 'Arial, sans-serif',
      fontSize: '16px',
      lineHeight: '1.6',
      textAlign: 'center',
      margin: 'auto',
      height: '83vh',

      }}>
        <h2>Users</h2>
        <table style={{
        borderCollapse: 'collapse',
        width: '50%',
        margin: '0 auto',
        border: '1px solid #333',

      }}>
          <thead style={{ 
          backgroundColor: 'lightgray',
          }}>
            <th>Name</th>
            <th>Email</th>

            {
             auth.user &&
           (auth.user.IsAdmin === 1) ? <th>Edit</th> : null
              
            }
          </thead>
          <tbody>
          {users.map(d => {
            if(d.IsAdmin === 0) 
              return(
              <tr>
                <td>{d.Username}</td>
                <td>{d.Email}</td>
                {
             d.Email && auth.user && auth.user.IsAdmin === 1 ? <td><button onClick={
              ()=>{
                setEmail(d.Email);
                handleRemove();
               
              }
              }>Remove</button></td> : null
                }
        
              </tr>
          )})}
            </tbody>
        </table>
            <h2>Admin</h2>
        <table style={{
        borderCollapse: 'collapse',
        width: '50%',
        margin: '0 auto',
        border: '1px solid #333',

      }}>
          <thead style={{ 
          backgroundColor: 'lightgray',
          }}>
            <th>Name</th>
            <th>Email</th>
            
          </thead>
          <tbody>
          {users.map(d =>{
            if(d.IsAdmin === 1)
            return(
              <tr>
                <td>{d.Username}</td>
                <td>{d.Email }</td>
              </tr>
            )})}
            </tbody>
        </table>
      </div>
          </>     
  )
}

export default App
