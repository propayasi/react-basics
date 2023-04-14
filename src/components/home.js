import React from "react";
import "../Styles/Home.css";
import dashboard_image from "../Assets/dashboard.webp.png";

function Home() {
  return (
    <div className="home_main_container">
      <div className="home_button">
        <p>Just Launched Ghost 3.0</p>
      </div>
      <div className="home_heading">
        <p>Turn Your audience into a business</p>
      </div>
      <div className="home_background"></div>
      <img className="home_image" src={dashboard_image} />
    </div>
  );
}

export default Home;
