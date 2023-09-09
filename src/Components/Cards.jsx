import image1 from '../images/product1.jpg';
import image2 from '../images/product2.jpg';
import image3 from '../images/product3.jpg';
import image4 from '../images/product4.jpg';
import image5 from '../images/product5.jpg';
import image6 from '../images/product6.jpg';
import image7 from '../images/product7.jpg';
import image8 from '../images/product8.jpg';

const Cards = () => {
  return (
    <div className='card-container'>
<h2>Popular Products</h2>
  <div className='row'>


  <div className='col-lg-3 col-6'>
  <div className='card'>
<img src={image1} className='card-top'/>
<div className='card-body'>
<span className='grey'>Snack & Munchies</span>
<p>Haldiram's Sev<br/> Bhujia</p>
 #50<button className='btn btn2'>+ Add</button></div>
      </div>
  </div>

  <div className='col-lg-3 col-6'>
  <div className='card'>
  <img src={image2} className='card-top'/>
  <div className='card-body'>
<span className='grey'>Bakery & Biscuits</span>
<p>NutriChoice<br/>Digestive</p>
 #50<button className='btn btn2'>+ Add</button></div>
      </div>
  </div>

  <div className='col-lg-3 col-6'>
  <div className='card'>
<img src={image3} className='card-top'/>
<div className='card-body'>
<span className='grey'>Bakery & Biscuits</span>
<p>Cadbury 5 Star<br/>Chocolate</p>
 #50<button className='btn btn2'>+ Add</button></div>
      </div>
  </div>

  <div className='col-lg-3 col-6'>
  <div className='card'>
<img src={image4} className='card-top'/>
<div className='card-body'>
<span className='grey'>Snack & Munchies</span>
<p>Onion Flavour<br/> Potato</p>
 #50<button className='btn btn2'>+ Add</button></div>
      </div>
  </div>
  <div className='col-lg-3 col-6'>
  <div className='card'>
<img src={image8} className='card-top'/>
<div className='card-body'>
<span className='grey'>Instant food</span>
<p>Kellogg's Original<br/>Cereals</p>
 #50<button className='btn btn2'>+ Add</button></div>
      </div>
  </div>

  <div className='col-lg-3 col-6'>
  <div className='card'>
<img src={image7} className='card-top'/>
<div className='card-body'>
<span className='grey'>Dairy, Bread & Eggs</span>
<p>Britannia Cheese<br/> Slices</p>
 #50<button className='btn btn2'>+ Add</button></div>
      </div>
  </div>

  <div className='col-lg-3 col-6'>
  <div className='card'>
<img src={image6} className='card-top'/>
<div className='card-body'>
<span className='grey'>Dairy, Bread & Eggs</span>
<p>Blueberry Greek<br/> Yogurt</p>
 #50<button className='btn btn2'>+ Add</button></div>
      </div>
  </div>

  <div className='col-lg-3 col-6'>
  <div className='card'>
<img src={image5} className='card-top'/>
<div className='card-body'>
<span className='grey'>Instant food</span>
<p>Salted instant<br/> popcorn</p>
 #50<button className='btn btn2'>+ Add</button></div>
      </div>
  </div>

  </div>
  {/* row ends */}
      



    </div>
  )
}

export default Cards
