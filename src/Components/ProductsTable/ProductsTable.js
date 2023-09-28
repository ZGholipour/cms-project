import React from "react";
import "./ProductsTable.css";

export default function ProductsTable() {
  return (
    <table className="product-table">
      <tr className="product-table-heading-tr">
        <th>عکس</th>
        <th>اسم</th>
        <th>قیمت</th>
        <th>موجودی</th>
      </tr>
      <tr className="product-table-tr">
        <td>
          <img
            src="/img/oil.jpeg"
            alt="oil png"
            className="products-table-img"
          />
        </td>
        <td>روغن سرخ کردنی</td>
        <td>92000 تومان</td>
        <td>82</td>
        <td>
          <button className="product-table-btn">جزییات</button>
          <button className="product-table-btn">حذف</button>
          <button className="product-table-btn">ویرایش</button>
        </td>
      </tr>
    </table>
  );
}
