import React, { useEffect } from 'react';
import Head from './header.jsx';
import './CarRentalStyle.css';
import image from './ride.png';
import { useState } from 'react';
import axios from 'axios';
import { AuthContext } from './AuthContext.jsx';
function CarRental() {
   // const data = [{title:'Bugatti', link:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJNODHJ5IglPQksnzRL-JqVFa5von0HrOqqMn_INRavg&s"},{title:'Bugatti', link:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJNODHJ5IglPQksnzRL-JqVFa5von0HrOqqMn_INRavg&s"},{title:'Bugatti', link:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJNODHJ5IglPQksnzRL-JqVFa5von0HrOqqMn_INRavg&s"}];
    
    const [Cars,setCars] = useState([]);
    const auth=React.useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:5172/cars`)
        .then((response) => response.json())
        .then((json) =>{
                setCars(json);
        });
    },[]);
    
    const [city,setCity] = useState('');
    const [pickDate, setPickDate] = useState('');
    const [DropDate, setDropDate] = useState('');
    const [title,setTitle] = useState('');
    
        const HandleBooking = async() =>{
            try{
                const response = await axios.post('http://localhost:5172/carsTick',{
                   City : city,
                   PickDate: pickDate,
                    DropDate: DropDate,
                   Price: 2000,
                   Car : title,
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
              setDisplay('flex');
            else
              setDisplay('none');
          }

    return (
        <div>
          <Head />
            <main class="carRen-main">
                <form onSubmit={(e)=>{e.preventDefault();}}>
                    <h1>
                        Search for Cars
                    </h1>
                    <h4>Find the best and most affordable cars</h4>
                    <div>
                        <label for="r1">Within_City<input id="r1" name="city" type="radio" /></label>
                        <label for="r2">OutSide_City<input id="r2" name="city" type="radio"/></label>
                    </div>
                    <select id="city" placeholder="City" aria-label="City" value={city} 
                    onChange={(e)=>setCity(e.target.value)}>
                        <option hidden="" value="">City</option>
                        <option value="14">Lahore</option>
                        <option value="16">Islamabad</option>
                        <option value="10">Multan</option>
                        <option value="6">Faisalabad</option>
                        <option value="15">Karachi</option>
                        <option value="8">Sargodha</option>
                        <option value="7">Sialkot</option>
                        <option value="5">Sahiwal</option>
                        <option value="11">Gujranwala</option>
                        <option value="13">Rahim-Yar-Khan</option>
                        <option value="9">Peshawar</option>
                        <option value="17">Jehlum</option>
                        <option value="18">Abbotabad</option>
                        <option value="19">Gujrat</option>
                        <option value="20">Sadiqabad</option>
                        <option value="22">Swat</option>
                        <option value="23">Mardan</option>
                        <option value="24">Mansehra</option>
                        <option value="25">Muzaffarabad</option>
                        <option value="26">Quetta</option>
                        <option value="27">Hyderabad</option>
                        <option value="28">Sukkur</option>
                    </select>
                    <label>PickUp Date</label>
                    <input id="pickupDate" type="date" placeholder='PickUp Date' value={pickDate} onChange={(e)=>setPickDate(e.target.value)}/>
                   
                    <label>DropOff Date</label>
                    <input id="DropOffDate" type="date" value={DropDate} onChange={(e)=>setDropDate(e.target.value)}/>
                    

                   {auth.isLoggedIn? <button type="submit" onClick={ShowMenu}>Search</button>:null}
                    
                </form>
                <div className='container' style={{display:disp}}>

                    {
                        Cars.map((d) => (
                            <div className='box '>
                                <img src={d.link} />
                                <h2>{d.title}</h2>
                                <button className="BoxButton" onClick={()=>{ 
                                    setTitle(d.title);
                                    HandleBooking();

                                }}>Bookme</button>
                            </div>
                        ))
                    }

                    </div>

                <div>
                    <br />
                    <div class="image-container">
                        <h2 >How to Rent a Car Online Through BookEase</h2>
                        <img src={image} alt="Your Image Description" />
                    </div>

                    <ol>
                        <li> Go to the car rental tab on Bookme website and mobile application. </li>
                        <li> Select your city. </li>
                        <li> Put in your pickup and drop off cities. </li>
                        <li> Select the car of your choice. </li>
                        <li> Put in your personal details and move to the payment options. </li>
                        <li> Select a suitable payment option. </li>
                        <li> Checkout and your car is on the way. </li>
                    </ol>
                    <br />
                </div>

                    <div class="CarRental">
                        <br />
                        <h1 >BookEase - Car Rental in Pakistan</h1>

                        <p>Car rental is one of the oldest businesses in the whole world as well as in Pakistan. Whether you’ve
                            traveled to an unfamiliar city, you are a foreigner, or just needed a replacement for your vehicle,
                            chances are you’ve had to rent a car at some point in your life.</p>
                        <p>In the old times, this whole process was being operated manually. Everything including documentations and
                            payments were manual but as the digitalization progressed, some of the car rental businesses shifted to
                            online services. But still there is the gap in online rent a car services because of agencies and middle
                            man shortcomings. </p>
                        <p>After unbeatable and remarkable success in the e-ticketing industry, BookEase has launched online rent a
                            car service in Pakistan to make this car rental an easy process in Pakistan. Currently this service is
                            live in a few cities of Pakistan and soon it will be operating in the whole country. Bookme offers this
                            service within the city as well as out of the city. Hence, it will be convenient for you even if you are
                            planning your trip out of your city</p>
                        <h3 >Car Rental in Lahore</h3>
                        <p>Lahore is one of the metropolitan cities in Pakistan and it attracts a large number of travelers both
                            local and international. With the famous old city and business hubs such as Ferozpur Road, the city is
                            Pakistan’s second biggest therefore for to ease commute intracity Bookme has launched their car rental
                            in Lahore for its residents and visitors. </p>
                        <h3 >Car Rental in Islamabad</h3>
                        <p>Islamabad, the capital city of Pakistan, has a large influx of foreign visitors. With Bookme’s car rental
                            in Islamabad you can visit the famous margalla hills or other popular spots not bothered by the hassle
                            of booking a car every time you step out of your hotel or guest house. Even for residents, the service
                            provides them with a comfortable ride to travel from inside and out of Islamabad. </p>
                        <h3 >Car Rental in Rawalpindi</h3>
                        <p>Rawalpindi is the neighboring city of Islamabad and the fourth largest city of Pakistan. With its close
                            proximity to Islamabad, Rawalpindi also receives a large number of tourists who want to see the old
                            temples and famous bazaars. Using Bookme’s car rental in Rawalpindi you can now book a comfortable ride
                            from your home to your desired destination at the most affordable rates. </p>
                        <h3 >Car Rental in Faisalabad</h3>
                        <p>Also known as the hub of Pakistan’s textile industry, the city receives a large number of businessmen
                            everyday. With existing infrastructure rapidly going out of date, Bookme has launched car rental in
                            Faisalabad to facilitate locals or visitors when it comes to booking a car. You can use this service to
                            book your desired car at the most affordable rates. </p>
                        <h3 >Car Rental in Gujranwala </h3>
                        <p>Based in the heart of Pakistan’s most populated province, Gujranwala is a city often visited by travelers
                            on their way to Northern Pakistan or by pilgrims visiting temples and shrines found near Gujranwala. Car
                            rental in Gujranwala provides locals and travelers with an affordable option to commute in Gujranwala
                            allowing them to have an experience free of any worries. </p>

                    </div>
            </main>
        </div>
    );
}

export default CarRental;