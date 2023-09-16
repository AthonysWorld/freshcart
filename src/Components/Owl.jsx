import image1 from '../images/product1.jpg';
import image2 from '../images/product2.jpg';
import image3 from '../images/product3.jpg';
import image4 from '../images/product4.jpg';
import image5 from '../images/product5.jpg';
import image6 from '../images/product6.jpg';
import image7 from '../images/product7.jpg';
import image8 from '../images/product8.jpg';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Owl = () => {
  return (
  


   <div className="container-fluid Owl">
   <h2>Some of our products</h2>
   <OwlCarousel className='owl-theme' loop margin={10} nav>
    <div className='item'>
        <div className='card'>
<img src={image1} className='owl-card'/>
        </div>
    </div>
    <div className='item'>
    <div className='card'>
<img src={image2} className='owl-card'/>
        </div>
    </div>
    <div className='item'>
    <div className='card'>
<img src={image3} className='owl-card'/>
        </div>
    </div>
    <div className='item'>
    <div className='card'>
<img src={image4} className='owl-card'/>
        </div>
    </div>
    <div className='item'>
      <div className='card'>
<img src={image1} className='owl-card'/>
        </div>
    </div>
    <div className='item'>
    <div className='card'>
<img src={image5} className='owl-card'/>
        </div>
    </div>
    <div className='item'>
    <div className='card'>
<img src={image6} className='owl-card'/>
        </div>
    </div>
    <div className='item'>
    <div className='card'>
<img src={image7} className='owl-card'/>
        </div>
    </div>
    <div className='item'>
    <div className='card'>
<img src={image8} className='owl-card'/>
        </div>
    </div>
    <div className='item'>
    <div className='card'>
<img src={image2} className='owl-card'/>
        </div>
    </div>
    <div className='item'>
    <div className='card'>
<img src={image4} className='owl-card'/>
        </div>
    </div>
    <div className='item'>
    <div className='card'>
<img src={image1} className='owl-card'/>
        </div>
    </div>
</OwlCarousel>
   </div>


  )
}

export default Owl
