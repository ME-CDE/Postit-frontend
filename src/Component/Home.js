import React from "react";
import { Outlet} from "react-router-dom";
import HomeContent from "./HomeContent";
import Footer from "./Footer";
import "../app.css"
const Home = () => {
  return (
    <div className="Home font-harmattan overflow-x-hidden">
      <HomeContent/>
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default Home;
