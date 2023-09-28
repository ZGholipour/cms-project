import React, { useEffect } from "react";
import "./DetailsModal.css";

export default function DetailsModal({ closeModal }) {
  useEffect(() => {
    const checkKey = (event) => {
      if (event.keyCode === 27) {
        closeModal();
      }
    };
    window.addEventListener("keydown", checkKey);
    return () => window.removeEventListener("keydown", checkKey);
  });

  return (
    <div className="modal-parent active">
      <div className="details-modal ">
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
              <td>لپ تاپ</td>
              <td>12000000</td>
              <td>91</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
