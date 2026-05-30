import React, { useState } from "react";
import { Routes, Route } from "react-router-dom"; //Use Routes
import Navbar from "./components/navbar/Navbar";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import PlaceOrder from "./Pages/Order/PlaceOrder";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Policy from "./components/policy/Policy";
import Login from "./components/login/Login";
import ScrollUP from "./components/scrollUp/ScrollUP";
import MyOrders from "./Pages/myorders/MyOrders";
import DeliveryPage from "./Pages/delivery/DeliveryPage";
import Faq from "./components/FaQ/Faq";
import Legal from "./components/legal/Legal";

const App = () => {
  const [login,setLogin]  = useState(false)
  return (
    <>
    {login?<Login setLogin={setLogin}/>:<></>}
      <div className="app">
        <Navbar setLogin={setLogin}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/faq" element={<Faq/>}/>
          <Route path="/legal" element={<Legal/>}/>
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/myorders" element={<MyOrders/>}/>
          <Route path="/deliveryPage" element={<DeliveryPage/>}/>
        </Routes>
      </div>
      <Footer />
      <ScrollUP/>
    </>
  );
};

export default App;
