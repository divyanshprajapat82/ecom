import React, { useState } from "react";
import { Outlet } from "react-router";
import SideBar from "./SideBar";
import Header from "./Header";
import Footer from "./Footer";

export default function MainLayout() {
  const [sideBar, setSideBar] = useState(true);
  const [navsideBar, setNavSideBar] = useState(false);
  return (
    <>
      <div className="flex ">
        <SideBar
          sideBar={sideBar}
          navsideBar={navsideBar}
          setNavSideBar={setNavSideBar}
        />
        <div className="w-full h-[100vh] overflow-y-scroll md:px-4 px-0 relative">
          <Header
            sideBar={sideBar}
            setSideBar={setSideBar}
            setNavSideBar={setNavSideBar}
            navsideBar={navsideBar}
          />

          <div className="min-h-[465px]">

            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
