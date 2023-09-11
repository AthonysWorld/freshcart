import image1 from '../images/product1.jpg';
import image2 from '../images/product2.jpg';
import image3 from '../images/product3.jpg';
import image4 from '../images/product4.jpg';
import Counter2 from '../Components/Counter2';

const Nav = () => {
  return (
    <div>
      

      <div className="navbar navbar-expand-lg">
     
     <a className="navbar-brand slide-span">FreshCart</a>
    
     <ul className="navbar-nav ms-auto"></ul>
       <button className="navbar-toggler btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
       </button>
       <div className="collapse navbar-collapse" id="navbar">
         <ul className="navbar-nav ms-auto">
         <li className="nav-item">
                 <a className="nav-link slide-span">Home</a>
             </li>
             <div className="dropdown">
  <button className="btn btn-nav dropdown-toggle slide-span" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  Cart
  </button>
  <ul className="dropdown-menu">
   <div className="container-fluid">
<div className="card nav-card">
<img className='Nav-image' src={image1}/>
<Counter2/>
</div>

<div className="card nav-card">
<img className='Nav-image' src={image2}/>
<Counter2/>
</div>

<div className="card nav-card">
<img className='Nav-image' src={image3}/>
<Counter2/>
</div>

<div className="card nav-card">
<img className='Nav-image' src={image4}/>
<Counter2/>
</div>
<div className='Checkout'>
<button className='btn1 btn'>Checkout</button>
</div>


   </div>

   
  </ul>
</div>

         </ul>
     </div>
 </div>
      
    </div>
   
  )
}

export default Nav
