import {Link} from 'react-router-dom';

function Nav(){
    return (
        <nav>
            <div className='nav-container'>
                <div> 
                    <Link to='/' style={{textDecoration:'none',color:'#fff'}}><h3 className='logo'>
                      Ekopa Beauty Salon  
                    </h3></Link>
                    
                </div>
                <div className='nav-link'>
                    <Link to='/appointment'>
                        <button>Book New Appointment</button>
                    </Link>

                </div>


            </div>
        </nav>

    );
}
export default Nav;