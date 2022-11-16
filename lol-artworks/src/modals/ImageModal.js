import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { saveAs } from "file-saver";
import { BsFillCloudDownloadFill } from "react-icons/bs";
import { AiOutlineCopy } from "react-icons/ai";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

export default function ImageModal({ show, setShow, skinLink, skinName }) {
  const [showToast, setShowToast] = useState(false);

  const downloadImage = () => {
    const skinLinkCopy = skinLink;
    saveAs(skinLinkCopy, "artWork.jpg");
  };

  const copyImageLink = () => {
    const skinLinkCopy = skinLink;
    navigator.clipboard.writeText(skinLinkCopy);
    setShowToast(true);
  };

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
          <ToastContainer position="top-center">
            <Toast
              onClose={() => setShowToast(false)}
              show={showToast}
              delay={1500}
              autohide
            >
              <Toast.Header>Link Copied To Clipboard!</Toast.Header>
            </Toast>
          </ToastContainer>
        </Modal.Header>
        <Modal.Body>
          <div className="modalImageDiv">
            <img src={skinLink} alt="champion" className="modalImage" />
          </div>
        </Modal.Body>
        <div className="imageModalFooter">
          <div className="iconModal" onClick={() => downloadImage()}>
            <BsFillCloudDownloadFill size="25" />
            Download Image
          </div>
          <div
            className="iconModal"
            onClick={() => {
              copyImageLink();
            }}
          >
            <AiOutlineCopy size="25" />
            Copy Image Link
          </div>
        </div>
      </Modal>
    </>
  );
}
