import React,{useEffect,useState} from 'react'
import Head from './header';
import axios from 'axios'
import {AuthContext} from './AuthContext'
function Tickets() {
  //const [count, setCount] = useState(0)
  const [ticksM,setTicksM] = useState([]);
  const [ticksA,setTicksA] = useState([]);
  const [ticksE,setTicksE] = useState([]);
  const [ticksTou,setTicksTou] = useState([]);
  const [ticksB,setTicksB]= useState([]);
  const [ticksT,setTicksT] = useState([]);
  const [ticksC,setTicksC] = useState([]);
  const [delTick,setTick] = useState('');
  const auth=React.useContext(AuthContext);
  useEffect(()=>{
    fetch('http://localhost:5172/TicketsM')
    .then(res=> res.json())
    .then(ticksM =>setTicksM(ticksM))
    .catch(err=>console.log(err));
  },[]);

  useEffect(()=>{
    fetch('http://localhost:5172/TicketsB')
    .then(res=> res.json())
    .then(ticksB =>setTicksB(ticksB))
    .catch(err=>console.log(err));
  },[]);

  useEffect(()=>{
    fetch('http://localhost:5172/TicketsC')
    .then(res=> res.json())
    .then(ticksC =>setTicksC(ticksC))
    .catch(err=>console.log(err));
  },[]);
  useEffect(()=>{
    fetch('http://localhost:5172/TicketsT')
    .then(res=> res.json())
    .then(ticksT =>setTicksT(ticksT))
    .catch(err=>console.log(err));
  },[]);

  useEffect(()=>{
    fetch('http://localhost:5172/TicketsTou')
    .then(res=> res.json())
    .then(ticksTou =>setTicksTou(ticksTou))
    .catch(err=>console.log(err));
  },[]);
  useEffect(()=>{
    fetch('http://localhost:5172/TicketsE')
    .then(res=> res.json())
    .then(ticksE =>setTicksE(ticksE))
    .catch(err=>console.log(err));
  },[]);
  useEffect(()=>{
    fetch('http://localhost:5172/TicketsA')
    .then(res=> res.json())
    .then(ticksA =>setTicksA(ticksA))
    .catch(err=>console.log(err));
  },[]);

  const handleRemove = async () => {
    if(delEmail !== ''){
    try {
      const response = await axios.post('http://localhost:5172/removeTicket', {
        Email: delEmail,
      });
      if (response.status === 200) {
        alert('Ticket Deleted');
        window.location.reload();
      }
      else{
        alert('Ticket Not Deleted');
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
        <h2>Tickets</h2>
        <table style={{
        borderCollapse: 'collapse',
        width: '50%',
        margin: '0 auto',
        border: '1px solid #333',

      }}>
          <thead style={{ 
          backgroundColor: 'lightgray',
          }}>
            <th>TicketId</th>
            <th>TicketType</th>
            <th>TicketTitle</th>
            <th>No Of Tickets</th>
          </thead>
          <tbody>
          {ticksM.map(d => {
            
              return(
              <tr>
                <td>{d.TicketId}</td>
                <td>Movie</td>
                <td>{d.Title}</td>
                <td>{d.seats}</td>
                </tr>
          )})
        }
         {ticksC.map(d => {
            
            return(
            <tr>
              <td>{d.ticket_ID}</td>
              <td>Car</td>
              <td>Buggati</td>
              <td>1</td>
              </tr>
        )})
      }
       {ticksB.map(d => {
            
            return(
            <tr>
              <td>{d.TicketId}</td>
              <td>Bus</td>
              <td>{d.BusName}</td>
              <td>{d.NoOfPassengers}</td>
              </tr>
        )})
      }
       {ticksT.map(d => {
            
            return(
            <tr>
              <td>{d.TicketId}</td>
              <td>Train</td>
              <td>{d.BusName}</td>
              <td>{d.NoOfPassengers}</td>
              </tr>
        )})
      }
            </tbody>
        </table>
          
      </div>
          </>     
  )
}

export default Tickets
