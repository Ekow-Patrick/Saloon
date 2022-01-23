import {useState,useContext} from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import {appointmentContext} from './App'

function ProductDetails(props) {

    

    //url History history
    const r_dirThanks=useNavigate();
    
  
    //confirmation Button State Change
    const [cAppointment,setCAppointment]=useState(false);

  

 //function to handle input change
const handleChange = (e) => {
    setAppointment_input(data=>({...data,[e.target.name]:e.target.value}))
    console.log(appointment_input);
    

}
//Ticket
const [ticket,setTicket]=useState({});

//appointment constext 
const {state,dispatch}=useContext(appointmentContext);

//handle form submission
const handleSubmit=(e)=>{
   // e.preventDefault();
   console.log("Happy Birthday");
      

      //add Appointment 
     // dispatch({type:'addAppointment',payload:ticket})
     // newUrl();
      

}

    const itemId=useParams().id;
const selectedProduct=props.allProduct[itemId];

console.log(selectedProduct);

  //Holds all inputs from form
 const [appointment_input,setAppointment_input] = useState({
        id:itemId,
        style_Image:selectedProduct.img,
        hair_style:selectedProduct.title,
 
 });
    //
    const process_order=(e)=>{
      
            e.preventDefault();
            setTicket(appointment_input);
           // console.log(appointment_input)
            console.log(ticket)
            setCAppointment(true)
    }

        const confirm_Order=()=>{
            <button onClick={()=>dispatch({type:'addAppointment',payload:ticket})
               
            } >Confirm Appointment</button>}
    

   
 


    return(
   <section>
        <div>
            <div className='appointment_card'>
                <div>
                    <img src={`http://localhost:3000/${selectedProduct.img}`} alt="" />
                </div>
                <div>
                    <h1>{selectedProduct.title}</h1>
                    <p className='price'>GHC<span>{selectedProduct.price}</span></p>
                    <p>Duration : <span>{selectedProduct.duration}</span></p>
                    <p>Available Colors : {selectedProduct.colors.map((color,index)=>{return <span key={index} style={{background:color,color:color,marginRight:'0.2rem'}}>{color}</span>})}</p>
                </div>
            </div>
            <div className='page_header' style={{marginTop: '2rem'}} >
                <h3>APPOINTMENT DETAILS</h3>
                <p>Please make sure all fields are filled</p>
            </div>
            <hr style={{width:'50%',marginRight:'auto',marginLeft:'auto'}} />
            <div className="gal_appointment">
                <form action="" onSubmit={handleSubmit}>
                    <div>
                <div className='frm_grp'>
                    <div>
                        <label>Customer Name:</label> 
                    </div>
                    <div>
                         <input type="text" name="customer_name"  onChange={handleChange} required />
                    </div>
                </div>
                <div className='frm_grp'>
                    <div>
                     <label>Date:</label>   
                    </div>
                    <div>
                    <input type="date" name="appointment_date"  onChange={handleChange}  required/>
                    </div>
                </div>
               
                    <div className='frm_grp'> 
                 <div> <label>Time:</label>
                </div>
                <div><input type="time" name="appointment_time"  onChange={handleChange} required />  
                </div>
                </div>
                <div className='frm_grp'>
                <div><label>Phone Number:</label>
                </div> 
                <div>
<input type="text" minLength={10} maxLength={10} name="customer_number"  onChange={handleChange} required />
                </div>
                
               
                </div>
                
                <div className="frm_grp"> 
                <div>
                    <label></label>
                </div>
                 <div className='process_order' >
                       {cAppointment ? <button onClick={()=>{dispatch({type:'addAppointment',payload:ticket}) 
                       r_dirThanks('/thanks')}
 
               
            } >Confirm Appointment</button> :<button onClick={ process_order
        } >Book Appointment</button>} 
                   
                </div>
                </div>
               
                    </div>
                </form>   

            </div>



        </div>
        
        </section>
    );

}

export default ProductDetails