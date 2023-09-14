import {FaArrowRight} from 'react-icons/fa'; 

const Categories = () => {
  return (
    <div>
    <div className='category'>
    <h2 className="slide-span">Featured Categories</h2>
      <div className='row category-row'>
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
