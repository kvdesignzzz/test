import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import BtnRender from "./BtnRender";

function ProductItem({ product, isAdmin, deleteProduct, handleCheck }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <div data-aos="fade-right" className="product_card">
      {isAdmin && (
        <input
          type="checkbox"
          checked={product.checked}
          onChange={() => handleCheck(product._id)}
        />
      )}
      <img src={product.images.url} alt="" />
      <div className="product_box">
        <h2 title={product.title}>{product.title}</h2>
        <span>${product.price}</span>
        <p>{product.description}</p>
      </div>
      <BtnRender product={product} deleteProduct={deleteProduct} />
      {}
    </div>
  );
}
export default ProductItem;
