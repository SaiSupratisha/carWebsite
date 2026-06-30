import { NavLink } from "react-router-dom";

import "../styles/Navbar.css";
 
function Navbar() {

  return (
<nav className="navbar">
 
      <div className="logo">

        AutoVerse
</div>
 
      <ul className="nav-links">
 
        <li>
<NavLink to="/">Home</NavLink>
</li>
 
        <li>
<NavLink to="/cars">Cars</NavLink>
</li>
 
        <li>
<NavLink to="/about">About</NavLink>
</li>
 
        <li>
<NavLink to="/contact">Contact</NavLink>
</li>
 
        <li>
<NavLink to="/wishlist">Wishlist</NavLink>
</li>
 
        <li>
<NavLink to="/login">Login</NavLink>
</li>
<li>
<NavLink to="/dashboard">
        Dashboard
</NavLink>
</li>
 
      </ul>
 
    </nav>

  );

}
 
export default Navbar;
 
