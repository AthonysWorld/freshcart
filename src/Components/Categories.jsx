import {FaArrowRight} from 'react-icons/fa'; 
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Categories = () => {
  useEffect(()=>{
Aos.init({duration:2000});
  }, [])
  return (
    <div>
    <div className='category'>
    <h2 className="slide-span">Featured Categories</h2>
      <div className='row category-row' data-aos="zoom-in">
<div className='col-lg-5 col-md-5 col-sm-5 container category1'>
<h2>Fruits & Vegetables</h2>
<p>Get up to 30% off</p>
<button className='btn btn1'>Shop now <FaArrowRight/></button>
</div>

<div className='col-lg-5 col-md-5 col-sm-5 container category2'>
<h2>Freshly Baked Buns</h2>
<p>Get up to 20% off</p>
<button className='btn btn1'>Shop now <FaArrowRight/></button>
</div>
</div>
      </div>
    </div>
  )
}

export default Categories
