import React from "react";
import "./FooterStyle.css"
import { FaGithub, FaHome, FaLinkedinIn, FaMailBulk, FaPhone } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome 
              size={20} 
              style={{ color: "#fff", marginRight: "2rem" }}/>
            <div>
              <p>Cajamarca, Peru</p>
            </div>
          </div>
          <div className="phone">
            <h4><FaPhone 
                  size={20} 
                  style={{ color: "#fff", marginRight: "2rem" }}
                />
          +51 987857139</h4>

          </div>
          <div className="email">
            <h4><FaMailBulk 
                  size={20} 
                  style={{ color: "#fff", marginRight: "2rem" }}
                />
            peq.daniel27@outlook.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>About me</h4>
          <p>
            These are the social networks where you can find me
          </p>
          <div className="social">
              <a 
                target="_blank" 
                href="https://www.linkedin.com/in/daniel-peque%C3%B1o-997814291/"
              >
               <FaLinkedinIn             
                size={30} 
                style={{ color: "#fff", marginRight: "1rem" }}
              /> 
              </a>
              
              <a 
                target="_blank" 
                href="https://github.com/danpeq"
              >
                <FaGithub 
                size={30} 
                style={{ color: "#fff", marginRight: "1rem" }}
              />
              </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer