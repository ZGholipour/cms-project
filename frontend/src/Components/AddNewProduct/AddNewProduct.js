import React, { useState } from "react";
import "./AddNewProduct.css";

export default function AddNewProduct() {
  const [newProductTitle, setNewProductTitle] = useState("");
  const [newProductPrice, setNewProductPrice] = useState("");
  const [newProductCount, setNewProductCount] = useState("");
  const [newProductImg, setNewProductImg] = useState("");
  const [newProductPopularity, setNewProductPopularity] = useState("");
  const [newProductSale, setNewProductSale] = useState("");
  const [newProductColors, setNewProductColors] = useState("");

  const newProductsInfos = {
    title: newProductTitle,
    price: newProductPrice,
    count: newProductCount,
    img: newProductImg,
    popularity: newProductPopularity,
    sale: newProductSale,
    colors: newProductColors,
  };

  const addNewProduct = (event) => {
    event.preventDefault();
    fetch(`http://localhost:8000/api/products/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProductsInfos),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => console.log(data));
  };
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
              value={newProductTitle}
              onChange={(event) => {
                setNewProductTitle(event.target.value);
              }}
            />
          </div>
          <div className="add-products-form-group">
            <input
              type="text"
              className="add-products-input"
              placeholder="قیمت محصول را بنویسید"
              value={newProductPrice}
              onChange={(event) => {
                setNewProductPrice(event.target.value);
              }}
            />
          </div>
          <div className="add-products-form-group">
            <input
              type="text"
              className="add-products-input"
              placeholder="موجودی محصول را بنویسید"
              value={newProductCount}
              onChange={(event) => {
                setNewProductCount(event.target.value);
              }}
            />
          </div>
          <div className="add-products-form-group">
            <input
              type="text"
              className="add-products-input"
              placeholder="آدرس عکس را بنویسید"
              value={newProductImg}
              onChange={(event) => {
                setNewProductImg(event.target.value);
              }}
            />
          </div>
          <div className="add-products-form-group">
            <input
              type="text"
              className="add-products-input"
              placeholder="میزان محبوبیت محصول را بنویسید"
              value={newProductPopularity}
              onChange={(event) => {
                setNewProductPopularity(event.target.value);
              }}
            />
          </div>{" "}
          <div className="add-products-form-group">
            <input
              type="text"
              className="add-products-input"
              placeholder="میزان فروش محصول را بنویسید"
              value={newProductSale}
              onChange={(event) => {
                setNewProductSale(event.target.value);
              }}
            />
          </div>
          <div className="add-products-form-group">
            <input
              type="text"
              className="add-products-input"
              placeholder=" تعداد رنگ بندی محصول را بنویسید"
              value={newProductColors}
              onChange={(event) => {
                setNewProductColors(event.target.value);
              }}
            />
          </div>
        </div>
        <button className="add-product-btn" onClick={addNewProduct}>
          ثبت محصول
        </button>
      </form>
    </div>
  );
}
