import React from "react";
import "./AddNewProduct.css";

export default function AddNewProduct() {
  return (
    <div className="product-main">
      <h1 className="product-title">افزودن محصول جدید</h1>
      <form action="#" className="add-product-form">
        <div className="add-product-form-wrap">
          <div className="add-products-form-group">
            <input
              type="text"
              className="add-products-input"
              placeholder="نام محصول را بنویسید"
            />
          </div>
          <div className="add-products-form-group">
            <input
              type="text"
              className="add-products-input"
              placeholder="قیمت محصول را بنویسید"
            />
          </div>
          <div className="add-products-form-group">
            <input
              type="text"
              className="add-products-input"
              placeholder="موجودی محصول را بنویسید"
            />
          </div>
          <div className="add-products-form-group">
            <input
              type="text"
              className="add-products-input"
              placeholder="آدرس عکس را بنویسید"
            />
          </div>
          <div className="add-products-form-group">
            <input
              type="text"
              className="add-products-input"
              placeholder="میزان فروش محصول را بنویسید"
            />
          </div>
          <div className="add-products-form-group">
            <input
              type="text"
              className="add-products-input"
              placeholder=" تعداد رنگ بندی محصول را بنویسید"
            />
          </div>
        </div>
        <button className="add-product-btn">ثبت محصول</button>
      </form>
    </div>
  );
}
