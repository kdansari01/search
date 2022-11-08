import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer container-fluid border ">
      <div className="wrapper row col-12 d-flex pt-4">
        <div className="logo col-lg-3 px-4 col-md-4 col-6">
          <h1 className="logo1  text-center">Logo</h1>
          <div>
            <p>
              1901 Thornridge Cir.
              <br /> Shiloh, Hawaii <br />
              81063
            </p>
          </div>
        </div>
        <div className="company px-4 col-lg-2 col-md-4 col-6">
          <h3>Company</h3>
          <p>About us</p>
          <p>Career</p>
          <p>team</p>
          <p>Contact</p>
        </div>
        <div className="product px-4 col-lg-2 col-md-4 col-6">
          <h3>Product</h3>
          <p>service</p>
          <p>FreeLancer</p>
          <p>Features</p>
          <p>Development</p>
        </div>
        <div className="link  px-4 col-lg-2 col-md-4 col-6">
          <h3>Link</h3>
          <p>Privacy</p>
          <p>term & condition</p>
          <p>FAQ</p>
        </div>
        <div className="social px-5  col-lg-3 col-md-4 col-12">
          <h3 className="mx-2">Follow Us</h3>
          <Twitter className="twitter" style={{ fontSize: "40px", marginLeft: "10px" }} />
          <Facebook className="facebook" style={{ fontSize: "40px", marginLeft: "10px" }} />
          <Instagram className="instagram" style={{ fontSize: "40px", marginLeft: "10px" }} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
