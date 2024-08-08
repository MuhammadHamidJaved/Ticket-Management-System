import React from 'react'
import ReactDOM from 'react-dom/client'
import Signup from './Signup.jsx'
import SignIn from './Signin2.jsx'
import Users from './App.jsx'
import Tour from './Tour.jsx'
import Movie from './movie.jsx'
import Event from './events.jsx'
import Bus from './bus.jsx'
import Airline from './airline.jsx'
import Train from './train.jsx'
import CarRental from './carRental.jsx'
import Contact from './Contact.jsx'
import Home from './landing.jsx'
import Tick from './Tickets.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import {AuthProvider} from './AuthContext.jsx'

const route=createBrowserRouter([
    
  {path:"/signup", element:<Signup /> },
  {path:"/signin", element:<SignIn />},
  {path:"/", element:<Home />},
  {path:"/movie", element:<Movie />},
  {path:"/events", element:<Event />},
  {path:"/bus", element:<Bus />},
  {path:"/airline", element:<Airline />},
  {path:"/trains", element:<Train />},
  {path:"/tour", element:<Tour />},
  {path:"/carRental", element:<CarRental />},
  { path:"/users", element:<Users/>},
  {path:'/tickets', element: <Tick/>},
  { path:"/contact", element: <Contact />}

  
    
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={route} />
    </AuthProvider>
  </React.StrictMode>,

);

