import React from "react";
//import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";
import image from "../../assets/luisfooter.jpeg"


const Footer = () => {
    return (
      <footer className="pie-pagina">
        <div className="grupo-1">
          <div className="box">
            <figure>
              <a href="#">
                <img src={image} alt="logo pagina" />
              </a>
            </figure>
          </div>
          <div className="box">
            <h2>SOBRE LUISITO-COMUNICA</h2>
            <p>Un Chikes porque todavia no se le sabe el genero, buen pibe!</p>
            <p>Solamente dice que esta durmiendo la siesta mientra se esta viendo el partido del real madrid</p>
          </div>
          <div className="box">
          <h2>SIGUENOS</h2>
          <div className="red-social">
            <FaFacebookF className="icon"></FaFacebookF>
            <FaInstagram className="icon"></FaInstagram>
            <FaWhatsapp className="icon"></FaWhatsapp>
          </div>
          </div>
        </div>
        <div className="grupo-2">
          <small>&copy; 2023 <b>Nombre pagina</b> - Todos los Derechos Reservados. </small>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  