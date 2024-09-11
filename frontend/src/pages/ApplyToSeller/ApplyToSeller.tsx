import React from "react";
import backarrow from "../../assets/back-arrow.png";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import type { UploadFile } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import "./ApplyToSeller.css"

import { Button, Form, Row, Col, Input, Select, Upload, Card, Flex } from "antd";

const fileList: UploadFile[] = [];

const ApplyToSeller: React.FC = () => {
  const navigate = useNavigate();

  const handleBacktoHome = () => {
    navigate('/');
  };

  const OpenSellerHome = () => {
    navigate('/SellerHome');
  };

  return (
    <>
    <Flex>
      <Card         
        style={{
          borderRadius: "12px",
          padding: "24px",
          background: "#e2dfdf",
          width:"1100px",
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
                marginTop:"-80px"
              }}
            >
              <img
                src={Logo}
                alt="Course Logo"
                style={{
                  width: "200px",
                  marginRight: "20px",
                  marginTop:"0"
                }}
              />
              <h2 
                style={{ 
                  margin: "0 70px",
                }}>
                กรอกข้อมูลเพิ่มเติมสำหรับการยืนยันตัวตน
              </h2>
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

        <Row gutter={[16, 16]} justify="center" 
          style={{
            marginTop:"-40px"
          }}>       
          <Form layout="vertical" style={{ width: '400px' }}>
            <Form.Item             
                label="รหัสนักศึกษา"
                name="StudentID"
                rules={[{ required: true, message: "กรุณากรอกรหัสนักศึกษา!" }]}
                style={{ marginBottom: "16px" }}>
              <Input placeholder="รหัสนักศึกษา" size="large" />
            </Form.Item>

            <Form.Item 
                label="ชั้นปี"
                name="Year"
                rules={[{ required: true, message: "กรุณาเลือกชั้นปี!" }]}
                style={{ marginBottom: "16px" }}>
                  <Select placeholder="เลือกชั้นปี" size="large">
                  </Select>
            </Form.Item>

            <Form.Item 
                label="สำนักวิชา"
                name="Faculty"
                rules={[{ required: true, message: "กรุณาเลือกสำนักวิชา!" }]}
                style={{ marginBottom: "16px" }}>
                  <Select placeholder="เลือกสำนักวิชา" size="large">
                  </Select>
            </Form.Item >

            <Form.Item            
              label="สาขา"
              name="Major"
              rules={[{ required: true, message: "กรุณาเลือกสาขา!" }]}
              style={{ marginBottom: "16px" }}>
                <Select placeholder="เลือกสาขา" size="large">
                </Select>
            </Form.Item>

            <Form.Item           
              label="รูปบัตรนักศึกษา"
              name="StudentCard"
              rules={[{ required: true, message: "กรุณาอัปโหลดรูปบัตรนักศึกษา!" }]}
              style={{ marginBottom: "16px" }}>
              <Upload
                action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                listType="picture"
                defaultFileList={fileList}
              >
                <Button type="primary" icon={<UploadOutlined />} 
                  style={{
                    backgroundColor: "#212020", // สีพื้นหลัง
                    borderColor: "#181818",     // สีขอบ
                    color: "#fff",              // สีข้อความ
                  }}>
                  Upload
                </Button>
              </Upload>
            </Form.Item>

            <Row justify="center">
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                onClick={OpenSellerHome}
                style={{
                  backgroundColor: "#33ca0d",
                  borderColor: "#33ca0d",
                  borderRadius: "8px",
                  padding: "0 60px",
                  marginTop:"-55px",
                  marginLeft:"750px",
                }}
              >
                ยืนยัน
              </Button>
            </Row>
          </Form>
        </Row> 
      </Card>
    </Flex>
    </>
  );
};

export default ApplyToSeller;


