import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./ProductDetails.css";

export default function ProductDetails() {
  const location = useLocation();
  const item = location.state ?? {};
  const [qty, setQty] = useState(3);
  const [size, setSize] = useState("M");
  const [color, setColor] = useState("red");
  
  const discount = item.discount ? item.price * (item.discount / 100) : 0;
  const finalPrice = (item.price - discount).toFixed(2);

  return (
    <div className="productDetails">

      <div className="topBar">
        <span>Men /Women</span>

        <div className="navBtns">
          <span>‹ PREV</span>
          <span>NEXT ›</span>
        </div>
      </div>

      <h1>{item.type || "Lightweight Puffer Jacket With a Hood"}</h1>

      <h2>${finalPrice || "249"}</h2>

      <p className="desc">
        Phasellus sed volutpat orci. Fusce eget lore mauris vehicula
        elementum gravida nec dui. Aenean aliquet varius ipsum.
      </p>

      <div className="row">
        <span className="label">SIZES</span>

        <div className="sizes">
          {["XS", "S", "M", "L", "XL"].map((item) => (
            <button
              key={item}
              className={size === item ? "activeSize" : ""}
              onClick={() => setSize(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <span className="guide">SIZE GUIDE</span>
      </div>

      <div className="row">
        <span className="label">COLOR</span>

        <div className="colors">
          <div
            className={`red ${color === "red" ? "activeColor" : ""}`}
            onClick={() => setColor("red")}
          ></div>

          <div
            className={`blue ${color === "blue" ? "activeColor" : ""}`}
            onClick={() => setColor("blue")}
          ></div>

          <div
            className={`black ${color === "black" ? "activeColor" : ""}`}
            onClick={() => setColor("black")}
          ></div>
        </div>
      </div>

      <div className="cartRow">

        <div className="qtyBox">
          <button onClick={() => qty > 0 && setQty(qty - 1)}>-</button>
          <span>{qty}</span>
          <button onClick={() => qty <99 && setQty(qty + 1)}>+</button>
        </div>

        <button className="cartBtn">ADD TO CART</button>

      </div>

      <div className="actions">
        <span>♡ ADD TO WISHLIST</span>
        <span>⇪ SHARE</span>
      </div>

      <div className="meta">
        <p>SKU: N/A</p>
        <p>CATEGORIES: Casual & Urban Wear, Jackets, Men</p>
        <p>TAGS: biker, black, bomber, leather</p>
      </div>

    </div>
  );
}