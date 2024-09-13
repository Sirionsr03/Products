import NavbarMyProducts from '../../../Component/navbarmyproducts';
import "./MyProducts.css";
import { Card } from 'antd';
import market from "../../../assets/market.png";




interface Products {
  ID: number;
  Title: string;
  Price: number;
  Picture_product: string;
  Description: string;
  SellerID: number;
}

const Products = () => {

 
  return (
    <>
      <div className='homemyproduct'>
        <NavbarMyProducts />
          <div className='headmyproducts'>
            <img src={market} alt="market" style={{width:"30px", height:"30px"}}/>
            <h2>MyProduct</h2>
          </div>
        <Card>

        </Card>
      </div>

    </>
  );
}

export default Products;




