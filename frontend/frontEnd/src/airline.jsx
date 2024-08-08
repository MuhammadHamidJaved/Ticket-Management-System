import React,{useState} from 'react';
import Head from './header'
import './airlineStyle.css';
import axios from 'axios';
import { AuthContext } from './AuthContext';
function Airline() {
    const [trip,setTrip] = useState('');
    const [dept,setDeparture] = useState('');
    const [arrival,setArrival] = useState('');
    const [seats,setSeats] = useState(1);
    const [seatType,setSeatType] = useState('Economy');
    const auth=React.useContext(AuthContext);

    const HandleSubmit = async() =>{
        try{
            const response = await axios.post('http://localhost:5172/airlineTick',{
                Trip: trip,
                Departure: dept,
                Arrival: arrival,
                Seats: seats,
                SeatType: seatType,
                userID: auth.user.UserID
            });
            if(response.status === 201){
                alert('Flight Booked Successfully');
            }
        }
        catch(err){
            alert('Error Booking Flight');
        }
       
    }
    return (
        <div className='airlineStyle'>
           <Head />
            <main >
                <div class="blue-box">
                    <h1 class="h1_flight">Search for Flights</h1>
                    <p> Find the best and most affordable flights across the globe</p>
                    <form class="flight_form" onSubmit={(e)=>{e.preventDefault();}}>
                        <input  type="radio" id="option1" name="options" value="OneWay" onClick={(e)=>setTrip(e.target.value)} />
                        <label className='radiobutton' for="option1">One Way</label>
                        <input  type="radio" id="option2" name="options" value="RoundTrip" onClick={(e)=>setTrip(e.target.value)} />
                        <label className='radiobutton' for="option2">Round Trip</label>
                        <input type="radio" id="option3" name="options" value="MultiCity" onClick={(e)=>setTrip(e.target.value)}/>
                        <label className='radiobutton' for="option3">Multi-City</label>
                        <br />
                        <br />
                        <div class="input-container">
                            <input type="text" placeholder="Departure" value={dept} onChange={(e)=>setDeparture(e.target.value)}/>
                            <label for="departureDate">Departure Date</label>
                            <input type="date" id="departureDate" name="departureDate" />
                            <input type="text" placeholder="Arrival" value={arrival} onChange={(e)=>setArrival(e.target.value)}/>
                            <br/>
                            <label for="quantity">Total Passengers:</label>
                            <input type="number" id="quantity" name="quantity" min="1" max="10" value={seats} onChange={(e)=>setSeats(e.target.value)}/>

                            <label for="Type">Seat Type:</label>

                            <select id="Type" name="Type" value={seatType} onChange={(e)=>setSeatType(e.target.value)}>
                                <option value="Economy">Economy</option>
                                <option value="Premium Economy">Premium Economy</option>
                                <option value="Business">Business</option>
                                <option value="First Class">First Class</option>
                            </select>
                            <br />
                            <br />
                            { auth.isLoggedIn?<button id="SearchButton" onClick={HandleSubmit}>Book Kr Oye</button>:null}

                        </div>

                        <br />
                        <br />
                    </form>
                </div>
                <br />


                <div class="FlightPartners">

                    <h1>Our Flight Partners</h1>
                    <p>Travel With the Best Flights in Pakistan</p>
                    <img src="https://logowik.com/content/uploads/images/976_emirates.jpg" alt="emiratesairline" id="emiratesairline" />
                    <img src="https://logodownload.org/wp-content/uploads/2019/10/saudia-logo-0.png" alt="saudiairline" id="saudiairline" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Pakistan_International_Airlines_Logo.svg" alt="pia" id="pia" />
                    <img src="https://1000logos.net/wp-content/uploads/2020/04/Etihad-Airways-Logo.png" alt="etihad" id="etihad" />
                    <img src="https://logolook.net/wp-content/uploads/2021/01/Qatar-Airways-Logo.png" alt="etihad" id="etihad" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/06/Skyteam_Logo_001.svg" alt="etihad" id="etihad" />

                </div>
            </main>
            <div class="WhyUseBookEase">
                <br />
                <h1>Why Use BookEase?</h1>
                <p>We provide the best deals in Pakistan</p>
                <ul>
                    <li>More For Less</li>
                    <br />
                    <li>Lowest Fares</li>
                    <br />
                    <li>Unlimited Options</li>
                </ul>
            </div>
        </div>
    );
}

export default Airline;