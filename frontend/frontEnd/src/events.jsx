import React,{useEffect} from 'react';
import './events.css'
import Head from './header.jsx'
import { useState } from 'react';
import axios from 'axios';
import { AuthContext } from './AuthContext.jsx';
function Event() {

    const [events,setEvents] = useState([]);
    const [search1, setSearch] = useState('All');
    const auth=React.useContext(AuthContext);
    
    useEffect(()=>{
        handleSearch();
     },[]);

    const handleText = (e) => {
        setSearch(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
    };

    const handleSearch = async () => {
        fetch(`http://localhost:5172/events`)
        .then((response) => response.json())
        .then((json) =>{
            if(search1 === "All"){
                setEvents(json);
            }
            else{
                const result = json.filter(m => m.event_location.toLowerCase().includes(search1.toLowerCase()));
            setEvents(result);
            }
        });
    };
    
    
    function BookingApp({title,location,className}){
       
        const [count,setCount] = useState(0);
        const IncCount = () =>{
            setCount(count+1);
        }
        const DecCount = () =>{
            setCount(count>0?count-1:0);
           
        }
        const HandleBooking = async() =>{
            
            try{
                
                const response = await axios.post('http://localhost:5172/eventTick',{
                   Title: title,
                   Location: location,
                   Price: (count*1000),
                   Tickets :count,
                   userID: auth.user.UserID
                });
                if(response.status === 201){
                    alert('Ticket Booked Successfully');
                }
            }
            catch(error){
                if(error.response && error.response.data){
                    alert(error.response.data);
                }
                else{
                    alert('An error occurred. Please try again later.');
                }
            }
        }
        const [disp,setDisplay] = useState('none');
        const ShowMenu = () =>{
          if(disp === 'none')
            setDisplay('block');
          else
            setDisplay('none');
        }
        return(
            
           <div >
           {auth.isLoggedIn?<button style={{
                backgroundColor: 'lightgray',
                color: 'black',
                padding: '5px 20px',
                border: 'none',
                borderRadius: '4px',
                margin: '10px',
           }} onClick={ShowMenu}>Book Me</button>:null}
            <div className={className} style={{display:disp}}>
            <button onClick={DecCount}>-</button>
            <input type="number" value={count} onChange={(e)=>setCount(e.target.value)} min='0' />
            <button onClick={IncCount}>+</button>
            <button className='BookButton' onClick={ HandleBooking}>Book</button>
            </div>
           </div>
       
        )
    }    

    return (
        <div>
            <Head />
            <main>
                <div>
                    <br />
                    <br />
                    <form className='moviesSearchForm' onSubmit={handleSubmit}>

                    
                    <select name="city" value={search1} onChange={handleText}>
                        <option value="All">Select City</option>
                        <option value="Lahore">Lahore</option>
                        <option value="Karachi">Karachi</option>
                        <option value="Islamabad">Islamabad</option>
                        <option value="Rawalpindi">Rawalpindi</option>
                        <option value="Pir Chinasi">Pir Chinasi</option>
                    </select>
                    <button onClick={handleSearch}>Search</button>
                    </form>
                </div>
                <br />

                <hr />
                <div className="posters">
                    <br />
                    {
                        events.map((event) => (
                            <div className="post2">
                                <img src={event.link}
                                    height="400px" width="400px" />
                                <h3>{event.title}</h3>
                                <BookingApp title={event.title} location={event.event_location} className="bookingBox" />
                            </div>
                        ))
                    }
                </div>
                
            </main>
                    <hr />
                    <footer>
                        <br />
                        <h4>
                            <b> BOOK MOVIE TICKETS ONLINE...</b>
                        </h4>
                        <p >
                            Tickethub provides online movie ticket booking services for numerous cinemas across major cities of
                            Pakistan. With Tickethub, you have the convenience of checking movie schedules at various theaters,
                            reviewing live seating arrangements to choose your preferred seats, and even watching movie trailers
                            directly on our platform. Say goodbye to long queues and the fear of missing out on your favorite movie;
                            Tickethub ensures you never miss a show, allowing you to enjoy hassle-free movie experiences.
                        </p>
                        <h4>
                            BUYING METHODS...
                        </h4>
                        <p>
                            Bookme offers different methods of payment to buy event tickets online. Some of the methods to pay for event
                            tickets are mentioned below:
                            <ul>
                                <li> JazzCash </li>
                                <li> EasyPaisa </li>
                                <li> Credit?Debit card </li>
                            </ul>
                        </p>
                    </footer>
                </div>
                );
}

                export default Event;