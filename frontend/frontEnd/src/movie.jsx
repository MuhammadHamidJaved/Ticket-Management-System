import React,{useEffect,useState} from 'react'
import Head from './header.jsx'
import './movies.css';
import { AuthContext } from './AuthContext.jsx';
import axios from 'axios';

function Movie() {

    const [movies,setMovies] = useState([]);
    const [search1, setSearch] = useState('All');
    const auth=React.useContext(AuthContext);

    useEffect(()=>{
        handleSearch();
     },[]);
    const handleText = (e) => {
        setSearch(e.target.value);
        handleSearch();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
    };

    const handleSearch = async () => {
        fetch(`http://localhost:5172/movies`)
        .then((response) => response.json())
        .then((json) =>{
            if(search1 === "All"){
                setMovies(json);
            }
            else{
                const result = json.filter(m => m.theaterName.toLowerCase().includes(search1.toLowerCase()));
            setMovies(result);
            }
        });
    };
    
    
    
    const [price,setPrice] = useState(0);
    function BookingApp({title,genre,className}){
        const [seatType,setSeatType] = useState('0');
        const [count,setCount] = useState(0);
        const IncCount = () =>{
            setCount(count+1);
        }
        const DecCount = () =>{
            setCount(count>0?count-1:0);
        }
        const HandleBooking = async() =>{
            if(seatType === "Platinum"){
                setPrice(count*800);
            }
            else if(seatType === "Gold"){
                setPrice(count*500);
            }
            else if(seatType === "Silver"){
                setPrice(count*350);
            }
            try{
                const response = await axios.post('http://localhost:5172/movieTick',{
                   Title: title,
                   Genre: genre,
                   Price: price,
                   SeatType: seatType,
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
           {auth.isLoggedIn?<button style={{
                backgroundColor: 'lightgray',
                color: 'black',
                padding: '5px 20px',
                border: 'none',
                borderRadius: '4px',
                margin: '10px',
           }} onClick={ShowMenu}>Book Me</button>:null}
            <div className={className} style={{display:disp}}>
            <select value={seatType} onChange={(e)=>setSeatType(e.target.value)}>
                <option >Select Seat Type</option>
                <option >Platinum</option>
                <option >Gold</option>
                <option >Silver</option>
            </select>
            <button onClick={DecCount}>-</button>
            <input type="number" value={count} onChange={(e)=>setCount(e.target.value)} min='0' />
            <button onClick={IncCount}>+</button>
            <button className='BookButton' onClick={ HandleBooking}>Book</button>
            </div>
           </div>
       
        )
    }    
    const [link,setLink] = useState('');
    const [genre,setGenre] = useState('');
    const [title,setTitle] = useState('');
    const [theaterName,setTheaterName] = useState('');
    const HandleMovieInsert = async() =>{
    
        try{
        console.log(link,genre,title,theaterName);
        const response = await axios.post('http://localhost:5172/moviesI',{
            Title: title,
            Genre: genre,
            Link: link,
            TheaterName: theaterName
        });
        if(response.status === 201){
            alert('Movie Added Successfully');
        }
        else{
            alert('Movie Not Added.');
        }

    }catch(error){
        if(error.response && error.response.data){
            alert(error.response.data);
        }
        else{
            alert('An error occurred. Please try again later.');
        }
    
    }
    }
    
   
    const [disp2,setDisplay2] =useState('none');

    const ShowMenu2 = () =>{
        if(disp2 === 'none')
          setDisplay2('block');
        else
          setDisplay2('none');
      }



    return (
        <div>
            <Head />
            <main>
                <br />
                <hr />
               
                <form className='moviesSearchForm' onSubmit={handleSubmit}>

                <select
                    value={search1}
                    onChange={handleText}>
                            <option value="All">Select Theater</option>
                            <option value="imax">IMAX</option>
                            <option value="fox">FOX</option>
                            <option value="national">NATIONAL</option>
                            <option value="cinepax">CINEPAX</option>
                        </select>
                <button type="submit" onClick={handleSearch}>Search</button>
                {auth.user&&  auth.user.IsAdmin? <button  onClick={ShowMenu2}>ADD NEW MOVIE</button>:''}
                    {
                        auth.user&&  auth.user.IsAdmin? 
                        <div className='moviesForm' style={{display:disp2}}>
                        <input type="text" placeholder="Title" value={title} onChange={(e)=>setTitle(e.target.value)} required/>
                        <input type="text" placeholder="Genre" value={genre} onChange={(e)=>setGenre(e.target.value)} required/>
                        <input type="text" placeholder="Link" value={link} onChange={(e)=>setLink(e.target.value)} required/>
                        <input type="text" placeholder="Theater Name" value={theaterName} onChange={(e)=>setTheaterName(e.target.value)} required/>
                        <button onClick={HandleMovieInsert}>Add Movie</button>
                        </div>:null
                       

                    }
                </form>
                
                <h3 className="centre">
                    <b> FICTION </b>
                </h3>
                <div className="images">
                    {
                        movies.map(m=>{
                            if(m.genre.toLowerCase() === "sci-fi"){
                            
                            return(
                               
                                    <div className="post">
                                    <img src={m.link} height="300px" />
                                    <h4>{m.title}</h4>
                                     <BookingApp title={m.title} genre={m.genre} className='bookingBox'/>
                                     
                                    
                                    </div>
                                
                                
                            );
                        }
                        })
                    }
                </div>
                <hr />

                <h3 className="centre">
                    <b> ROMANTIC </b>
                </h3>

                <div className="images">
                    {
                        movies.map(m=>{
                            if(m.genre === "Romance"){
                            return(
                               
                                    <div className="post">
                                    <img src={m.link} height="300px" />
                                    <h4>{m.title}</h4>
                                    <BookingApp title={m.title} genre={m.genre} className='bookingBox'/>
                                    </div>
                            );
                        }
                        })
                    }
                </div>

                <hr />
                <h3 className="centre">
                    <b> ACTION </b>
                </h3>
                <div className="images">
                    {
                        movies.map(m=>{
                            if(m.genre === "Action"){
                            return(
                               
                                    <div className="post">
                                    <img src={m.link} height="300px" />
                                    <h4>{m.title}</h4>
                                    <BookingApp title={m.title} genre={m.genre} className='bookingBox'/>
                                    </div>
                            );
                        }
                        })
                    }
                </div>

                <hr />
                <h3 className="centre">
                    <b> ADVENTURE </b>
                </h3>
                <div className="images">
                   
                    {
                        movies.map(m=>{
                            if(m.genre === "Adventure"){
                            return(
                               
                                    <div className="post">
                                    <img src={m.link} height="300px" />
                                    <h4>{m.title}</h4>
                                    <BookingApp title={m.title} genre={m.genre} className='bookingBox'/>
                                    </div>
                            );
                        }
                        })
                    }
                </div>
            </main>
            <hr />
            <footer>
                <br />
                <h3>
                    <b> BOOK MOVIE TICKETS ONLINE...</b>
                </h3>
                <p>
                    Tickethub provides online movie ticket booking services for numerous cinemas across major cities of
                    Pakistan. With Tickethub, you have the convenience of checking movie schedules at various theaters,
                    reviewing live seating arrangements to choose your preferred seats, and even watching movie trailers
                    directly on our platform. Say goodbye to long queues and the fear of missing out on your favorite movie;
                    Tickethub ensures you never miss a show, allowing you to enjoy hassle-free movie experiences.
                </p>
                <br />
                <br />
                <h3>
                    BUYING METHODS...
                </h3>
                <p>
                    Bookme offers different methods of payment to buy event tickets online. Some of the methods to pay for
                    event
                    tickets are mentioned below:
                    <ul>
                        <li> JazzCash </li>
                        <li> EasyPaisa </li>
                        <li> Credit?Debit card </li>
                    </ul>
                    <br />
                </p>
            </footer>
        </div>
    );
}

export default Movie;