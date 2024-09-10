import { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Image, Upload, UploadFile, UploadProps } from 'antd';
import './CreateProducts.css';
import backarrow from "../../assets/back-arrow.png";
import { useNavigate } from 'react-router-dom';
import Logo from "../../assets/logo.png";

const CreateProducts = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleBacktoHome = () => {
    navigate('/SellerHome'); // Navigate to ApplyToSeller page
  };

// type FileType = NonNullable<UploadProps['fileList']>[number];

// const ApplyToSeller: React.FC = () => 
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState<string>('');
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const handlePreview = async (file: UploadFile) => {
    setPreviewImage(file.url || file.thumbUrl || '');
    setPreviewOpen(true);
  };

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
    setFileList(newFileList.map(file => {
      if (file.response) {
        file.url = file.response.url;
      }
      return file;
    }));

  const uploadButton = (
    <div className="upload-button">
      <PlusOutlined />
      <div className="upload-text">Upload</div>
    </div>
  );

  return (
    <div className="container">
      <img src={Logo} className='logo' alt='Course Logo' />
      <div className="box-navbarApp" onClick={handleBacktoHome}>
          <img src={backarrow} alt="backarrow" />
      </div>
      <div className="header">
        <h2>สร้างการขายสินค้า</h2> 
      </div>


  
      <div className="form-upload-container">
        {/* Form content on the left */}
        <div className="form-content">
          <div className="form-group">
            <label htmlFor="product-name">ชื่อสินค้า</label>
            <input type="text" id="product-name" />
          </div>
  
          <div className="form-group">
            <label htmlFor="product-description">รายละเอียดสินค้า</label>
            <textarea id="product-description" />
          </div>
  
          <div className="form-group">
            <label htmlFor="product-price">ราคา</label>
            <input type="text" id="product-price" />
          </div>
  
          <div className="form-group-row">
            <div className="form-group">
              <label htmlFor="product-category">หมวดหมู่</label>
              <select id="product-category">
                <option>เลือกหมวดหมู่</option>
              </select>
            </div>
  
            <div className="form-group">
              <label htmlFor="product-condition">สภาพสินค้า</label>
              <select id="product-condition">
                <option>เลือกสภาพสินค้า</option>
              </select>
            </div>
          </div>
  
          <div className="form-group-last">
            <div className="form-group">
              <label htmlFor="product-weight">น้ำหนักสินค้า</label>
              <input type="text" id="product-weight" placeholder="ไม่จำเป็นต้องระบุ" />
            </div>
          </div>
          <button type="submit" className="submit-btn">ยืนยัน</button>
        </div>
  
        {/* Image upload on the right */}
        <div className="image-upload">
          <Upload
            action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
            listType="picture-card"
            fileList={fileList}
            onPreview={handlePreview}
            onChange={handleChange}
          >
            {fileList.length >= 6 ? null : uploadButton}
          </Upload>
          {previewImage && (
            <Image
              preview={{
                visible: previewOpen,
                onVisibleChange: (visible) => setPreviewOpen(visible),
                afterOpenChange: (visible) => !visible && setPreviewImage(''),
              }}
              src={previewImage}
            />
          )}
        </div>
      </div>
    </div>
  );

  
}

export default CreateProducts