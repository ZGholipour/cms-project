import React, { useEffect, useState } from "react";
import "./ProductsTable.css";
import DeleteModal from "../DeleteModal/DeleteModal";
import DetailsModal from "../DetailsModal/DetailsModal";
import EditModal from "../EditModal/EditModal";
import { AiOutlineDollarCircle } from "react-icons/ai";
import ErrorBox from "../ErrorBox/ErrorBox";

export default function ProductsTable() {
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowDetailModal, setIsShowDetailModal] = useState(false);
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [productId, setProductId] = useState(null);
  const [mainProductInfo, setMainProductInfo] = useState({});

  const [productNewTitle, setProductNewTitle] = useState("");
  const [productNewPrice, setProductNewPrice] = useState("");
  const [productNewCount, setProductNewCount] = useState("");
  const [productNewImg, setProductNewImg] = useState("");
  const [productNewPopularity, setProductNewPopularity] = useState("");
  const [productNewSale, setProductNewSale] = useState("");
  const [productNewColors, setProductNewColors] = useState("");

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    fetch("http://localhost:8000/api/products/")
      .then((res) => res.json())
      .then((products) => setAllProducts(products));
  };

  const deleteModalCancelAction = () => {
    setIsShowDeleteModal(false);
  };

  const deleteModalSubmitAction = () => {
    fetch(`http://localhost:8000/api/products/${productId}`, {
      method: "Delete",
    })
      .then((res) => res.json())
      .then((data) => getAllProducts());
    setIsShowDeleteModal(false);
  };

  const closeDetailsModal = () => {
    setIsShowDetailModal(false);
  };

  const updateProductInfos = (event) => {
    event.preventDefault();
    console.log("ok");
  };

  return (
    <>
      {allProducts.length ? (
        <table className="product-table">
          <thead>
            <tr className="product-table-heading-tr">
              <th>عکس</th>
              <th>اسم</th>
              <th>قیمت</th>
              <th>موجودی</th>
            </tr>
          </thead>
          <tbody>
            {allProducts.map((product) => (
              <tr className="product-table-tr">
                <td>
                  <img
                    src={product.img}
                    alt="product image"
                    className="products-table-img"
                  />
                </td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.count}</td>
                <td>
                  <button
                    className="product-table-btn"
                    onClick={() => {
                      setIsShowDetailModal(true);
                      setMainProductInfo(product);
                    }}
                  >
                    جزییات
                  </button>
                  <button
                    className="product-table-btn"
                    onClick={() => {
                      setIsShowDeleteModal(true);
                      setProductId(product.id);
                    }}
                  >
                    حذف
                  </button>
                  <button
                    className="product-table-btn"
                    onClick={() => {
                      setIsShowEditModal(true);
                      setProductNewTitle(product.title);
                      setProductNewPrice(product.price);
                      setProductNewSale(product.sale);
                      setProductNewCount(product.count);
                      setProductNewPopularity(product.popularity);
                      setProductNewImg(product.img);
                      setProductNewColors(product.colors);
                    }}
                  >
                    ویرایش
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <ErrorBox msg={"هیچ محصولی یافت نشد"} />
      )}

      {isShowDeleteModal && (
        <DeleteModal
          submitAction={deleteModalSubmitAction}
          cancelAction={deleteModalCancelAction}
        />
      )}
      {isShowDetailModal && (
        <DetailsModal closeModal={closeDetailsModal}>
          <table className="cms-table">
            <thead>
              <tr>
                <th>اسم</th>
                <th>قیمت</th>
                <th>محبوبیت</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{mainProductInfo.title}</td>
                <td>{mainProductInfo.sale}</td>
                <td>{mainProductInfo.popularity}</td>
              </tr>
            </tbody>
          </table>
        </DetailsModal>
      )}
      {isShowEditModal && (
        <EditModal
          onClose={() => setIsShowEditModal(false)}
          onSubmit={updateProductInfos}
        >
          <div className="edit-products-form-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="عنوان جدید را وارد کنید"
              className="edit-product-input"
              value={productNewTitle}
            />
          </div>
          <div className="edit-products-form-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="قیمت جدید را وارد کنید"
              className="edit-product-input"
              value={productNewPrice}
            />
          </div>
          <div className="edit-products-form-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="موجودی جدید را وارد کنید"
              className="edit-product-input"
              value={productNewCount}
            />
          </div>
          <div className="edit-products-form-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="تصویر جدید را وارد کنید"
              className="edit-product-input"
              value={productNewImg}
            />
          </div>
          <div className="edit-products-form-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="محبوبیت محصول جدید را وارد کنید"
              className="edit-product-input"
              value={productNewPopularity}
            />
          </div>
          <div className="edit-products-form-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="میزان فروش محصول جدید را وارد کنید"
              className="edit-product-input"
              value={productNewSale}
            />
          </div>
          <div className="edit-products-form-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              placeholder="رنگ بندی محصول جدید را وارد کنید"
              className="edit-product-input"
              value={productNewColors}
            />
          </div>
        </EditModal>
      )}
    </>
  );
}
