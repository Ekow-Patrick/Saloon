import landModel from './imgs/model-4.png'
import {Link} from 'react-router-dom'
import Carousel from 'nuka-carousel'
import {ReactComponent as ReactLogo} from './sv2.svg';
function LandingPage() {
/*
    return (
        
    <div className='landing_page bg_img'>
     
    <div className="wlcm">
    <h1>WELCOME</h1>
    </div>
     <div className='model'>
      <img src={landModel} alt="" />

    </div>
    <div className='tagline'>
     <h3>"The <span>deal</span> of hair and <br />the beauty of looks"</h3>
     <p>We provide the best haircare and treatment
services by leveraging on superior products 
and professionals.</p>
    </div>

    <div className='store'>
      <h4>Out of Options ?</h4>
      <p>Please check our gallery</p>
      <Link to='/gallery'>
        <button>
        Now </button>
        </Link>

    </div>

  </div>
    );*/
    return (
  
      <div className="App">
    
      <div className='flex_content'>
        <div className='abt_card'>
          <div className='c_light'><h2>ABOUT US</h2></div>
          <div>
            <p className='j_text c_light'>Ekopa Beauty Saloon as one of the best saloon in town
  is pleased to announce to the general public that 
  we have made online reservation available as part of 
  our covid-19 measures.</p>
          </div>
          <div className="footer">
            <p>Observe all Covid-19 protocols </p>
          </div>
          
  
        </div>
        <div className='carou'>
        <Carousel autoplay={true} withoutControls={false} autoplayInterval={3000}  defaultControlsConfig={{
    nextButtonText: '>',
    prevButtonText: '<',
    pagingDotsStyle: {
      fill: 'red'
    }
  }}>
          <img src="http://localhost:3000/images/caro1.jpg" />
          <img src="http://localhost:3000/images/caro1.jpg" />
          <img src="http://localhost:3000/images/caro1.jpg" />
         
        </Carousel>
        
        </div>
          
   
     
        </div>
        <br />
        <div className='flex_content'>
          <div className='sub_flex bg_v'>
            <div className='f_sub_flex '>
              
            <ReactLogo />
  
  
            </div>
            <div className='d_etails c_white'  >
              <div>
                <h1>CHECK APPOINTMENT LIST</h1>
              </div>
              <div >
                <p>Click to view all booked appointment</p>
              </div>
              <div >
              <Link to='/appointments'>
        <button className='btn_landing m1rem'>
        View </button>
        </Link>
              </div>
            </div>
  
          </div>
          <div className="opt_ons">
            <div className="c_light">
              <h1>OUT OF OPTIONS ?</h1>
            </div>
            <div>
              <p>Carefully selected options to suit all occassions</p>
            </div>
            <div>
            <Link to='/gallery'>
        <button className='btn_landing bg_p c_white'>
        Our Gallery </button>
        </Link>
            </div>
  
          </div>
  
  
        </div>
        <div className="footer_">
          <hr />
          <div className="c_text">
            <h3>CONTACT US</h3>
          </div>
          <div className="contacts">
            <div>
              <h4>Facebook.com</h4>
            </div>
            <div>
              <h4>WHatsapp</h4>
            </div>
            <div>
              <h4>LinkedIn</h4>
            </div>
          
          </div>
  
        </div>
      </div>
    );
}
export default LandingPage;