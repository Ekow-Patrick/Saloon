import {Link} from 'react-router-dom'


  



function Gallery(props) {
    
    //console.log(props.allProduct[1].title)
    return (
    <div>
       <div className="styleContainer">
           {
               props.allProduct.map((product,index) =>{
                   return(
                       
                   <div key={index} className='p_card'>
                <img src={product.img} alt="" />
                <p className='title'>{product.title}</p>
                <p className='price'>{product.price}</p>
                <div className='book_button'>
                    <Link to={`/gallery/${index}`}><button>Book </button></Link>
                </div>

            </div>)
               })
           }
            
       </div>

    </div>
    );
}
export default Gallery;