import React, { useEffect, useState } from "react";
import ErrorBox from "../ErrorBox/ErrorBox";
import "./Comments.css";
import DetailsModal from "../DetailsModal/DetailsModal";
import DeleteModal from "../DeleteModal/DeleteModal";

export default function Comments() {
  const [allComments, setAllComments] = useState([]);
  const [isShowDetailsModal, setIsShowDetailsModal] = useState(false);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [mainComment, setMainComment] = useState("");

  useEffect(() => {
    fetch(`http://localhost:8000/api/comments/`)
      .then((res) => res.json())
      .then((comments) => setAllComments(comments));
  }, []);

  const closeDetailsModal = () => {
    setIsShowDetailsModal(false);
  };
  const closeDeleteModal = () => {
    setIsShowDeleteModal(false);
  };
  const deleteComment = () => {
    console.log("comment deleted");
    setIsShowDeleteModal(false);
  };
  return (
    <div className="cms-main">
      {allComments.length ? (
        <table className="cms-table">
          <thead>
            <tr>
              <th>اسم کاربر</th>
              <th>محصول</th>
              <th>متن کامنت</th>
              <th>تاریخ ثبت</th>
              <th>ساعت ثبت</th>
            </tr>
          </thead>
          <tbody>
            {allComments.map((comment) => (
              <tr key={comment.id}>
                <td>{comment.userID}</td>
                <td>{comment.productID}</td>
                <td>
                  <button
                    onClick={() => {
                      setMainComment(comment.body);
                      setIsShowDetailsModal(true);
                    }}
                  >
                    دیدن متن
                  </button>
                </td>
                <td>{comment.date}</td>
                <td>{comment.hour}</td>
                <td>
                  <button onClick={() => setIsShowDeleteModal(true)}>
                    حذف
                  </button>
                  <button>ویرایش</button>
                  <button>پاسخ</button>
                  <button>تایید</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <ErrorBox msg="هیچ کامنتی یافت نشد" />
      )}
      {isShowDetailsModal && (
        <DetailsModal onHide={closeDetailsModal}>
          <p className="text-modal">{mainComment}</p>
          <button className="text-modal-close-btn" onClick={closeDetailsModal}>
            بستن
          </button>
        </DetailsModal>
      )}
      {isShowDeleteModal && (
        <DeleteModal
          cancelAction={closeDeleteModal}
          submitAction={deleteComment}
        ></DeleteModal>
      )}
    </div>
  );
}
