import React, { useState } from "react";
import "./EditProducts.css"; // Ensure you have proper CSS styling
import Navbar from "../../Component/navbar";


const EditProducts: React.FC = () => {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [condition, setCondition] = useState("");
  const [weight, setWeight] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const handleCancel = () => {
    // Reset or handle cancel action
  };

  return (
    <div className="product-form-container">
      <Navbar />
      <form onSubmit={handleSubmit}>
        <h2>แก้ไขข้อมูลสินค้า</h2>
        <div className="form-group">
          <label htmlFor="product-name">ชื่อสินค้า</label>
          <input
            type="text"
            id="product-name"
            placeholder="กรุณากรอกชื่อสินค้า"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">รายละเอียดสินค้า</label>
          <input
            type="text"
            id="description"
            placeholder="คำอธิบาย"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">ราคา</label>
          <input
            type="text"
            id="price"
            placeholder="ตั้งราคาสินค้า"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">หมวดหมู่</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">เลือกหมวดหมู่</option>
            <option value="category1">หมวดหมู่ 1</option>
            <option value="category2">หมวดหมู่ 2</option>
            <option value="category3">หมวดหมู่ 3</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="condition">สภาพสินค้า</label>
          <select
            id="condition"
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
          >
            <option value="">เลือกสภาพสินค้า</option>
            <option value="new">ใหม่</option>
            <option value="used">มือสอง</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="weight">น้ำหนักสินค้า</label>
          <input
            type="text"
            id="weight"
            placeholder="ไม่จำเป็นต้องระบุ"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="product-image">แนบรูปสินค้า</label>
          <div className="image-upload-container">
            <input
              type="file"
              id="product-image"
              onChange={handleImageUpload}
              style={{ display: "none" }}
            />
            {/* <label htmlFor="product-image" className="image-upload-label">
              <img src={uploadIcon} alt="Upload Icon" />
              <span>เพิ่มรูปภาพ</span>
            </label> */}
          </div>
          {image && <p>{image.name}</p>}
        </div>

        <div className="button-group">
          <button type="submit" className="confirm-button">
            ยืนยัน
          </button>
          <button type="button" className="cancel-button" onClick={handleCancel}>
            ลบสินค้า
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProducts;
