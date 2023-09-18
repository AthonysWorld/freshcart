import image1 from '../images/daily1.jpg';
import image2 from '../images/daily2.jpg';
import image3 from '../images/daily3.jpg';
import Counter from '../Components/Counter'
import {FaArrowRight} from 'react-icons/fa'; 
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Deals = () => {
      useEffect(()=>{
            Aos.init({duration:2000});
              }, [])
  return (
      <div>
    <div className='Deals'>
<h1 className='slide-span'>Daily Best Sales</h1>
      <div className='row'>

      <div className='coffee-container col-lg-4 col-md-4' data-aos="flip-left">
<h1>100% Organic Coffee</h1>
<p>Get the best deal before close</p>
<button className=' btn btn1'>Shop Now <FaArrowRight/></button>
      </div>

      <div className='col-lg-3 col-md-3' data-aos="zoom-in">
<div className='card'>
<img src={image1} className='card-top'/>
<div className='card-body'>
<span className='grey'>Instant food</span>
<p>Salted instant<br/> popcorn</p>
<span className='slide-span'>#30</span></div>
 <button className='btn btn4'>+Add to cart</button>
</div>
      </div>

      <div className='col-lg-3 col-md-3' data-aos="zoom-in">
      <div className='card'>
<img src={image2} className='card-top'/>
<div className='card-body'>
<span className='grey'>Instant food</span>
<p>Salted instant<br/> popcorn</p>
<span className='slide-span'>#30</span></div>
<button className='btn btn4'>+Add to cart</button>
</div>
      </div>

      </div>


</div>
    </div>
  )
}

export default Deals
