import image1 from '../images/cofee1.jpg'
import image2 from '../images/cofee2.jpg'


const Slides = () => {
  return (
    <div className='Slides'>
    <span><h2>Featured pets</h2></span>
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item carousel-item active">

    
    
    <div className='container1-slides'>
    <h1>Hello and welcome to FreshCart</h1>
   <h4>Your pleasure our delight </h4>
   <button className='btn btn1'>Shop Now</button>
 </div>
    </div>
 


    <div className="carousel-item">
    
    <div className='container2-slides'>
   <h1>Free delivery to any part of the province</h1>
   <h4>for as low as #50</h4>
   <button className='btn btn1'>Shop Now</button>
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
  )
}

export default Slides
