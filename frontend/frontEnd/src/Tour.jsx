import React,{useEffect,useState} from 'react'
import './tourStyle.css'
import axios from 'axios'
import {AuthContext} from './AuthContext'
import Head from './header';


function Tour() {
    
    const [tours,setTour] = useState([]);
    const [search1, setSearch] = useState('All');
    const auth=React.useContext(AuthContext);

    useEffect(()=>{ handleSearch(); },[]);
    const handleText = (e) => {
        setSearch(e.target.value);
        
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
    };

    const handleSearch = async () => {
        fetch(`http://localhost:5172/tours`)
        .then((response) => response.json())
        .then((json) =>{
            if(search1 === "All"){
                setTour(json);
            }
            else{
                const result = json.filter(m => m.tour_type.toLowerCase().includes(search1.toLowerCase()));
            setTour(result);
            }
        });
    };
    
    
    
    const [price,setPrice] = useState(0);
    function BookingApp({title,className}){
        const [type,setType] = useState('0');
        const [count,setCount] = useState(0);
        const IncCount = () =>{
            setCount(count+1);
        }
        const DecCount = () =>{
            setCount(count>0?count-1:0);
        }
        const HandleBooking = async() =>{
           
           
            try{
                const response = await axios.post('http://localhost:5172/tourTick',{
                   Title: title,   
                   Price: price,
                   Type: type,
                   Seats :count,
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
            
           <div>
           {auth.isLoggedIn?<button  style={{
                backgroundColor: 'lightgray',
                color: 'black',
                padding: '5px 20px',
                border: 'none',
                borderRadius: '4px',
                margin: '10px',
           }}onClick={ShowMenu}>Book Me</button>:null}
            <div className={className} style={{display:disp}}>
            <select value={type} onChange={(e)=>{setType(e.target.value)
                 if(type === "With Meal"){
                    setPrice(count*2000);
                }
                else if(type === "Without Meal"){
                    setPrice(count*800);
                }
            }}>
                <option >Select Type</option>
                <option >With Meal</option>
                <option >Without Meal</option>
            </select>
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
            <main className='tourMain'>
            <form className='moviesSearchForm'  onSubmit={handleSubmit}>
    <select
    value={search1}
    onChange={handleText}>
            <option value="All">Select Touring Area</option>
            <option value="Uphill">UP Hill</option>
            <option value="Downhill">Down Hill</option>
        </select>
<button type="submit" onClick={handleSearch}>Search</button>
</form>
                <div className="container">
                 
    
                    {tours.map((d) => (
                        
                        <>
                        <div className='box'>
                                <img src={d.link} />
                                <h2>{d.title}</h2>
                         <BookingApp title={d.title} className={'bookingBox tourBoxApp'}/>
                        </div>
                        </>    
                    ))}

                </div>
            </main>
            <footer>
                <h2>BookEASE</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, magni possimus? Nemo ut rem maiores
                    dolores eius natus voluptatibus dolorem nulla, atque expedita similique porro, repellat perferendis
                    voluptatum deserunt repellendus?</p>
            </footer>
            
        </div>
    );
}

export default Tour;