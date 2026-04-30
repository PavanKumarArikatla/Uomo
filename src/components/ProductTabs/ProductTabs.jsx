import React, { useState } from "react";
import "./productTabs.css";

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="product-container">
      
      {/* Navbar Tabs */}
      <div className="tabs">
        <button
          className={activeTab === "description" ? "tab active" : "tab"}
          onClick={() => setActiveTab("description")}
        >
          Description
        </button>

        <button
          className={activeTab === "info" ? "tab active" : "tab"}
          onClick={() => setActiveTab("info")}
        >
          Additional Information
        </button>

        <button
          className={activeTab === "reviews" ? "tab active" : "tab"}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews (2)
        </button>
      </div>

      {/* Content */}
      <div className="tab-content">
        {activeTab === "description" && (
          <div>
            <h3>Light and weather-ready made for movement</h3>
            <br></br>
            <p>
Designed for city commutes and weekend travel, this jacket offers the perfect 
   balance of style and functionality. Crafted with high-quality materials, it 
      provides excellent insulation while remaining lightweight and breathable. 
          The modern fit ensures comfort without compromising on a sleek look, making 
            it suitable for both casual and semi-formal occasions. An adjustable hood 
              adds extra protection against unpredictable weather conditions. Durable 
                stitching and premium fabric enhance longevity, ensuring it stands up to 
                everyday use. Multiple pockets provide convenient storage for essentials 
                  like your phone, wallet, and keys. The versatile design makes it easy to 
                      pair with jeans, chinos, or joggers. Whether you're heading to work or 
                        exploring the outdoors, this jacket keeps you comfortable and stylish 
                          throughout the day.
                          <br></br>
                          <br></br>
                          <br></br>
  <div className="infoSection">
  <div className="left">
    <h3>Why choose product?</h3>
    <ul>
      <li>Crafted by cotton fabric with soft and smooth texture</li>
      <li>Simple, configurable (e.g. size, color, etc.), bundled</li>
      <li>Downloadable/Digital Products, Virtual Products</li>
    </ul>
  </div>

  <div className="right">
    <h3>Sample Number List</h3>
    <ol>
      <li>Create store-specific attributes on the fly</li>
      <li>Simple, configurable (e.g. size, color, etc.), bundled</li>
      <li>Downloadable/Digital Products, Virtual Products</li>
    </ol>
  </div>
</div>   
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<div className="Line Info">
  <h4>Lining</h4>
  <br></br>
  <p>
    100% Polyester, Main: 100%   Polyester.
  </p>
</div>

        



            </p>
          </div>
        )}

        {activeTab === "info" && (
          <div>
            <p><b>SKU:</b> UOM-7784</p>
            <p><b>Categories:</b> Men, Jackets</p>
            <p><b>Tags:</b> Hoodie, Lightweight</p>
          </div>
        )}

        {activeTab === "reviews" && (
          <div>
            <p>⭐️⭐️⭐️⭐️ - Great quality!</p>
            <p>⭐️⭐️⭐️⭐️⭐️ - Loved it!</p>
          </div>
        )}
      </div>

    </div>
  );
};

export default ProductTabs;