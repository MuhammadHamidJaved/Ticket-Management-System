import {React,useContext,useEffect,useState} from 'react';
import Head from './header';
import './transport.css';
import {AuthContext} from './AuthContext';
import axios from 'axios';
function Bus() {
  
 // console.log(user);

   // console.log(name);
   const [buyername, setBuyerName] = useState('');
    const [contact, setContact] = useState('');
    const [busname, setBusName] = useState('');
    const [tickettype, setTicketType] = useState('');
    const [srcfrom, setSrcFrom] = useState('');
    const [destto, setDestTo] = useState('');
    const [traveldate, setTravelDate] = useState('');
    const [totalseats, setTotalSeats] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [email, setEmail] = useState('');
    
   
      const auth = useContext(AuthContext);
     
     // const {name,email} = auth.user;
      //console.log(auth.user);
    const handleSubmit = async (e) => {
        e.preventDefault();
        handleTickets();
      }
      const handleTickets = async () => {
        //console.log(traveldate);
        try {
        const response = await axios.post('http://localhost:5172/bus', {
          Buyer: buyername,
          Email: email,
          Contact: contact,
          BusName: busname,
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
          <main class="busMain">
        <div class="image-container1">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL1-PAvC7AWEbrYqHyg_dmdVxOLVPtHd_I-w&usqp=CAU" height = "240px"/>
           <br/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Arriva_the_Shires_3111_%28Alexander_Dennis_Enviro200_MMC%29_YX17_NMO_%2835863136164%29.jpg/800px-Arriva_the_Shires_3111_%28Alexander_Dennis_Enviro200_MMC%29_YX17_NMO_%2835863136164%29.jpg"height = "250px"/>
            <br/>
            <img src="data:image/jpeg;base64,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"height = "310px"/>
        </div>
        <div> 
          
    <form class="transport-Form" onSubmit={handleSubmit}>
        <h1 class="centre"> 
            <b> Book Bus Ticket </b>
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
            <label for="inputVehicle">Choose Bus </label>
            <select value={busname} onChange={(e)=>setBusName(e.target.value)}>
              <option>select</option>
              <option> Faisal Movers </option>
              <option> Rajpoot Travels </option>
              <option>Sky Ways</option>
              <option> Daewoo </option>
              <option>Niazi Travels</option>
          </select>

        </div>
        <br/>

        <div class="form-group">
          <label for="inputVehicle">Ticket Type </label>
          <select value={tickettype} onChange={(e)=>setTicketType(e.target.value)}>
            <option>select</option>
            <option> Economy </option>
            <option> Business Class </option>
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
        <br />
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
        <br/>
        <div class="form-group">
          <label for="inputPassengers">NumberofPassengers</label>
          <input type="number" class="form-control" id="inputPassengers" min="1" 
          value={totalseats} onChange={(e)=>setTotalSeats(e.target.value)} required />
        </div>
        <br/>
        {auth.isLoggedIn? <button type="submit" class="btn btn-primary btn-block">Book Tickets</button>:null}
        <br/>
      </form>
    </div>
    
      <br/>
      <div class="image-container1">
        <img src="data:image/jpeg;base64,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" height = "240px"/>
       <br/>
        <img src="https://i0.wp.com/pkbuses.com/wp-content/uploads/2023/06/rajput-travels-lahore-to-multan-new-bus-jpg.webp?fit=800%2C450&ssl=1"height = "250px"/>
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

export default Bus;