import { useState, useEffect } from 'react';



import NavbarMyProducts from '../../../Component/navbarmyproducts';

import "./MyProducts.css";
import { Card, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { GetProductsBySellerId } from '../../../https/index';



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
          <div>
            <
          </div>
        <Card>

        </Card>
      </div>

    </>
  );
}

export default Products;




