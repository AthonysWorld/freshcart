

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
    <li><a className="dropdown-item slide-span" href="#">Asaba</a></li>
    <li><a className="dropdown-item slide-span" href="#">Ikeja</a></li>
    <li><a className="dropdown-item slide-span" href="#">Abuja</a></li>
  </ul>
</div>
         </ul>
     </div>
 </div>
      
    </div>
   
  )
}

export default Nav
