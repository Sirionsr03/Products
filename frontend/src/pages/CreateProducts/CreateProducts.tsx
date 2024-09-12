import './CreateProducts.css';
import backarrow from "../../assets/back-arrow.png";
import Logo from "../../assets/logo.png";
import { Card, Col, Row, Input, Form, InputNumber, Select, Upload, Image, Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import type { GetProp, UploadFile, UploadProps } from 'antd';
import { CreateSeller } from '../../https';
import { ProductsInterface } from '../../interfaces/Products';
import { UploadOutlined } from '@ant-design/icons';
import ImgCrop from 'antd-img-crop';


type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];
// const { Option } = Select;


function CreateProducts () {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const onChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };


  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as FileType);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  const onFinish = async (values: ProductsInterface) => {
    if (!fileList.length || !fileList[0]?.thumbUrl) {
      messageApi.open({
        type: "error",
        content: "กรุณาอัปโหลดรูปสินค้า!",
      });
      return;
    }

    values.Picture_product = fileList[0].thumbUrl;
    let res = await CreateSeller(values);
    console.log(res);
    if (res) {
      messageApi.open({
        type: "success",
        content: "บันทึกข้อมูลสำเร็จ",
      });
      setTimeout(function () {
        navigate("/MyProducts");
      }, 2000);
    } else {
      messageApi.open({
        type: "error",
        content: "เกิดข้อผิดพลาด !",
      });
    }
  };


  const handleBacktoHome = () => {
    navigate('/SellerHome'); 
  };


  return (
    <>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
      <Card
        style={{
          borderRadius: "12px",
          padding: "24px",
          background: "#e2dfdf",
          width: "1100px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}>
        <Row gutter={[16, 16]} justify="center">
          <Col span={24} style={{ textAlign: "center" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "10px",
                marginTop: "-80px",
              }}
            >
              <img
                src={Logo}
                alt="Course Logo"
                style={{
                  width: "200px",
                  marginRight: "20px",
                  marginTop: "0",
                }}
              />
              <h2 style={{ margin: "0 180px" }}>สร้างการขายสินค้า</h2>
              <img
                src={backarrow}
                alt="backarrow"
                onClick={handleBacktoHome}
                style={{
                  width: "40px",
                  cursor: "pointer",
                  marginLeft: "130px",
                }}
              />
            </div>
          </Col>
        </Row>

        <Form  onFinish={onFinish} >
          <Row gutter={[16, 16]} justify="center" 
            style={{ 
              display:"flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "-40px", 
              height: "425px" }}>
            <Col span={12}>
                <Form.Item
                  label="ชื่อสินค้า"
                  name="Title"
                  rules={[{ required: true, message: "กรุณากรอกชื่อสินค้า!" }]}
                  style={{ marginBottom: "16px" }}
                >
                  <Input placeholder="ชื่อสินค้า" size="large" style={{ width: "100%" }} />
                </Form.Item>
            
                <Form.Item
                  label="รายละเอียดของสินค้า"
                  name="Description"
                  style={{ marginBottom: "16px" }}
                >
                  <Input.TextArea
                    placeholder="คำอธิบาย"
                    size="large"
                    autoSize={{ minRows: 4, maxRows: 6 }}
                    style={{ width: "100%" }}
                  />
                </Form.Item>
            
                <Form.Item
                  label="ราคาสินค้า"
                  name="Price"
                  rules={[{ required: true, message: "กรุณากรอกราคาสินค้า!" }]}
                  style={{ marginBottom: "16px" }}
                >
                  <InputNumber placeholder="ราคาสินค้า" size="large" style={{ width: "100%" }} />
                </Form.Item>
            
                <Form.Item
                  label="หมวดหมู่สินค้า"
                  name="Category"
                  rules={[{ required: true, message: "กรุณาเลือกหมวดหมู่สินค้า!" }]}
                  style={{ marginBottom: "16px" }}
                >
                  <Input size="large" style={{ width: "100%" }}></Input>
                </Form.Item>
            
                <Form.Item
                  label="สภาพสินค้า"
                  name="Condition"
                  rules={[{ required: true, message: "กรุณาเลือกสภาพสินค้า!" }]}
                  style={{ marginBottom: "16px" }}
                >
                  <Input size="large" style={{ width: "100%" }}></Input>
                </Form.Item>
            
                <Form.Item
                  label="น้ำหนักสินค้า"
                  name="Weight"
                  style={{ marginBottom: "16px" }}
                >
                  <InputNumber placeholder="ไม่จำเป็นต้องระบุ" size="large" style={{ width: "100%" }} />
                </Form.Item>
            </Col>


            <Col span={12} 
               style={{
                 display: "flex",
                 justifyContent: "center", // Center horizontally
                 alignItems: "center",     // Center vertically
                 marginTop: "-10px",
                 flexDirection: "column",  // Align uploaded images in column
               }}>
               <Form.Item
                 name="Picture_product"
                 valuePropName="fileList"
                 style={{
                   marginLeft: "0px", // Adjust margin for proper alignment
                 }}
               >
                 <ImgCrop rotationSlider>
                   <Upload
                     fileList={fileList}
                     onChange={onChange}
                     onPreview={onPreview}
                     beforeUpload={(file) => {
                       setFileList([...fileList, file]);
                       return false;
                     }}
                     maxCount={5}  // Adjust this value to control the number of maximum images
                     multiple={true}  // Allow multiple file uploads
                     action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                     listType="picture"
                   >
                     {fileList.length < 5 && ( // Show the button until the max count is reached
                       <Button type="primary" icon={<UploadOutlined />} 
                         style={{
                           backgroundColor: "#212020", // Background color
                           borderColor: "#181818",     // Border color
                           color: "#fff",              // Text color
                           marginTop: "10px",
                         }}>
                         Upload
                       </Button>
                     )}
                   </Upload>
                 </ImgCrop>
               </Form.Item>
            </Col>

                   
            {/* <Col span={12} 
              style={{
                marginRight:"-70px",
                marginTop:"-80px"
              }}>
                <p 
                  style={{
                    display:"flex",
                    fontSize:"15px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>อัปโหลดรูปภาพสินค้าที่นี่</p>
              <Row justify="center" 
                style={{
                  grid:"-moz-initial",
                }} > 
                <Upload 
                  action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                  listType="picture-card"
                  fileList={fileList}
                  onPreview={handlePreview}
                  onChange={handleChange}
                >
                  {fileList.length >= 8 ? null : uploadButton}
                </Upload>
                {previewImage && (
                  <Image
                    wrapperStyle={{ display: 'none' }}
                    preview={{
                      visible: previewOpen,
                      onVisibleChange: (visible) => setPreviewOpen(visible),
                      afterOpenChange: (visible) => !visible && setPreviewImage(''),
                    }}
                    src={previewImage}
                  />
                )}
              </Row>
            </Col> */}

            <Row justify="center">
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
            
                  style={{
                    backgroundColor: "#33ca0d",
                    borderColor: "#33ca0d",
                    borderRadius: "8px",
                    padding: "0 60px",
                    marginTop:"-35px",
                    marginLeft:"520px",
                  }}
                >
                  ยืนยัน
                </Button>
              </Row>
                
          </Row>
        </Form>
      </Card>
    </div>
  </>
  
  );
};

export default CreateProducts;




