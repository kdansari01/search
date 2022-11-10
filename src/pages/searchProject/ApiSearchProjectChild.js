import React, { useState } from "react";
import SendOfferModal from "./Modal";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import arrow from "../../assests/image/arrow.png" 
import "./style.css";

export const ApiSearchProjectChild = ({ id, name }) => {
  const [offerModal, setOfferModal] = useState(false);
  return (
    <div key={id} className="dataCard  mb-2">
      <div>
        <p>
          <PermIdentityIcon className="menIcon ml-2 "/> {name}
        </p>
      </div>
      <div className="">
        Lorem ipsum dolor sit <br /> amet, consectetur <br />
        adipiscing elit.
      </div>
      <div className="">₹ 1500</div>
      <div className="daysAgo ">2 Days ago</div>
      <div className="">Active</div>
      <div className=" ">
        <PermIdentityIcon className="offer" fontSize="10" />
        <span>13+</span>
      </div>
      <div className="p-2">
        <button
          type="button"
          className="btn btn-dark"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={() => setOfferModal(true)}
        >
        <img src={arrow} alt="arrow" className="arrowBtn "/>
          Send Offer
        </button>
      </div>
      <SendOfferModal setOfferModal={setOfferModal} offerModal={offerModal} />
    </div>
  );
};
