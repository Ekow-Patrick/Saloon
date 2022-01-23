import {useNavigate} from 'react-router-dom'

function Thanks(){

   const  r_dirHome=useNavigate();


    return(
    <div className='thanks'>
        <div>
<h1>Thank you for doing business with us</h1>
        </div>
        <div>
 <button onClick={e=>{r_dirHome('/')}}>TAKE ME HOME</button>
        </div>
        
       
    </div>)
}
export default Thanks;