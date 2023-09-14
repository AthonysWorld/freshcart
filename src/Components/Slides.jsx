import {FaArrowRight} from 'react-icons/fa'; 

const Slides = () => {
  return (
    <div>
    <div className='Slides'>
   
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item carousel-item active">

    
    
    <div className='container1-slides'>
    <h1>Hello and welcome to <span className='slide-span'>FreshCart</span></h1>
   <h4>Your <span className='slide-span'>pleasure</span> our <span className='slide-span'>delight</span></h4>
   <button className='btn btn1'>Shop Now <FaArrowRight/></button>
 </div>
    </div>
 


    <div className="carousel-item">
    
    <div className='container2-slides'>
   <h1><span className='slide-span'>Free</span> Shipping to our first time customers only</h1>
   <h4>for as low as <span className='slide-span'>#50</span></h4>
   <button className='btn btn1'>Shop Now <FaArrowRight/></button>
    </div>

    </div>

    
   
   
  </div>


  <button className="carousel-control-prev cbtn" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next cbtn  pad" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


</div>
    </div>
  )
}

export default Slides
