import {FaClock} from 'react-icons/fa'
import {FaGift} from 'react-icons/fa'
import {FaBox} from 'react-icons/fa'
import {FaRocket} from 'react-icons/fa'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Footer = () => {
  useEffect(()=>{
    Aos.init({duration:1000});
      }, [])
  return (
    <div>
    <div className="footerr">
      
<div className="container-fluid row">

<div className="container pad col-lg-3 col-md-3" data-aos="zoom-out-right">
<h1><FaClock className='icons'/></h1>
<h3>10 minute grocery now</h3>
<p className="grey">Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near you.</p>
</div>

<div className="container pad col-lg-3 col-md-3" data-aos="zoom-out-right">
<h1><FaGift className='icons'/></h1>
<h3>Best Prices & Offers</h3>
<p className="grey">Cheaper prices than your local supermarket, great cashback offers to top it off. Get best pricess & offers.</p>
</div>

<div className="container pad col-lg-3 col-md-3" data-aos="zoom-out-right">
<h1><FaBox className='icons'/></h1>
<h3>Wide Assortment</h3>
<p className="grey">Choose from 5000+ products across food, personal care, household, bakery, veg and non-veg & other categories.</p>
</div>

<div className="container pad col-lg-3 col-md-3" data-aos="zoom-out-right">
<h1><FaRocket className='icons'/></h1>
<h3>Easy Returns</h3>
<p className="grey">Not satisfied with a product? Return it at the doorstep & get a refund within hours. No questions asked policy</p>
</div>

</div>



</div>
    </div>
  )
}

export default Footer
