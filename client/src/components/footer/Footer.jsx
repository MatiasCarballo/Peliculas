import React from "react";
// import { Link } from "react-router-dom";
// import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";


const Footer = () => {
    return (
      <div className="footer">
        <div className="saltooooo"></div>
  
        <div className="contact">
          <a href="" target="_blanc">
            <div className="rs">
              {/* <FaFacebookF className="icon" /> */}
            </div>
          </a>
          <a
            href=""
            target="_blanc"
          >
            <div className="rs">
              {/* <FaInstagram className="icon" /> */}
            </div>
          </a>
  
          <a
            href=""
            target="_blanc"
          >
            <div className="rs">
              {/* <FaWhatsapp className="icon" style={{ width: "80px" }} /> */}
            </div>
          </a>
          <div className="logo">
            {/* <Link to="/">
              <img src={image} alt="not-found" width={200} />
            </Link> */}
          </div>
          <div className="teldic">
            {/* <Link to={"/contacto"}>
              <h1>CONTACTO</h1>
            </Link> */}
            <h2>Email: </h2>
            <h2>Telefono:</h2>
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;
  