import Modal from "react-bootstrap/Modal";
import { useState } from "react";

export default function ImageModal({ show, setShow, skinLink, skinName }) {
  return (
    <>
      <Modal
        show={show}
        fullscreen={true}
        onHide={() => setShow(false)}
        className="modalModal"
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h3 style={{ textTransform: "capitalize" }}>{skinName}</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modalImageDiv">
            <img src={skinLink} className="modalImage" />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
