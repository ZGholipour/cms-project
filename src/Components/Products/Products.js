import React from "react";
import ErrorBox from "../ErrorBox/ErrorBox";
import AddNewProduct from "../AddNewProduct/AddNewProduct";
import ProductsTable from "../ProductsTable/ProductsTable";

export default function Products() {
  return (
    <>
      <ErrorBox msg={"هیچ محصولی یافت نشد"} />
      <AddNewProduct />
      <ProductsTable />
    </>
  );
}
