import React from "react";
import "./ApplyToSeller.css";
import backarrow from "../../assets/back-arrow.png";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";

const ApplyToSeller: React.FC = () => {
  const navigate = useNavigate();

  const handleBacktoHome = () => {
    navigate('/'); 
  };
  
  const OpenSellerHome = () => {
    navigate('/SellerHome');
  };
  
  return (
    <div>
      <img src={Logo} className='logo' alt='Course Logo' />
      <div className="backtohome">
        <img src={backarrow} alt="backarrow" onClick={handleBacktoHome} />
      </div>
      
      <div className="form-container">
        <h2>กรอกข้อมูลเพิ่มเติมสำหรับยืนยันตัวตน</h2>
        
        <div className="form-group">
          <label htmlFor="student-id">รหัสนักศึกษา</label>
          <input type="text" id="student-id" placeholder="รหัสนักศึกษา" />
        </div>
        
        <div className="form-group">
          <label htmlFor="year">ชั้นปี</label>
          <select id="year">
            <option value="">เลือกชั้นปี</option>
            <option value="1">ปีที่ 1</option>
            <option value="2">ปีที่ 2</option>
            <option value="3">ปีที่ 3</option>
            <option value="4">ปีที่ 4</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="faculty">สำนักวิชา</label>
          <input type="text" id="faculty" placeholder="สำนักวิชา" />
        </div>
        
        <div className="form-group">
          <label htmlFor="branch">สาขา</label>
          <select id="branch">
            <option value="">เลือกสาขา</option>
            <option value="1">สาขา 1</option>
            <option value="2">สาขา 2</option>
            <option value="3">สาขา 3</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="student-card">แนบรูปบัตรนักศึกษา</label>
          <input type="file" id="student-card" />
        </div>

        <div className="submit-button" onClick={OpenSellerHome}>
          <button type="submit">ยืนยัน</button>
        </div>
      </div>
    </div>
  );
};

export default ApplyToSeller;
