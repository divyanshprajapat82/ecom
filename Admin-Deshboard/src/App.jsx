import { useState } from "react";
import "./App.css";
import Header from "./common/Header";
import SideBar from "./common/SideBar";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import View_User from "./pages/View_User";
import MainLayout from "./common/MainLayout";
import Home from "./pages/Home";
import Contact_Enquiry from "./pages/Contact_Enquiry";
import Newsletters from "./pages/Newsletters";
import View_Color from "./pages/View_Color";
import View_Material from "./pages/View_Material";
import View_Category from "./pages/View_Category";
import View_Sub_Category from "./pages/View_Sub_Category";
import View_Sub_Sub_Category from "./pages/View_Sub_Sub_Category";
import View_Product from "./pages/View_Product";
import View_Why_Choose_Us from "./pages/View_Why_Choose_Us";
import Orders from "./pages/Orders";
import View_Slider from "./pages/View_Slider";
import View_Country from "./pages/View_Country";
import View_Testimonial from "./pages/View_Testimonial";
import View_Feq from "./pages/View_Feq";
import Terms from "./pages/Terms";
import Add_Color from "./pages/Add_Color";
import Add_Material from "./pages/Add_Material";
import Add_Category from "./pages/Add_Category";
import Add_Sub_Category from "./pages/Add_Sub_Category";
import Add_Sub_Sub_Category from "./pages/Add_Sub_Sub_Category";
import Add_Product from "./pages/Add_Product";
import Add_Why_Choose_Us from "./pages/Add_Why_Choose_Us";
import Add_Slider from "./pages/Add_Slider";
import Add_Country from "./pages/Add_Country";
import Add_Testimonials from "./pages/Add_Testimonials";
import Add_Faq from "./pages/Add_Faq";
import Profile from "./pages/Profile";
import Company_Profile from "./pages/Company_Profile";
import FrontPage from "./common/Login";
import ResetPassword from "./common/ResetPassword";

function App() {
  return (
    <>
      {/* <FrontPage /> */}
      <div className="overflow-x-hidden">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<FrontPage />} />
            <Route path="/forgot_password" element={<ResetPassword />} />
            <Route path="/" element={<MainLayout />}>
              <Route path="/dashboard" element={<Home />} />
              <Route path="/view_user" element={<View_User />} />
              <Route path="/contact_enquiry" element={<Contact_Enquiry />} />
              <Route path="/newsletters" element={<Newsletters />} />
              <Route path="/add_color" element={<Add_Color />} />
              <Route path="/view_color" element={<View_Color />} />
              <Route path="/add_material" element={<Add_Material />} />
              <Route path="/add_material/:id" element={<Add_Material />} />
              <Route path="/view_material" element={<View_Material />} />
              <Route path="/add_category/:id" element={<Add_Category />} />
              <Route path="/add_category" element={<Add_Category />} />
              <Route path="/view_category" element={<View_Category />} />
              <Route path="/add_sub_category" element={<Add_Sub_Category />} />
              <Route
                path="/view_sub_category"
                element={<View_Sub_Category />}
              />
              <Route
                path="/add_sub_sub_category"
                element={<Add_Sub_Sub_Category />}
              />
              <Route
                path="/add_sub_sub_category/:id"
                element={<Add_Sub_Sub_Category />}
              />
              <Route
                path="/view_sub_sub_category"
                element={<View_Sub_Sub_Category />}
              />
              <Route path="/add_product" element={<Add_Product />} />
              <Route path="/add_product/:id" element={<Add_Product />} />
              <Route path="/view_product" element={<View_Product />} />
              <Route
                path="/add_why_choose_us"
                element={<Add_Why_Choose_Us />}
              />
              <Route
                path="/view_why_choose_us"
                element={<View_Why_Choose_Us />}
              />
              <Route path="/orders" element={<Orders />} />
              <Route path="/add_slider" element={<Add_Slider />} />
              <Route path="/view_slider" element={<View_Slider />} />
              <Route path="/add_country" element={<Add_Country />} />
              <Route path="/view_country" element={<View_Country />} />
              <Route path="/add_testimonials" element={<Add_Testimonials />} />
              <Route path="/view_testimonial" element={<View_Testimonial />} />
              <Route path="/add_faq" element={<Add_Faq />} />
              <Route path="/view_feq" element={<View_Feq />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/company_profile" element={<Company_Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>

      {/* <div className="flex">
        <SideBar sideBar={sideBar} />
        <Header sideBar={sideBar} setSideBar={setSideBar} />
      </div> */}
    </>
  );
}

export default App;
