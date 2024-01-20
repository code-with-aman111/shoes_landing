import React from "react";
import "./App.css";
const App = () => {
  return (
    <div>
      <div className="page1">
        <nav className="header">
          <div className="nike">
            <img src="/nike.png" alt="" className="nike" />
          </div>
          <div className="option">
            <h5>MENU</h5>
            <h5>LOCATION</h5>
            <h5>ABOUT</h5>
            <h5>CONTACT</h5>
          </div>
          <div className="btn">
            <button className="btn1">Login</button>
          </div>
        </nav>
        <div className="main1">
          <div className="left">
            <div className="m_head">
              <h1 className="head_m">YOUR FEET DESERVE THE BEST</h1>
              <p>
                Shoes are essential footwear providing protection and style.
                Evolving from basic functionality, they now encompass diverse
                designs, materials, and technologies. Serving fashion and
                function, shoes cater to various activities, reflecting
                individual preferences and trends, becoming a symbol of personal
                expression and cultural significance.
              </p>
              <div className="btns_l">
                <button className="btn_l k">Shop Now</button>
                <button className="btn_l">Category</button>
              </div>
            </div>
            <div className="lower">
              <h4>Also Available on</h4>
              <div className="icon">
                <img src="/flip.png" alt="" className="l" />
                <img src="/ama.png" alt="" className="l" />
              </div>
            </div>
          </div>
          <div className="right">
            <img src="/hero-image.png" alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
