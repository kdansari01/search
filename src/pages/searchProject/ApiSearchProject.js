import React, { useState } from "react";
import "./style.css";
import Dropdown from "./Dropdown";
import { ApiSearchProjectChild } from "./ApiSearchProjectChild";
import { Pagination } from "../../pagination/Pagination";

const ApiSearchProject = ({ posts }) => {
  const [page, setPage] = useState(1);
  // const [active, setActive] = useState(null);
  // const [offerModal, setOfferModal] = useState(false);
  const headers = [
    "Buyer",
    "Project Details",
    "Price",
    "Delivery Time",
    "Post Day",
    "Offer",
    "Action",
  ];

  return (
    <>
      <div>
        <div className="searchProject card row col-12 d-lg-block d-xl-block d-sm-none d-md-block d-none">
          <Dropdown />
          <table className="">
            <tr className="">
              {headers.map((ele, index) => (
                <th key={index}>{ele}</th>
              ))}
            </tr>
            {posts.map((ele, ind) => (
              <ApiSearchProjectChild {...ele} />
            ))}
          </table>
          <div className="justify-content-center d-flex text-center mt-2">
            <Pagination value={page} range={6} onChange={setPage} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ApiSearchProject;
