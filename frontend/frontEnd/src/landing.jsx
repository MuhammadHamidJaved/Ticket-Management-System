import React,{useEffect,useState} from 'react'
import './tourStyle.css'
import Head from './header';


function Landing() {
    
       
    return (
        <div>
           <Head />
            <main className='landinigMain'>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '98.5vw',
                    height: '100vh',
                    margin: 'auto',
                    
                }}>
                    <div style={{
                        position: 'absolute',
                        top: '20%',
                        left: '10%',
                        color: 'black',
                    }}>
                        <h2>HAMDAN AZIZ</h2>
                        <h2>SALMAN MEHMOOD</h2>
                        <h2>HAMID JAVED</h2>
                        <h2>MAHEEN NADEEM</h2>
                    </div>
                    <img style={{
                        margin: 'auto',
                    }} width={'100%'} height={'100%'} src="https://png.pngtree.com/thumb_back/fw800/background/20231002/pngtree-enhanced-travel-experience-book-airline-tickets-online-with-airplane-and-calendar-image_13550192.png" alt="Image" />
                </div>
            </main>
            <footer style={{
                backgroundColor: 'lightsalmon'
            }}>
                <h2>BookEASE</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, magni possimus? Nemo ut rem maiores
                    dolores eius natus voluptatibus dolorem nulla, atque expedita similique porro, repellat perferendis
                    voluptatum deserunt repellendus?</p>
            </footer>
            
        </div>
    );
}

export default Landing;