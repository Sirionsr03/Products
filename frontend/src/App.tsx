import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Member/home";
import HomeSeller from "./pages/Home/Seller/homeseller";
import CreateProducts from "./pages/CreateProducts/CreateProducts";
import ApplyToSeller from "./pages/ApplyToSeller/ApplyToSeller";
import MyProducts from "./pages/Home/MyProducts/MyProducts";
import EditProducts from "./pages/EditProducts/EditProducts";




function App() {
  return (
    <div className="App">
      <Router>
        {/* <EditProducts/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createproducts" element={<CreateProducts />} />    
          <Route path="/apply-to-seller" element={<ApplyToSeller />} />    
          <Route path="/SellerHome" element={<HomeSeller />} />  
          <Route path="/createproducts" element={<CreateProducts />} />  
          <Route path="/MyProducts" element={<MyProducts />} />
          <Route path="/editproducts" element={<EditProducts />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;