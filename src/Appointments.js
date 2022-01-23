import { appointmentContext } from "./App";
import {useContext} from 'react'


function Appointments() {

const {state,dispatch} = useContext(appointmentContext);
console.log(state);
return(
    <div>
    <div className='page_header'>
            <h1>APPOINTMENT LIST</h1>
            <p>Pleease Do well To Go Through The List </p>
            <hr />
            

            </div>
    <div className="appointments_wrapper">
      {
          state.map((appointment,index)=>{
             return  <div key={index} className='app_card'>
                 <div>
                 <img src={appointment.style_Image} alt="" />
</div>
<div>
                <h2>{appointment.hair_style}</h2>
                  <p><span>Date-</span>{appointment.appointment_date}</p>
                  <p><span>Time-</span>{appointment.appointment_time}</p>
                  <h4>{appointment.customer_name}-{appointment.customer_number}</h4>
</div>
              
             </div>
              
             
             
          })
      }
    </div>
    </div>
);
}
export default Appointments;