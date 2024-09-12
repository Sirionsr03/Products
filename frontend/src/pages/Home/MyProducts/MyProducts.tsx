import { useState, useEffect } from 'react';



import NavbarMyProducts from '../../../Component/navbarmyproducts';

import "./MyProducts.css";
import { Table } from 'antd';
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

  const [Products, setProducts] = useState<Products[]>([]);


  const fetchProducts = async (page: number = 1, pageSize: number = 10) => {
    try {
      const result = await GetProductsBySellerId(1, page, pageSize);
      if (result && Array.isArray(result.products)) {
        setProducts(result.products);
      } else {
        console.error("Invalid data format:", result);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);


  const columns: ColumnsType<Products> = [
    {
      title: "ID",
      dataIndex: "ID",
      key: "id",
    },
    {
      title: "Title",
      dataIndex: "Title",
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "Description",
      key: "description",
    },
    {
      title: "Price",
      dataIndex: "Price",
      key: "price",
      render: (price) => `฿${price}`,
    },
    {
      title: "Picture",
      dataIndex: "Picture_product",
      key: "picture",
      render: (text, record) => (
        <img src={record.Picture_product} alt={record.Title} width="170" />
      ),
    },
    {
      title: "Actions",
      key: "actions",
    },
  ];


  return (
    <>
      <div className='homemyproduct'>
        <NavbarMyProducts />
        <Table
        rowKey="ID"
        columns={columns}
        dataSource={Products}
        className="columns"
        pagination={{
          pageSize: 2,
          onChange: (page, pageSize) => {
            fetchProducts(page, pageSize);
          },
        }}
      />


      </div>
    </>
  );
}

export default Products;




