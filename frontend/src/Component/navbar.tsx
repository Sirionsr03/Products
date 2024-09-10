import { useNavigate } from 'react-router-dom';
import "./navbar.css";
import Logo from "../assets/logo.png";
import list from "../assets/list.png";
import market from "../assets/shopping-cart.png";
import bell from "../assets/bell.png";

const Navbar = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleCreateProduct = () => {
    navigate('/apply-to-seller'); // Navigate to ApplyToSeller page
  };

  return (
      <div className='navbar'>
       <img src={Logo} className='logo' alt='Course Logo' />
       <div className='right-section'>
         <div className='links'>
           <div className="search">
             <input type="text" placeholder="search"/>
           </div>
           <button className="button-createproduct" onClick={handleCreateProduct}>
             สร้างการขายสินค้า
           </button>
           <div className="box-navbar">
             <img src={market} alt="market"/>
             <img src={list} alt="list"/>
             <img src={bell} alt="bell"/>
           </div>

         </div>

       </div>
      </div>

  );
}

export default Navbar;
