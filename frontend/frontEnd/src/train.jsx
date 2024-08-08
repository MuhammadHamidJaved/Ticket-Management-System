import React from 'react';
import Head from './header.jsx';
import './transport.css';
import axios from 'axios';
import { useState } from 'react';
import { AuthContext } from './AuthContext.jsx';
function Train() {
  const auth = React.useContext(AuthContext);
  const [buyername, setBuyerName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [trainname, setTrainName] = useState('');
  const [tickettype, setTicketType] = useState('');
  const [srcfrom, setSrcFrom] = useState('');
  const [destto, setDestTo] = useState('');
  const [traveldate, setTravelDate] = useState('');
  const [totalseats, setTotalSeats] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleTickets();
  }
  const handleTickets = async () => {
    //console.log(traveldate);
    try {
    const response = await axios.post('http://localhost:5172/train', {
      Buyer: buyername,
      Email: email,
      Contact: contact,
      TrainName: trainname,
      TicketType: tickettype,
      SrcFrom: srcfrom,
      DestTo: destto,
      TravelDate: traveldate,
      TotalSeats: totalseats,
      UserId: auth.user.UserID
    });
    if (response.status === 201) {
      // User created successfully
      setErrorMessage('Ticket Booked Successfully');
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

    return (
        <div>
          <Head />
            <main>
             
        <div class="image-container1">
            <img src="https://i.brecorder.com/primary/2022/12/6396584e9dde1.jpg" height = "300px"/>
            <br/>
            <img src="https://www.timeforkids.com/wp-content/uploads/2020/02/feature-cover_-train-k1.jpg"height = "300px"/>
            <br/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/50/%D0%9F%D0%BE%D0%B5%D0%B7%D0%B4_%D0%BD%D0%B0_%D1%84%D0%BE%D0%BD%D0%B5_%D0%B3%D0%BE%D1%80%D1%8B_%D0%A8%D0%B0%D1%82%D1%80%D0%B8%D1%89%D0%B5._%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C.jpg"height = "280px"/>
        </div>
        <div>
    <form class="transport-Form" onSubmit={handleSubmit}>
        <h1 class="centre"> 
            <b> Book Train Ticket </b> 
            {
              errorMessage && <p style={{color: 'red'}}> {errorMessage} </p>
            }
        </h1>
        <div class="form-group">
          <label for="inputName">Name</label>
          <input type="text" class="form-control" id="inputName" placeholder="Enter Name" 
          value={buyername} onChange={(e)=>setBuyerName(e.target.value)} required />
        </div>
        <br/>
        <div class="form-group">
          <label for="inputContact">Contact</label>
          <input type="text" class="form-control" id="inputContact" placeholder="Enter Phone Number"
          value={contact} onChange={(e)=>setContact(e.target.value)} />
        </div>
        <br/>
        <div class="form-group">
          <label for="inputEmail">Email</label>
          <input type="email" class="form-control" id="inputEmail" placeholder="Enter Email"
          value={email} onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <br/>
        <div class="form-group">
            <label for="inputVehicle">Choose Train </label>
            <select value={trainname} onChange={(e)=>setTrainName(e.target.value)}> 
              <option>select</option>
              <option>Jinnah Express </option>
              <option> Karachi Express </option>
              <option>Kohat Express</option>
              <option> Karakoram Express </option>
          </select>

        </div>
        <br/>

        <div class="form-group">
          <label for="inputVehicle">Ticket Type </label>
          <select value={tickettype} onChange={(e)=>setTicketType(e.target.value)}>
            <option>select</option>
            <option> Economy </option>
            <option> Non-AC  </option>
            <option>First Class</option>
        </select>
       <br/>
       <br/>

        </div>

        <div class="form-group">
          <label for="inputFrom">From</label>
          <input type="text" class="form-control" id="inputFrom" placeholder="Enter departure city"
           value={srcfrom} onChange={(e)=>setSrcFrom(e.target.value)} required />
        </div>
        <br/>
        <div class="form-group">
          <label for="inputTo">To</label>
          <input type="text" class="form-control" id="inputTo" placeholder="Enter destination city"
           value={destto} onChange={(e)=>setDestTo(e.target.value)} required />
        </div>
        <br/>
        <div class="form-group">
          <label for="inputDate">Date of Travel</label>
          <input type="date" class="form-control" id="inputDate" 
            value={traveldate} onChange={(e)=>setTravelDate(e.target.value)} required />
        </div>
        <br />
        <div class="form-group">
          <label for="inputPassengers">NumberofPassengers</label>
          <input type="number" class="form-control" id="inputPassengers" min="1" 
            value={totalseats} onChange={(e)=>setTotalSeats(e.target.value)} required />
        </div>
        <br/>
        {auth.isLoggedIn?<button type="submit" class="btn btn-primary btn-block">Book Tickets</button>:null}
      </form>
    </div>
    <div class="image-container1">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR0M6OsoZpoks7VNGKpcx6tG15s3ZmC3nKNg&usqp=CAU" height = "300px"/>
        <br/>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuVfFJ4qt3dqwvsruyI5U2qEPnyN65g7iyQw&usqp=CAU"height = "280px"/>
        <br/>
        </div>
    </main>
    <footer>
        <br/>
    <h4>
        <b> BOOK TRANSPORT TICKETS ONLINE</b>
    </h4>
   <p>
    "Book hassle-free bus and transport tickets online through our user-friendly platform. Simply select your departure and destination locations, choose your preferred date and time, and browse through a variety of available options. With secure payment methods and instant confirmation, traveling has never been easier. Enjoy the convenience of managing your bookings anytime, anywhere, and embark on your journey with peace of mind."
   </p>
   <br/>
   <br/>
   <h4>
    BUYING METHODS
   </h4>
   <p>
    Bookme offers different methods of payment to buy event tickets online. Some of the methods to pay for event tickets are mentioned below:
    <ul>
        <li> JazzCash </li>
        <li> EasyPaisa </li>
        <li> Credit?Debit card </li>
    </ul>
    <br/>
</p>
   </footer>
        </div>
    );
}

export default Train;