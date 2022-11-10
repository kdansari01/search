import React from "react";
import { MobileCard } from "./MobileCard";

const Card = ({ posts }) => {
  return (
    <div className="d-lg-none d-xl-none d-sm-block d-md-none ">
      <div className="container-fluid  justify-content-center d-flex mt-4 ">
        <div className="row col-10 d-flex mt-4 ">
          <div className="px-4 p-4 card bg-light text-dark text-end container">
            <h3 className="" style={{position: "relative", right: "10px" }}>Filter</h3>
          </div>
          {posts.map((ele) => (
            <MobileCard {...ele} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
