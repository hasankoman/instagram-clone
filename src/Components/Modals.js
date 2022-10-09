import { useState } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, openModal } from "Store/modalStore";

const customStyles = {
  content: {
    padding: "0",
    width: "400px",
    height: "auto",
    borderRadius: "12px",
    margin: "20px",
    inset: false,
  },
  overlay: {
    height: "100vh",
    display: "flex",
    "justify-content": "center",
    "align-items": "center",
    zIndex: 9999,
    backgroundColor: "rgba(0, 0, 0, 0.62)",
  },
};

export default function Modals() {
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  if (modal.modalName === "postSettings") {
    return (
      <Modal
        isOpen={modal.isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        className="open-modal"
        contentLabel="Post Settings Modal"
      >
        <div>
          <ul className="flex flex-col ">
            <button className="post-settings-modal-item text-red-600 font-bold !border-t-0 ">
              Report
            </button>
            <button className="post-settings-modal-item text-red-600 font-bold ">
              Unfollow
            </button>
            <button className="post-settings-modal-item ">
              Add to favorites
            </button>
            <button className="post-settings-modal-item">Go to post</button>
            <button className="post-settings-modal-item">Share to...</button>
            <button className="post-settings-modal-item">Copy link</button>
            <button className="post-settings-modal-item">Embed</button>
            <button
              className="post-settings-modal-item"
              onClick={() => dispatch(closeModal())}
            >
              Cancel
            </button>
          </ul>
        </div>
      </Modal>
    );
  }
  if(modal.modalName === "comments"){
    return (
        <Modal
          isOpen={modal.isModalOpen}
          onRequestClose={closeModal}
          style={customStyles}
          className="open-modal"
          contentLabel="Post Settings Modal"
        >
          <div>
            <ul className="flex flex-col ">
              <button className="post-settings-modal-item text-red-600 font-bold !border-t-0 ">
                Report
              </button>
              <button className="post-settings-modal-item text-red-600 font-bold ">
                Unfollow
              </button>
              <button className="post-settings-modal-item ">
                Add to favorites
              </button>
              <button className="post-settings-modal-item">Go to post</button>
              <button className="post-settings-modal-item">Share to...</button>
              <button className="post-settings-modal-item">Copy link</button>
              <button className="post-settings-modal-item">Embed</button>
              <button
                className="post-settings-modal-item"
                onClick={() => dispatch(closeModal())}
              >
                Cancel
              </button>
            </ul>
          </div>
        </Modal>
      );
  }
}
