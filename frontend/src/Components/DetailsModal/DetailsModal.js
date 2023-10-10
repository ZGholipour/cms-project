import React, { Children, useEffect } from "react";
import "./DetailsModal.css";

export default function DetailsModal({ closeModal, children }) {
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
      <div className="details-modal ">{children}</div>
      {children}
    </div>
  );
}
