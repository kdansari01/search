import { Modal } from "react-bootstrap";
import "./modal.css";
import dollar from "../../assests/image/Vector(6).png";
import watch from "../../assests/image/Vector(7).png";
import React from "react";
const SendOfferModal = ({ setOfferModal, offerModal }) => {
  return (
    <Modal
      size="md"
      show={offerModal}
      onHide={() => setOfferModal(false)}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1 className="modal-title fs-5" id="exampleModalLabel">
            Send Offer
          </h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body p-4">
        <div className="modal-wrapper">
          <lable className="input-lable">Total Offer Amount</lable>
          <input type="text" className="dollarInput form-control mt-2 mb-2" placeholder="200-500"/>
          <img src={dollar} alt="dlr" className="dollar" />
        </div>
        <div>
          <lable className="input-lable">Delivery Time</lable>
          <input type="text" className="form-control mt-2 mb-2" placeholder="4 days" />
          <img src={watch} alt="dlr" className="watch" />
        </div>
        <div>
          <lable className="input-lable">Description</lable>
          <textarea type="text" className="form-control mt-2" placeholder="type something"/>
        </div>
        <div className=" col-12 mt-4">
          <button type="button" className="btn btn-dark text-light col-12">
            Send
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default SendOfferModal;
