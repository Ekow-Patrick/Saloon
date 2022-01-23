import {useContext, useState} from 'react'; 
import { useNavigate } from 'react-router-dom'
import { appointmentContext } from './App';


function BookAppointment(){


    const r_dirThanks=useNavigate();



 //function to handle input change
const handleChange = (e) => {
    setAppointment_input(data=>({...data,'style_Image':styleImage,[e.target.name]:e.target.value}))
    console.log(appointment_input);

}
//Handle Selected hair style Image
const [styleImage,setStyleImage]=useState();
//Holds all inputs from form
 const [appointment_input,setAppointment_input] = useState({});
const handleFileChange=(e)=>{
    if (e.target.files && e.target.files.length > 0) {
      
        URL.revokeObjectURL(e.target.files[0]); 
         //console.log(URL.createObjectURL(e.target.files[0]))
    setStyleImage(URL.createObjectURL(e.target.files[0]))
  
   
}
}
//style the chosen color
const customStyle={
    'hairColor':"background :"+appointment_input.hair_color
}

//handle form submission
const handleSubmit=(e)=>{
    e.preventDefault();
      setTicket(appointment_input);
}
//Ticket
const [ticket,setTicket]=useState({});
//appointment constext 
const {state,dispatch}=useContext(appointmentContext);




        return(
        <div style={{background:'#fff',height:'calc(100vh - 3.5rem)',margin:'1.5rem 0rem 0rem 0rem'}}>
        <div className='page_header'>
            <h1>BOOK APPOINTMENT</h1>
            <p>Please do well to fill the appointment form </p>
            <hr />
            

            </div>
        <div className='appointment_order' >
            
        <div className='fufillment_form'>
            <h3>APPOINTMENT FORM</h3>
            <form onSubmit={handleSubmit} >
                <div className='frm_grp'>
                <label>Name of Style :</label>
                <input type="text" name="hair_style" value={appointment_input.hair_style} onChange={handleChange} required />
                </div>
                <div className='frm_grp'>
                <label>Preferered Color :</label>
                <input type="color" name="hair_color" value={appointment_input.hair_color} onChange={handleChange} required />
                </div>
                <div className='frm_grp'>
                <label>Sample Hair Style Picture of Choice :</label>
                <input type="file" name="hair_image" onChange={handleFileChange} required />
                </div>
                <div style={{textAlign:'center'}}>
                    <h3>Appointment Details</h3>
                </div>
                <div className='frm_grp'>
                <label>Customer Name:</label>
                <input type="text" name="customer_name" value={appointment_input.customer_name} onChange={handleChange} required />
                </div>
                <div className='frm_grp'>
                <label>Date:</label>
                <input type="date" name="appointment_date" value={appointment_input.appointment_date} onChange={handleChange} required />
                </div>
                <div className='frm_grp'>
                <label>Time:</label>
                <input type="time" name="appointment_time" value={appointment_input.appointment_time} onChange={handleChange} required />  
                </div>
                <div className='frm_grp'>
                <label>Phone Number:</label>
                <input type="text" minLength={10} maxLength={10} name="customer_number" value={appointment_input.customer_number} onChange={handleChange} required />
                </div>
                <div className='process_order' >
                    <button type='submit'>Done</button>
                </div>
               

               


            </form>

        </div>
        <div>
            <p>preview  </p>
        </div>
        <div className='confirmation'>
            <div className='col-2'>
                <div>
                    <img src={styleImage}  alt="" />
                </div>
                <div>
                    <h2>{ticket.hair_style}</h2>
                    <p>Color: <span style={{background:ticket.hair_color,color:ticket.hair_color}} >{ticket.hair_color}</span></p>
                </div>

            </div>
            <hr />
            <div className='ticket_details'>
                <div>
                    <p>Name : <span>{ticket.customer_name}</span></p>
                </div>
                <div>
                    <p>Appointment Date : <span>{ticket.appointment_date}</span></p>
                </div>
                <div>
                    <p>Appointment Time : <span>{ticket.appointment_time}</span></p>
                </div>
                <div>
                    <p>Phone Number : <span>{ticket.customer_number}</span></p>
                </div>
                   
                <div className='process_ticket'> <button type='submit' onClick={()=>{dispatch({type:'addAppointment',payload:ticket})
                r_dirThanks('/thanks')
                }} > Book Appointment </button></div>
            </div>

        </div>
        
        </div>
        </div>);

}

export default BookAppointment;