import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Bottom = () => {
  useEffect(()=>{
    Aos.init({duration:1000});
      }, [])
  return (
    <div>
      <div className="Bottom container-fluid row" data-aos="zoom-in">
<div className="container pad col-lg-4">
<h3>Get to know us</h3>
<p>About</p>
<p>Blog</p>
<p>Help Center</p>
</div>

<div className=" container pad col-lg-4">
<h3>Categories</h3>
<p>Vegetables & Fruits</p>
<p>Breakfast & instant food</p>
<p>Bakery & Biscuits</p>
</div>

<div className="container pad col-lg-4">
<h3>FreshCart programs</h3>
<p>Promos & Coupons</p>
<p>Freshcart programs</p>
<p>Gift Cards</p>
</div>
<hr/>

<div className="footest">
<p>FreshCart eCommerce 2023</p>
</div>
</div>

    </div>
  )
}

export default Bottom
