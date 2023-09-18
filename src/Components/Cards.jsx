import image1 from '../images/product1.jpg';
import image2 from '../images/product2.jpg';
import image3 from '../images/product3.jpg';
import image4 from '../images/product4.jpg';
import image5 from '../images/product5.jpg';
import image6 from '../images/product6.jpg';
import image7 from '../images/product7.jpg';
import image8 from '../images/product8.jpg';
import Counter from '../Components/Counter';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Cards = () => {
  useEffect(()=>{
    Aos.init({duration:2000});
      }, [])
  return (
    <div >
    <div className='card-container'>
<span className='slide-span'><h2>Popular Products</h2></span>
  <div className='container-fluid row' data-aos="zoom-in">


  <div className='container col-lg-3 col-6'>
  <div className='card'>
<img src={image1} className='card-top'/>
<div className='card-body'>
<span className='grey'>Snack & Munchies</span>
<p>Haldiram's</p>
 <span className='slide-span'>#50</span></div>
 <Counter/>
      </div>
  </div>

  <div className='container col-lg-3 col-6'>
  <div className='card'>
  <img src={image2} className='card-top'/>
  <div className='card-body'>
<span className='grey'>Bakery & Biscuits</span>
<p>NutriChoice</p>
<span className='slide-span'>#15</span></div><Counter/>
      </div>
  </div>

  <div className='container col-lg-3 col-6'>
  <div className='card'>
<img src={image3} className='card-top'/>
<div className='card-body'>
<span className='grey'>Bakery & Biscuits</span>
<p>Cadbury 5</p>
<span className='slide-span'>#25</span></div>
 <Counter/>
      </div>
  </div>

  <div className='container col-lg-3 col-6'>
  <div className='card'>
<img src={image4} className='card-top'/>
<div className='card-body'>
<span className='grey'>Snack & Munchies</span>
<p>Onion Flavour</p>
<span className='slide-span'>#5</span></div>
 <Counter/>
      </div>
  </div>
  <div className='container col-lg-3 col-6'>
  <div className='card'>
<img src={image8} className='card-top'/>
<div className='card-body'>
<span className='grey'>Instant food</span>
<p>Kellogg's</p>
<span className='slide-span'>#40</span></div>
 <Counter/>
      </div>
  </div>

  <div className='container col-lg-3 col-6'>
  <div className='card'>
<img src={image7} className='card-top'/>
<div className='card-body'>
<span className='grey'>Dairy & Eggs</span>
<p>Cheese </p>
<span className='slide-span'>#10</span></div>
 <Counter/>
      </div>
  </div>

  <div className='container col-lg-3 col-6'>
  <div className='card'>
<img src={image6} className='card-top'/>
<div className='card-body'>
<span className='grey'>Dairy & Eggs</span>
<p>Blueberry<br/> Yogurt</p>
<span className='slide-span'>#45</span></div>
 <Counter/>
      </div>
  </div>

  <div className='container col-lg-3 col-6'>
  <div className='card'>
<img src={image5} className='card-top'/>
<div className='card-body'>
<span className='grey'>Instant food</span>
<p>Salted instant<br/> popcorn</p>
<span className='slide-span'>#30</span></div>
 <Counter/>
      </div>
  </div>
</div>
  </div>
  {/* row ends */}
      



    </div>
  )
}

export default Cards
