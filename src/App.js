//import './App.css';
import axios from 'axios';
import Nav from './Nav';
import LandingPage from './LandingPage';
import Gallery from './Gallery';
import Thanks from './Thanks';
import BookAppointment from './BookAppointment';
import ProductDetails from './ProductDetails';
import { styleGallery } from './product_data';

import './styles/salcss.css';
import {BrowserRouter as Router, Link,Route,Routes,useParams} from 'react-router-dom';
import React,{ useState,useEffect,useReducer } from 'react';
import Appointments from './Appointments';



//Create context to pass values accross the App
export const appointmentContext=React.createContext();
//Create Initial data state for appointments
const initialAppointmentState=[];



function App() {

  const [products, setProducts] = useState([]);

//fuction to receive data from api
const getProducts= async () =>{
  try{
    /* const res= await axios.get('https://nike-products.p.rapidapi.com/shoes',
      {
headers: {
  'x-rapidapi-host': 'nike-products.p.rapidapi.com',
  'x-rapidapi-key': 'c4ce590a15msh59e828e969b2113p1aab4cjsnb2a277ea019a'
}
} );*/
      console.log(styleGallery);
      setProducts(styleGallery);
      //console.log(res.data)
     //return await res.data;

  }catch(e){
      console.log(e);
  }
  
}

//Appointment State
const [appointment,setAppointment]=useState([]);
//Add appointment 


//Load products when app starts
useEffect(() => {
getProducts();

}, [])

//Create reducer function for appointment state management 
function appointmentReducer(state,action) {
  switch (action.type) {
    case 'addAppointment':
      console.log([...state,action.payload])
      return [...state,action.payload] ;
    default:
      console.log([state])
      return 
  }
}

const [state, dispatch] = useReducer(appointmentReducer, initialAppointmentState)

  return (
   < appointmentContext.Provider value={{state,dispatch}}>
    <Router>
      <div className="page-wrapper">
     <Nav />
     <Routes>
       <Route path='/' element={<LandingPage />} />
       <Route exact path='/gallery'  element={<Gallery allProduct={products} />} />
       <Route path='/gallery/:id' element={<ProductDetails  allProduct={products} />} /> 
       <Route path='/appointment' element={<BookAppointment appointments={appointment}  />} />
       <Route path='/appointments' element={<Appointments />} />
       <Route path='/thanks' element={<Thanks  />} />
   
     </Routes>
    </div>
    </Router>
   </appointmentContext.Provider>
 
  );
}

export default App;
