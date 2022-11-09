import React, { useState } from "react";
import SendOfferModal from "./Modal";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import arrow from "../../assests/image/arrow.png" 
import "./style.css";

export const ApiSearchProjectChild = ({ id, name }) => {
  const [offerModal, setOfferModal] = useState(false);
  return (
    <tr key={id} className="dataCard  mb-2">
      <td>
        <p>
          <PermIdentityIcon className="menIcon ml-2 "/> {name}
        </p>
      </td>
      <td className="">
        Lorem ipsum dolor sit <br /> amet, consectetur <br />
        adipiscing elit.
      </td>
      <td className="">₹ {Math.floor(Math.random() * 1000)}</td>
      <td className="daysAgo ">2 Days ago</td>
      <td className="">Active</td>
      <td className=" ">
        <PermIdentityIcon className="offer" fontSize="10" />
        <span>{Math.floor(Math.random() * 20)}+</span>
      </td>
      <td className="p-2">
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
      </td>
      <SendOfferModal setOfferModal={setOfferModal} offerModal={offerModal} />
    </tr>
  );
};
